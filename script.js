// SPELARNA
const players = ["ÅKE", "ADAM", "TOBBE"]

// Gets week number from getWeekNumber.js
const weekObj = getWeekNumber(new Date());
const today = new Date()

// Starts Counter at midnight to Sunday day one of week one,
// 6 days before first tips (Åke's turn)
const startDate = new Date("November 18, 2018 00:00:01");

// Gets HTML elements
const body = document.getElementById("body")
const weekDisplay = document.getElementById("week")
const whosTurnDisplay = document.getElementById("whosTurn")
const daysUntilSaturday = document.getElementById("daysUntilSaturday")

// Takes in number of ms between today and the first day of week one and
// returns the number of passed complete weeks
const weekCounter = (msDiff) => {
  const secondCount = msDiff / 1000
  const dayCount = Math.floor(secondCount / 60 / 60 / 24)
  const weekCount = Math.floor(dayCount / 7)
  return weekCount
}

// Counts who's turn
const calcWhosTurn = () => {
  const weeksPassed = weekCounter(today - startDate)
  activePlayerIndex = weeksPassed % 3
  return players[activePlayerIndex]
}
const thisWeeksPlayer = calcWhosTurn()

// Displays week, days 'til Saturday, and who's turn this week
weekDisplay.innerHTML = "VECKA " + weekObj.week
whosTurnDisplay.innerHTML = thisWeeksPlayer

// Checks if it's Saturday and if not how many days left, if saturday bg-color red
const daysLeft = Number.parseInt(6 - today.getDay())
if (daysLeft === 0) {
  daysUntilSaturday.innerHTML = "DET ÄR LÖRDAG!"
  body.style.backgroundColor = "#ed4b4b"
} else if (daysLeft === 1) {
  daysUntilSaturday.innerHTML = daysLeft + " DAG KVAR"
} else {
  daysUntilSaturday.innerHTML = daysLeft + " DAGAR KVAR"
}
