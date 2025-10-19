export type PartyName = 'democrat' | 'republican' | 'independent' | 'petitioning' | 'working_families' | 'other';
export type Candidate = {
  name: string;
  votes: Partial<Record<PartyName, number>>
}
export type VoterData = {
  year: number;
  pollDataUrl: string;
  populationDataUrl: string;
  candidates: Candidate[];
  townPopulation: number;
  actualPopulationYear?: number,
  isPopEstimate?: boolean;
}

const richardMoccia = 'Richard Moccia';
const scottMerrell = 'Scott Merrell';
const harryRilling = 'Harry Rilling';
// 2013 rilling vs moccia
//  8,598 votes to 7,077

const voterData: VoterData[] = [
  {
    year: 2023,
    pollDataUrl: 'https://electionhistory.ct.gov/eng/contests/view/37639/',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2023/Norwalk.pdf',
    townPopulation: 90821,
    candidates: [
      {
        name: harryRilling,
        votes: {
          democrat: 8026,
          working_families: 358,
        },
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
        name: harryRilling,
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
        name: harryRilling,
        votes: {
          democrat: 8397,
          working_families: 385,
        }
      },
      {
        name: 'Lisa Brinton',
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
        name: harryRilling,
        votes: {
          democrat: 7627,
          working_families: 307,
        }
      },
      {
        name: 'Andrew Conroy',
        votes: {
          republican: 2201
        }
      },
      {
        name: 'Lisa Brinton',
        votes: {
          petitioning: 3264
        }
      },
      {
        name: 'Bruce Morris',
        votes: {
          petitioning: 915
        }
      }
    ]
  },
  {
    year: 2015,
    pollDataUrl: 'https://norwalkct.gov/DocumentCenter/View/8757/2015-CONSOLIDATED-TALLY-SHEET?bidId=',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    isPopEstimate: true,
    townPopulation: 88500,
    candidates: [
      {
        name: harryRilling,
        votes: {
          democrat: 7759,
          working_families: 309,
          other: 305
        }
      },
      {
        name: 'Kelly L. Straniti',
        votes: {
          republican: 4896
        }
      }
    ]
  },
  {
    year: 2013,
    pollDataUrl: 'https://norwalkct.gov/DocumentCenter/View/5318/2013-election-results?bidId=',
    populationDataUrl: 'https://s3-us-west-2.amazonaws.com/cerc-pdfs/2019/norwalk-2019.pdf',
    isPopEstimate: true,
    townPopulation: 88537,
    candidates: [
      {
        name: harryRilling,
        votes: {
          democrat: 9006
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 7514
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
        name: 'Andy Garfunkel',
        votes: {
          democrat: 6253,
          working_families: 502
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 7590
        }
      },
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
        name: 'Steven Serasis',
        votes: {
          democrat: 4775,
          other: 300
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 7925,
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
        name: 'Walter Briggs',
        votes: {
          democrat: 4876,
          working_families: 298,
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 7763,
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
        name: 'Alex Knopp',
        votes: {
          democrat: 8083,
        }
      },
      {
        name: richardMoccia,
        votes: {
          republican: 8259,
        },
      },
      {
        name: 'Jose Lucero',
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

voterData.reverse();

export { voterData }
