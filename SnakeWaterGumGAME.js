let user=prompt("Enter S W OR G");
let cpu1 =Math.floor(Math.random()*3);
let cpu=['S','W','G'][cpu1]

let match=(user,cpu)=>
{
  if(user===cpu)
  return "tie";
else if(user==='S' && cpu==='G')
  return "cpu";
else if(user==='G' && cpu==='S')
  return "user";
else if(user==='W' && cpu==='G')
  return "user";
else if(user==='G' && cpu==='W')
  return "cpu";
else if(user==='S' && cpu==='W')
  return "cpu";
else if(user==='W' && cpu==='S')
  return "user";
}
let result=match(user,cpu);
document.write(`CPU:${cpu} <br> User:${user} <br> The Winner is: ${result}`); 