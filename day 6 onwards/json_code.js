let empString='{"id":12,"name":"ravi","skill":[51,23,34]}'
let converted=JSON.parse(empString) // String to json

document.write("<br>the id"+converted.id)
document.write("<br>the id"+converted.name)
document.write("<br>the id"+converted.skill[0])
document.write("<br>the id"+converted.skill[1])
document.write("<br>the id"+converted.skill[2])

// JSON to sstring
emp=JSON.stringify(converted)
document.write("<br> "+emp)