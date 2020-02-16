// Ex1
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
  45: 'fourty five'
}

// updating properties
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.totalMiles += 7.5;

// adding a new property
fitBitData.heartStillBreating = true;

// Ex2
const userReviews = {};

// 'queenBee49' => 4.5

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews['queenBee49'] += 2;
