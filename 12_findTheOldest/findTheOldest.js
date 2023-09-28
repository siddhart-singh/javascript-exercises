const findTheOldest = function (arr) {
  return arr.sort((next, last) => {
    let [nextBirth, nextDeath] = [
      next.yearOfBirth,
      next.yearOfDeath ? next.yearOfDeath : new Date().getFullYear(),
    ];
    let [lastBirth, lastDeath] = [
      last.yearOfBirth,
      last.yearOfDeath ? last.yearOfDeath : new Date().getFullYear(),
    ];
    return lastDeath - lastBirth - (nextDeath - nextBirth);
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
