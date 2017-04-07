let members = ["Andrew", "Anthony", "Amy"]

function rideCapacity(names = []){
const RIDE_CAPACITY = 3
if(names.length<=0){
  let noParty = "Your party has no members! Please enter up to three party members to ride."
  console.log(noParty);
}else if (names.length>RIDE_CAPACITY){
  let capacityExceeded = "You have exceeded capacity and are unable to ride.";
console.log(capacityExceeded);
}else{
  let capacityNotExceeded = "Your party is small enough to ride. Enjoy!";
  console.log(capacityNotExceeded);
}
};
rideCapacity(members);
