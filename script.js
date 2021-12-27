
function getStudent(firstName, lastName) {
  let student = {};
  student.firstName = firstName;
  student.lastName = lastName;
  return student
}


let student = getStudent("Petr", "Perviy");
student.firstName = "Petya";
delete student.firstName;

console.log(student);

let group = [];
group.push(student);
group.push( getStudent("Ilshat", "Baburov") );
group.push( getStudent("Vsevolod", "Pupyrkin") );

console.log(group);

