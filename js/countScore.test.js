import assert from 'assert';
import countScore from './countScore';


describe(`countScore function`, () => {
  it(`should return -1 if player answered less than 10 questions and has 3 lives left`, () => {
    assert.equal(-1, countScore(testAnswer1));
  });
  it(`should return 20 if player gave 10 fast answers and has 3 lives left`, () => {
    assert.equal(20, countScore(testAnswer2));
  });
  it(`should return 6 if player gave 3 wrong 5 fast 2 slow answers and has 0 lives left`, () => {
    assert.equal(6, countScore(testAnswer3));
  });
  it(`should return -1 if player gave 4 wrong answers and has 0 lives left`, () => {
    assert.equal(-1, countScore(testAnswer4));
  });
  it(`should return 9 if player gave 5 fast 3 slow 2 wrong answers and has 1 lives left`, () => {
    assert.equal(9, countScore(testAnswer5));
  });
  it(`should return 12 if player gave 5 fast 4 slow 1 wrong answers and has 2 lives left`, () => {
    assert.equal(12, countScore(testAnswer6));
  });
  it(`should return 10 if player gave 10 slow answers and has 3 lives left`, () => {
    assert.equal(10, countScore(testAnswer7));
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
  livesLeft: 3
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
  livesLeft: 3
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
  livesLeft: 0
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
  livesLeft: 0
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
  livesLeft: 1
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
  livesLeft: 2
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
  livesLeft: 3
};
