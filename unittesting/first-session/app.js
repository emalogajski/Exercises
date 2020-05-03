const STATUS = [
  'Slow starter',
  'Getting there',
  'Super user',
];

const getNumberOfCompletedLessons = (arr) => arr.filter((e) => e === 1).length;

const getStatus = (arr) => {
  const completedLessons = getNumberOfCompletedLessons(arr.slice(-7));
  if(completedLessons > 4) {
    return STATUS[2];
  } else if(completedLessons > 2) {
    return STATUS[1];
  } 
  return STATUS[0];
}

const getLongest = (arr) => {
  const longestStreakReducer = (positiveStreaks, currentDay) => {
    if (currentDay) {
      positiveStreaks[positiveStreaks.length - 1]++
    } else {
      positiveStreaks.push(0)
    }
    return positiveStreaks
  }
  return Math.max(...arr.reduce(longestStreakReducer, [0]))
};

const runChallenge = (arr) => {
  if(!arr) {
    return 'Sorry, wrong argument.';
  } else if (Array.isArray(arr)) {
    return [getNumberOfCompletedLessons(arr), getLongest(arr), getStatus(arr)];
  } else {
    return 'Sorry, wrong type.';
  }
};

module.exports = {
  runChallenge,
  getNumberOfCompletedLessons,
  getStatus,
  getLongest,
};