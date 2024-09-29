// Code your solution in this file!
const theDriversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(theDrivers){
    return theDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(theDrivers){
    return theDrivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
    return function(fare){
        return fare * fareMultiplier;
    };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(theDrivers, whichDriversFunction) {
    return whichDriversFunction(theDrivers);
};

