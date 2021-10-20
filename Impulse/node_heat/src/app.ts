import "dotenv/config";
import express, {Request, Response} from "express";

const app = express();

app.get("/github", (request: Request, response: Response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get("/sigin/callback", (request: Request, response: Response) => {
  const { code } = request.query;

  response.json(code);
});


app.listen(4224, () => console.log(` 🚀 Server is running on PORT: 4224!`));