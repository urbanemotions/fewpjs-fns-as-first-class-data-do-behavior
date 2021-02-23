/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeStr)
{
  const timeHour = parseInt(timeStr, 10); 
  /* radix of 10 converts from a decimal number */
  if (timeHour < 12) 
  {
    return "Good Morning"
  } else if (timeHour > 17) 
  {
    return "Good Evening"
  }
  else 
  {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(msgStr)
{
  document.getElementById("greeting").innerText = msgStr;
}