import * as members from '/home/dan/ES6-7/members'
function rideCapacity(names = []){
const RIDE_CAPACITY = 3
let party = names.length;
if(party<=0){
  let noParty = `Your party has no members! Please enter up to three party members to ride.`;
  console.log(noParty);
}else if (party>RIDE_CAPACITY){
  let capacityExceeded = `You have exceeded capacity with a party size of ${party} and are unable to ride.`;
console.log(capacityExceeded);
}else{
  let capacityNotExceeded = 'Your party is small enough to ride. Enjoy!';
  console.log(capacityNotExceeded);
}
};
rideCapacity(members);
