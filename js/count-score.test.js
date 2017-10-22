import assert from 'assert';
import getPlayerScore from './count-score.js';


describe(`getPlayerScore function`, () => {
  it(`should return -1 if player answered less than 10 questions and has 3 lives left`, () => {
    assert.equal(-1, getPlayerScore(testAnswer1.answersList, testAnswer1.remainingNotes));
  });
  it(`should return 20 if player gave 10 fast answers and has 3 lives left`, () => {
    assert.equal(20, getPlayerScore(testAnswer2.answersList, testAnswer2.remainingNotes));
  });
  it(`should return 6 if player gave 3 wrong 5 fast 2 slow answers and has 0 lives left`, () => {
    assert.equal(6, getPlayerScore(testAnswer3.answersList, testAnswer3.remainingNotes));
  });
  it(`should return -1 if player gave 4 wrong answers and has 0 lives left`, () => {
    assert.equal(-1, getPlayerScore(testAnswer4.answersList, testAnswer4.remainingNotes));
  });
  it(`should return 9 if player gave 5 fast 3 slow 2 wrong answers and has 1 lives left`, () => {
    assert.equal(9, getPlayerScore(testAnswer5.answersList, testAnswer5.remainingNotes));
  });
  it(`should return 12 if player gave 5 fast 4 slow 1 wrong answers and has 2 lives left`, () => {
    assert.equal(12, getPlayerScore(testAnswer6.answersList, testAnswer6.remainingNotes));
  });
  it(`should return 10 if player gave 10 slow answers and has 3 lives left`, () => {
    assert.equal(10, getPlayerScore(testAnswer7.answersList, testAnswer7.remainingNotes));
  });
});

const testAnswer1 = {
  answersList: [{
    correct: false,
    time: 32
  },
  {
    correct: false,
    time: 25
  },
  {
    correct: true,
    time: 17
  },
  {
    correct: false,
    time: 16
  },
  {
    correct: true,
    time: 8
  },
  {
    correct: true,
    time: 1
  },
  {
    correct: false,
    time: 13
  },
  {
    correct: true,
    time: 10
  }
  ],
  remainingNotes: 3
};
const testAnswer2 = {
  answersList: [{
    correct: true,
    time: 11
  },
  {
    correct: true,
    time: 29
  },
  {
    correct: true,
    time: 12
  },
  {
    correct: true,
    time: 29
  },
  {
    correct: true,
    time: 16
  },
  {
    correct: true,
    time: 8
  },
  {
    correct: true,
    time: 18
  },
  {
    correct: true,
    time: 13
  },
  {
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 10
  }
  ],
  remainingNotes: 3
};
const testAnswer3 = {
  answersList: [{
    correct: false,
    time: 11
  },
  {
    correct: true,
    time: 32
  },
  {
    correct: true,
    time: 12
  },
  {
    correct: true,
    time: 18
  },
  {
    correct: false,
    time: 16
  },
  {
    correct: true,
    time: 40
  },
  {
    correct: true,
    time: 25
  },
  {
    correct: true,
    time: 13
  },
  {
    correct: true,
    time: 10
  },
  {
    correct: false,
    time: 10
  }
  ],
  remainingNotes: 0
};
const testAnswer4 = {
  answersList: [{
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 28
  },
  {
    correct: true,
    time: 33
  },
  {
    correct: true,
    time: 35
  },
  {
    correct: true,
    time: 16
  },
  {
    correct: false,
    time: 8
  },
  {
    correct: false,
    time: 1
  },
  {
    correct: false,
    time: 13
  },
  {
    correct: false,
    time: 10
  }
  ],
  remainingNotes: -1
};
const testAnswer5 = {
  answersList: [{
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 28
  },
  {
    correct: true,
    time: 25
  },
  {
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 16
  },
  {
    correct: true,
    time: 54
  },
  {
    correct: false,
    time: 14
  },
  {
    correct: true,
    time: 44
  },
  {
    correct: false,
    time: 46
  },
  {
    correct: true,
    time: 58
  }
  ],
  remainingNotes: 1
};
const testAnswer6 = {
  answersList: [{
    correct: false,
    time: 32
  },
  {
    correct: true,
    time: 10
  },
  {
    correct: true,
    time: 24
  },
  {
    correct: true,
    time: 17
  },
  {
    correct: true,
    time: 6
  },
  {
    correct: true,
    time: 26
  },
  {
    correct: true,
    time: 49
  },
  {
    correct: true,
    time: 50
  },
  {
    correct: true,
    time: 90
  },
  {
    correct: true,
    time: 40
  }
  ],
  remainingNotes: 2
};
const testAnswer7 = {
  answersList: [{
    correct: true,
    time: 32
  },
  {
    correct: true,
    time: 31
  },
  {
    correct: true,
    time: 50
  },
  {
    correct: true,
    time: 48
  },
  {
    correct: true,
    time: 45
  },
  {
    correct: true,
    time: 88
  },
  {
    correct: true,
    time: 49
  },
  {
    correct: true,
    time: 50
  },
  {
    correct: true,
    time: 90
  },
  {
    correct: true,
    time: 40
  }
  ],
  remainingNotes: 3
};
