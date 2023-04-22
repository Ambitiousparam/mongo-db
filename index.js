const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=4000&appName=mongosh+1.8.0/sample",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongodb")
  }).catch((err) => {
    console.log(err)
  });

const studentSchema = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number
});

const Student = mongoose.model("student", studentSchema);

const adder = async () => {
  const ss = await Student.find({height:{$nin:[5,6]}})
  console.log(ss);
};

adder();
