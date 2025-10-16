type PartyName = 'democrat' | 'republican' | 'independent' | 'petitioning' | 'working_families' | 'other';
type VoterData = {
  year: number;
  pollDataUrl: string | null;
  populationDataUrl: string | null;
  candidates: {
    name: string;
    votes: Partial<Record<PartyName, number>>
  }[];
  townPopulation: number | null; // todo: update
  actualPopulationYear?: number,
  isPopEstimate?: boolean;
}

const frankEsposito = 'Frank J. Esposito';
const richardMoccia = 'Richard A. Moccia';
const scottMerrell = 'Scott P. Merrell';
const harryRilling = 'Harry Rilling';
// 2013 rilling vs moccia
//  8,598 votes to 7,077

export const voterData: VoterData[] = [
  {
    year: 2023,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/37639/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2025/Norwalk.pdf',
    townPopulation: 91375,
    candidates: [
      {
        name: 'Harry W. Rilling',
        votes: {
          democrat: 8026,
          working_families: 358,
        }
      },
      {
        name: 'Vincent Scicchitano',
        votes: {
          republican: 6735
        }
      },
    ],
  },
  {
    year: 2021,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/31172/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2021/Norwalk.pdf',
    townPopulation: 88599,
    candidates: [
      {
        name: 'Harry W. Rilling',
        votes: {
          democrat: 8665,
          working_families: 387,
        }
      },
      {
        name: 'Jonathan Riddle',
        votes: {
          republican: 5180
        }
      },
    ],
  },
  {
    year: 2019,
    actualPopulationYear: 2020,
    isPopEstimate: true,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/1285/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    townPopulation: 86302,
    candidates: [
      {
        name: 'Harry W. Rilling',
        votes: {
          democrat: 8397,
          working_families: 385,
        }
      },
      {
        name: 'Lisa M. Brinton',
        votes: {
          republican: 7047
        }
      },
    ],
  },
  {
    year: 2017,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/3038/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    isPopEstimate: true,
    townPopulation: 88537,
    candidates: [
      {
        name: 'Harry W. Rilling',
        votes: {
          democrat: 7627,
          working_families: 307,
        }
      },
      {
        name: 'Lisa M. Brinton',
        votes: {
          petitioning: 3264
        }
      },
      {
        name: 'Andrew T. Conroy',
        votes: {
          republican: 2201
        }
      },
      {
        name: 'Bruce V. Morris',
        votes: {
          petitioning: 915
        }
      }
    ]
  },
  {
    year: 2013,
    pollDataUrl: 'https://www.hamlethub.com/norwalk-connecticut/40190-rilling-wins-norwalk-mayoral-race-over-moccia',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    isPopEstimate: true,
    townPopulation: 88537,
    candidates: [
      {
        name: harryRilling,
        votes: {
          democrat: 8598
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 7077
        }
      }
    ]
  },
  {
    year: 2011,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/6085/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    actualPopulationYear: 2010,
    isPopEstimate: true,
    townPopulation: 86500,
    candidates: [
      {
        name: richardMoccia,
        votes: {
          republican: 7590
        }
      },
      {
        name: 'Andy Garfunkel',
        votes: {
          democrat: 6253,
          working_families: 502
        }
      }
    ]
  },
  {
    year: 2009,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/6554/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    actualPopulationYear: 2010,
    isPopEstimate: true,
    townPopulation: 85250,
    candidates: [
      {
        name: richardMoccia,
        votes: {
          republican: 7925,
        }
      },
      {
        name: 'Steven Serasis',
        votes: {
          democrat: 4775,
          other: 300
        }
      },
      {
        name: scottMerrell,
        votes: {
          other: 238
        }
      }
    ]
  },
  {
    year: 2007,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/7038/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    actualPopulationYear: 2010,
    isPopEstimate: true,
    townPopulation: 84750,
    candidates: [
      {
        name: richardMoccia,
        votes: {
          republican: 7763,
        }
      },
      {
        name: 'Walter O. Briggs III',
        votes: {
          democrat: 4876,
          working_families: 298,
        }
      },
      {
        name: scottMerrell,
        votes: {
          independent: 353
        }
      }
    ]
  },
  {
    year: 2005,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/7468/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    actualPopulationYear: 2010,
    isPopEstimate: true,
    townPopulation: 84250,
    candidates: [
      {
        name: richardMoccia,
        votes: {
          republican: 8259,
        },
      },
      {
        name: 'Alex A. Knopp',
        votes: {
          democrat: 8083,
        }
      },
      {
        name: 'Jose A. Lucero',
        votes: {
          working_families: 192
        }
      },
      {
        name: 'Myritce Riley-Wilson',
        votes: {
          petitioning: 156
        }
      }
    ]
  },
]
