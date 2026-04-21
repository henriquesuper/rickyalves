export const TIME_PROPHECIES = [
  {
    id: 'seventyWeeks',
    startYear: -457,
    endYear: 34,
    durationLabel: '490 years',
    color: '#4ADE80',
    segments: [
      { label: '7 weeks', startYear: -457, endYear: -408 },
      { label: '62 weeks', startYear: -408, endYear: 27 },
      { label: '1 week', startYear: 27, endYear: 34 },
    ],
    events: [
      { year: -457, id: 'decree' },
      { year: 27, id: 'baptism' },
      { year: 31, id: 'crucifixion' },
      { year: 34, id: 'stoning' },
    ],
  },
  {
    id: 'twelveSixty',
    startYear: 538,
    endYear: 1798,
    durationLabel: '1,260 years',
    color: '#F87171',
    segments: [],
    events: [
      { year: 538, id: 'papalRise' },
      { year: 1798, id: 'papalWound' },
    ],
  },
  {
    id: 'twentyThreeHundred',
    startYear: -457,
    endYear: 1844,
    durationLabel: '2,300 years',
    color: '#60A5FA',
    segments: [],
    events: [
      { year: -457, id: 'decree' },
      { year: 1844, id: 'judgment' },
    ],
  },
];
