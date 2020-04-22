const app = require('./app.js');

describe('Learner Activity Challenge', () => {
  it('returns an array containing 3 values', () => {
    const res = app.runChallenge([]);
    expect(res.length).toEqual(3); 
  });

  it('returns N completed lessons', () => {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomInt = getRandomInt(20);
    const nLessonsArray = [0, 0, 0, 0];
    for(let i = 0; i < randomInt; i++) {
      nLessonsArray.push(1);
    }
    const res = app.getNumberOfCompletedLessons(nLessonsArray);
    expect(res).toEqual(randomInt); 
  });

  it('returns the number of days as first element of the array', () => {
    const threeCompletedLessons = [1, 1, 1];
    const numberCompletedLessons = app.getNumberOfCompletedLessons(threeCompletedLessons);
    const res = app.runChallenge(threeCompletedLessons);
    expect(res[0]).toEqual(3);
  })

  it('returns Slow Starter', () => {
    const slowStarterArray = [0, 0, 0, 0, 0, 0, 1];
    const res = app.getStatus(slowStarterArray);
    expect(res).toEqual('Slow starter');
    const anotherSlowStarterArray = [0, 0, 0, 0, 0, 1, 1];
    const anotherRes = app.getStatus(slowStarterArray);
    expect(res).toEqual('Slow starter');
  });

  it('returns Getting there', () => {
    const gettingThereArray = [0, 0, 0, 0, 1, 1, 1];
    const res = app.getStatus(gettingThereArray);
    expect(res).toEqual('Getting there');
  });

  it('returns Super user', () => {
    const superUserArray = [1, 1, 1, 1, 1, 1, 1];
    const res = app.getStatus(superUserArray);
    expect(res).toEqual('Super user');
  });

  it('returns the status as third element of the array', () => {
    const superUserArray = [1, 1, 1, 1, 1, 1, 1];
    const res = app.runChallenge(superUserArray);
    expect(res[2]).toEqual('Super user');
  })

  it('returns 5 as longest streakt', () => {
    const fiveStreak = [0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1];
    const res = app.runChallenge(fiveStreak);
    expect(res[1]).toEqual(5);
  })

  it('returns 6 as longest streakt', () => {
    const sixStreak = [0, 1, 1, 1, 1, 1, 1, 0, 0, 1];
    const res = app.runChallenge(sixStreak);
    expect(res[1]).toEqual(6);
  })

  it('shows error message (no array)', () => {
    const res = app.runChallenge();
    expect(res).toEqual('Sorry, wrong argument.');
  })

  it('shows error message (wrong type)', () => {
    const res = app.runChallenge(10);
    expect(res).toEqual('Sorry, wrong type.');
  })
});

