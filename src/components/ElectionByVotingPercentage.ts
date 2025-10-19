import { voterData } from '../data'
import { Colors } from 'chart.js';
import Chart from 'chart.js/auto'
import '../style.css'
import { getCandidateTotalVotes } from '../utils';

Chart.register(Colors);

const years = voterData.map(({ year }) => year)

const totalVotesPerYear = voterData.map(({ candidates, townPopulation }) => {
  const totalVotes = candidates.reduce((acc, candidate) => {
    return acc + getCandidateTotalVotes(candidate);
  }, 0)
  return Math.round(totalVotes / townPopulation * 100);
})

const swingPercentage = voterData.map(({ candidates, townPopulation }) => {
  const candidateTotals = candidates.map((candidate) => {
    return getCandidateTotalVotes(candidate);
  })
  candidateTotals.sort((a, b) => b - a);

  const difference = candidateTotals[0] - candidateTotals[1]

  return ((difference / townPopulation) * 100).toFixed(2) as unknown as number;
})

console.log(swingPercentage);

export const drawElectionByVotingPercentage = () => {
  new Chart(
    document.getElementById('chart-by-votes') as HTMLCanvasElement,
    {
      type: 'bar',
      options: {
        plugins: {
          title: {
            text: "Total Voters by percentages",
            display: true,
            color: '#000',
            font: { size: 20 },
          }
        },
        scales: {
          y: {
            max: 30,
            title: {
              display: true,
              text: 'Percentage'
            },
            ticks: {
              callback: (value, index, ticks) => value + '%',
            }
          }
        }
      },
      data: {
        labels: years,
        datasets: [
          {
            label: 'Percentage of residents who voted',
            data: totalVotesPerYear,
            backgroundColor: '#006629ff',
          },
          {
            label: 'Percent of residents to swing election',
            data: swingPercentage,
            backgroundColor: '#8b0e4dff',
          },
        ]
      }
    }
  )
}