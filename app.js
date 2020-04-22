const STATUS = [
  'Slow starter',
  'Getting there',
  'Super user',
];

const getNumberOfCompletedLessons = (arr) => arr.filter(e => e === 1).length;

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
 // GOOD! Thanks
};

const runChallenge = (arr) => [
  getNumberOfCompletedLessons(arr),
  getLongest(arr),
  getStatus(arr),
];

module.exports = {
  runChallenge,
  getNumberOfCompletedLessons,
  getStatus,
};