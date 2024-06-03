import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const port = 5000;
const app = express();
const corse = cors()
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const useridSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  loginid: String,
  password: String
});

const userid = mongoose.model('userid', useridSchema);

app.post('/insertUser', async (req, res) => {
  const { firstname, lastname, username, loginid, password, cred } = req.body;

  try {
    // Check if loginid already exists
    const existingLogin = await userid.findOne({ loginid });
    if (existingLogin) {
      return res.status(400).send('Login ID already exists.');
    }

    // Check if username already exists
    const existingUsername = await userid.findOne({ username });
    if (existingUsername) {
      return res.status(400).send('Username already exists.');
    }

    const newItem = new userid({ firstname, lastname, username, loginid, password, cred });
    await newItem.save();
    return res.status(201).send('User successfully created.');
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post('/loginUser', async (req, res) => {
  const { userdetail, password } = req.body;

  try {
    const existingLogin = await userid.findOne({ loginId: userdetail, password: password });
    const existingUsername = await userid.findOne({ userName: userdetail, password: password });
    if (existingLogin || existingUsername) {
      return res.status(201).send('Login successfully.');
    }
    else {
      return res.status(400).send('User not exist.');
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});