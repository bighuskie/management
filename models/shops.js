const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/management", {
  useNewUrlParser: true
});
const Schema = mongoose.Schema;

let shopSchema = new Schema({
  shopImg: {
    type: String,
    require: true
  },
  shopIntro: {
    type: String,
    require: true
  },
  shopPrice: {
    type: Number,
    require: true
  },
  shopWeight: {
    type: Number,
    require: true
  },
  levelDpi: {
    type: Number,
    require: true
  },
  verticalDpi: {
    type: Number,
    require: true
  },
  behindMirror: {
    type: String,
    require: true
  },
  frontMiror: {
    type: String,
    require: true
  },
  cpuNumber: {
    type: String,
    require: true
  },
  maxHz: {
    type: Number,
    require: true
  },
  minHz: {
    type: Number,
    require: true
  },
  shopName: {
    type: String,
    require: true
  },
  orderNumber: {
    type: String,
    require: true
  },
  shopAdress: {
    type: String,
    require: true
  },
  system: {
    type: String,
    require: true
  },
  thickness: {
    type: String,
    require: true
  },
  photoFeature: {
    type: String,
    require: true
  },
  maxBattery: {
    type: Number,
    require: true
  },
  minBattery: {
    type: Number,
    require: true
  },
  screenConfig: {
    type: String,
    require: true
  },
  phoneColor: {
    type: String,
    require: true
  },
  hotFeature: {
    type: String,
    require: true
  },
  runCpu: {
    type: Number,
    require: true
  },
  netType: {
    type: String,
    require: true
  },
  gameConfig: {
    type: String,
    require: true
  },
  phoneCpu: {
    type: Number,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  modified_time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Shop", shopSchema);
