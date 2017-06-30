module.exports = {
  day: 30,
  month: "June",
  year: 2017,
  greeting: function () {
    console.log("Good Day! Today is " + this.day + " " + this.month + " " + this.year + "!");
  }
};
// console.log(exports.greeting())
// console.log(typeof exports.greeting)