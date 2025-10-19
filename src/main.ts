import './style.css'
import { drawElectionByCandidate } from './components/ElectionByCandidate';
import { drawElectionByVotingPercentage } from './components/ElectionByVotingPercentage';
import { drawSourceTable } from './components/SourceTable';

(document.querySelector('#app') as HTMLDivElement).innerHTML = /*html*/`
  <main>
    <div class="chart-container" style="position: relative; height: 40rem; width:80%; margin: 1rem auto">
      <canvas id="chart-by-candidate"></canvas>
    </div>
    <div id="sources-table-container"></div>
    <div class="chart-container" style="position: relative; height: 40rem; width:80%; margin: 1rem auto">
      <canvas id="chart-by-votes"></canvas>
    </div>
  </main>
`;


drawElectionByCandidate();
drawSourceTable();
drawElectionByVotingPercentage();