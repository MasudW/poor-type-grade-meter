var num = prompt('Enter your number, We will show your grade: ');

if(num>79)
document.getElementById('grade').innerHTML = ('A+');

else if(num>69)
document.getElementById('grade').innerHTML = ('A-');

else if(num>59)
document.getElementById('grade').innerHTML = ('A');

else if(num>49)
document.getElementById('grade').innerHTML = ('B');

else if(num>39)
document.getElementById('grade').innerHTML = ('C');

else if(num>32)
document.getElementById('grade').innerHTML = ('D');

else
document.getElementById('grade').innerHTML = ('Fail');