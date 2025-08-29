const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const testData = [{
  id: 1,
  title: "testData 1",
  description: "This is testData 1",
  completed: false,
}, {
  id: 2,
  title: "testData 2",
  description: "This is testData 2",
  completed: false,
}, {
  id: 3,
  title: "testData 3",
  description: "This is testData 3",
  completed: false,

}, {
  id: 4,
  title: "testData 4",
  description: "This is testData 4",
  completed: false,
}, {

  id: 5,
  title: "testData 5",
  description: "This is testData 5",
  completed: false,
}]

app.get("/testData", (req, res) => {
  const { id } = req.query;
  if (id) {
    const testData = testData.find(t => t.id == id);
    return res.json({ testData });
  }
  res.json({ testData });
});

app.listen(3000)
