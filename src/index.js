import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const tweets = [];
const users = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar || avatar.indexOf("https:/") < 0) {
    return res.status(400).send("Campos inválidos!");
  }
  users.push({ username, avatar });
  res
    .status(201)
    .send({ message: "Usuário logado com sucesso!", status: "OK" });
});

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const { user } = req.headers;
  const filteredUsers = users.filter((u) => u.username === user).length >= 1;

  if (!user || !tweet || !filteredUsers) {
    return res.status(400).send({ message: "Campos inválidos!" });
  }
  tweets.push({ username: user, tweet });
  res.status(201).send({ message: "OK" });
});

app.get("/tweets", (req, res) => {
  const { page } = req.query;
  let aux;
  if (!page) {
    aux = 1;
  } else {
    aux = page;
  }

  const lastTweets = tweets.slice(aux * -10).map((tweet) => {
    const profileImg = users.filter(
      (user) => user.username === tweet.username
    )[0].avatar;
    return { ...tweet, avatar: profileImg };
  });
  res.send(lastTweets);
});

app.listen(5000);

app.get("/tweets/:username");
