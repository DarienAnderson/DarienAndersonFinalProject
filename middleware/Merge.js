const statesData = require("../models/states.json");
const mongoData = require("../models/States");

let merge = () => {
  return (req, res, next) => {
    let mergeStateData = {
      ...statesData,
      ...mongoData,
    };
    delete mergeData._id;
    res.send(mergeStateData);
    next();
  };
};

module.exports = merge;