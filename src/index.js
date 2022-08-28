import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweets = [];
const users = [];

app.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const lastTweets = tweets.slice(-10).map((tweet) => {
    const profileImg = users.filter(
      (user) => user.username === tweet.username
    )[0].avatar;
    return { ...tweet, avatar: profileImg };
  });
  res.send(lastTweets);
});

app.listen(5000);
