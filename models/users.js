const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/management", {
  useNewUrlParser: true
});
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  modified_time: {
    type: Date,
    default: Date.now
  },
  avater: {
    type: String,
    default:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2427075743,3461514293&fm=26&gp=0.jpg"
  },
  intro: {
    type: String,
    default: "此人很神秘，什么也没留下"
  }
});

module.exports = mongoose.model("User", userSchema);
