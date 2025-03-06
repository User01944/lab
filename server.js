const sum = (num1, num2) => {
  return num1 + num2;
};
const PI = 3.14;
class student {
  constructor() {
    console.log("object created");
  }
}

module.exports = {
  sum,
  PI,
  student,
};
exports.myDateTime = function () {
  return Date();
};
