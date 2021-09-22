// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
      return (int * fare);
    };
  }
  
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cb){
    if (cb === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(drivers);
  
    if (cb === returnLastTwoDrivers)
    return returnLastTwoDrivers(drivers);
  }