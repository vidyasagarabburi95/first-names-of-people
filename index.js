let peopleName = require("../country/state/city/index");
let firstNames = require("../utilities/utils/index");
const getPeopleInCity = (peopleName) => {
  return firstNames(peopleName);
};
module.exports = getPeopleInCity;
