/* Exercise loops and conditionals */

// odd or even
// 1. Create a for loop that counts from 0 to 20. Console log the value of the counter variable inside the loop.

for (let i = 0; i < 21; i++) {
  console.log(`number ${i}`);
}

// 2. Create a for loop that counts from 20 to 0. Console log the value of the counter variable inside the loop.

for (let i = 20; i > -1; i--) {
  console.log(`number ${i}`);
}

// 3. Create a for loop that counts from 0 to 100. If the current iteration is an even number, console log "Even".

for (let i = 0; i < 101; i++) {
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

var students = [
  {
    name: "John",
    track: "Front End Development",
    achievements: 157,
    points: 14730,
  },
  {
    name: "Jenny",
    track: "iOS Development with Swift",
    achievements: 175,
    points: 16375,
  },
  {
    name: "Jill",
    track: "PHP Development",
    achievements: 203,
    points: 19072,
  },
  {
    name: "Jack",
    track: "Back End Development",
    achievements: 181,
    points: 19215,
  },
  {
    name: "Jasmine",
    track: "Front End Development",
    achievements: 157,
    points: 14730,
  },
];


for(let i = 0; i < students.length; i++) {
    students[i].points
}
// let pointsTable = []
// students.forEach((student) => {
//   let points = student.points;
//   pointsTable.push(points)
// });

// let maxPoint = Math.max(...pointsTable)

// console.log(maxPoint);

// find max points and print student name
// 4. Create a for loop that iterates through the students array and finds the student with the highest amount of points. Console log the value of their name.

// 5. define a function called "print" that takes a parameter called "student". The function should console log the value of the student's name, track, achievements and points.

// 6. call the print function and pass it the student object you created in step 5.

// 7. define a function called "getStudentReport" that takes a parameter called "student". The function should return a String that looks like the following: "Jill - PHP Development - 203 achievements - 19072 points"
