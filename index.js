const lodash = require("lodash");
function superAI() {
  const testLodash = lodash.get({ a: "test" }, "a");
  console.log("Super AI is working!");
  return testLodash;
}
module.exports = superAI;
