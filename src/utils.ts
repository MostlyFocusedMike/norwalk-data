import { type Candidate } from './data'

export const getCandidateTotalVotes = (candidate?: Candidate) => {
  console.log('candidate:', candidate);
  if (!candidate) return 0;
  return Object.values(candidate.votes).reduce((a, v) => a + v, 0);
}
