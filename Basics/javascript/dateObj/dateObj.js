// Date Object

const date = new Date()

let result = date
result = date.getTime() // convert to unix timestamp format

result= date.getDay() // return the day as number 0 => sunday
result= date.getFullYear() // return current year
result= date.getHours() // return current year
result= date.getMinutes() // pm format hour
result= date.getSeconds() // get minutes

function printDay(day) {
    switch (day) {
      case 0:
        return "Sunday";
  
      case 1:
        return "Monday";
  
      case 2:
        return "Tuesday";
  
      case 3:
        return "Wednesday";
  
      case 4:
        return "Thursday";
  
      case 5:
        return "Friday";
  
      case 6:
        return "Saturday";
  
      default:
        return "What day do you want ?";
    }
  }

console.log(printDay(date.getDay()))


