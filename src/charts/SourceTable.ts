import { voterData } from "./data";
import { getCandidateTotalVotes } from "../utils";
const reversedVoterData = structuredClone(voterData).reverse();

const drawRows = () => {
  return reversedVoterData.map((dataByYear) => {
    const { year, populationDataUrl, pollDataUrl, candidates } = dataByYear;
    const pollUrl = new URL(pollDataUrl)
    const popUrl = new URL(populationDataUrl);
    const democrat = candidates[0]
    const republican = candidates[1]
    const thirdParty = candidates[2];
    const thirdParty2 = candidates[3];

    return /*html*/`
    <tr>
      <td>${year}</td>
      <td>
        <a href="${pollDataUrl}" target="_blank" rel="noopener noreferrer">${pollUrl.hostname}</a>
      </td>
      <td>
        <a href="${populationDataUrl}" target="_blank" rel="noopener noreferrer">${popUrl.pathname}</a>
      </td>
      <td>${democrat.name}</td>
      <td>${getCandidateTotalVotes(democrat)}</td>
      <td>${republican.name}</td>
      <td>${getCandidateTotalVotes(republican)}</td>
      <td>${thirdParty?.name || ''}</td>
      <td>${getCandidateTotalVotes(thirdParty) || ''}</td>
      <td>${thirdParty2?.name || ''}</td>
      <td>${getCandidateTotalVotes(thirdParty2) || ''}</td>
    </tr>`;
  }).join('')
}

export const drawSourceTable = () => {
  const sourcesTable = document.querySelector('#sources-table-container') as HTMLDivElement;
  sourcesTable.innerHTML = /*html*/`
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Polling Source</th>
          <th>Population Source</th>
          <th>Democrat</th>
          <th class="skinny">Dem Votes</th>
          <th>Republican</th>
          <th class="skinny">GOP Votes</th>
          <th>3rd Party 1</th>
          <th class="skinny">3rd Party Votes</th>
          <th>3rd Party 2</th>
          <th class="skinny">3rd Party Votes</th>
        </tr>
      </thead>
      <tbody>
      ${drawRows()}
      </tbody>
    </table>
    https://www.advancect.org/town-profiles
  `;
}