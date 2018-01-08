const moment = require("moment");

// const date = new Date();
// console.log(date.getMonth());

const date = moment();
console.log(date.format("MMM Do, YYYY"));
