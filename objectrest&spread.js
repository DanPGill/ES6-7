let {CEO, CFO, Director, ...OtherEmployees} = {CEO: "Arnorld",
CFO: "Peter",
Director: "Gabriel",
Comptroller: "Derrick",
Manager: "Wendy",
Lickspittle: "George"};
let employees = {CEO, CFO, Director, ...OtherEmployees};
console.log(employees);
