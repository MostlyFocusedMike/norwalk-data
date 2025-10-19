import { voterData, type Candidate, type PartyName } from './data'
import { Colors } from 'chart.js';
import Chart from 'chart.js/auto'
import '../style.css'

const getCandidateTotalVotes = (candidate?: Candidate) => {
  if (!candidate) return 0;
  return Object.values(candidate.votes).reduce((a, v) => a + v, 0);
}

Chart.register(Colors);

const years = voterData.map(({ year }) => year)
const townPopulations = voterData.map(({ townPopulation }) => townPopulation)

const democratPrimary = voterData.map(({ candidates }) => {
  const democrat = candidates[0]
  return getCandidateTotalVotes(democrat);
});

const republicanPrimary = voterData.map(({ candidates }) => {
  const republican = candidates[1];
  return getCandidateTotalVotes(republican);
});

const thirdPartyTotals = voterData.map(({ candidates }) => {
  return getCandidateTotalVotes(candidates[2]) + getCandidateTotalVotes(candidates[3])
});

export const drawElectionByCandidate = () => {
  const chart1 = new Chart(
    document.getElementById('chart-by-candidate') as HTMLCanvasElement,
    {
      type: 'bar',
      options: {
        plugins: {
          title: {
            text: "Election Results By Candidate",
            display: true,
            color: '#000',
            font: { size: 20 }
          }
        },
      },
      data: {
        labels: years,
        datasets: [
          {
            label: 'Democratic Candidate',
            data: democratPrimary,
            backgroundColor: '#0e71b3ff',
          },
          {
            label: 'Republican Candidate',
            data: republicanPrimary,
            backgroundColor: '#b91b1bff',
          },
          {
            label: 'All Other Candidates',
            data: thirdPartyTotals,
            backgroundColor: '#8e00daff',
          },
          {
            label: 'Norwalk Population by Year',
            data: townPopulations,
            backgroundColor: '#262626ff',
            hidden: true
          }
        ]
      }
    }
  )
}