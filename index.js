// Code your solution in this file!
const headquarter = 42;
function distanceFromHqInBlocks(pickUp) {
    let distance
    let dist = headquarter - pickUp;
    if ( dist>= 0) {
        distance = dist}
        else {distance = -dist;}
return distance;
}

const blockSize = 264;

function distanceFromHqInFeet(pickUp) {
    let blocks = distanceFromHqInBlocks(pickUp)
    return blocks*blockSize;
}

function distanceTravelledInFeet(headquarter, pickUp) {
    let distance
    let dist = headquarter - pickUp;
    if ( dist>= 0) {
        distance = dist}
        else {distance = -dist;}
return distance*blockSize;
}

const pricePerFeet = 0.02;

function calculatesFarePrice(headquarter, pickUp) {
    let distance = Math.abs(headquarter - pickUp)*blockSize;
    let reply 
    switch (true) {
        case (distance <= 400): 
            reply = 0;
            break;
        case (distance >400 && distance <= 2000):
            reply = (distance-400)*0.02;
            break;
        case (distance >2000 && distance < 2500):
            reply = 25;
            break;
        case (distance >= 2500) : 
            reply = 'cannot travel that far'
             break;
    }
    return reply;
}