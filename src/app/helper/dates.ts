const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = monthNames[month - 1];

const getCurrentDate = () => {
  return `${day}${day > 1 ? "th" : day > 2 ? "nd" : day > 3 ? "rd" : "st"} ${monthName} , ${year}`;
};



export { getCurrentDate, monthName, year, month, day };