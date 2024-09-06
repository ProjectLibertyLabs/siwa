import express, { Request, Response } from "express";
import login from "./login.json";
import newUser from "./new-user.json";
import newProvider from "./new-provider.json";

const app = express();
app.use(express.json());

// Mock authorization codes for different scenarios
const authCodes = {
  login: "loginAuthCode123",
  newProvider: "newProviderAuthCode456",
  newUser: "newUserAuthCode789",
};

// Mock payloads based on the authorization codes
const payloads = {
  login: login,
  newProvider: newProvider,
  newUser: newUser,
};

// POST /siwa/api/request: Simulate login URL request
app.post("/siwa/api/request", (req: Request, res: Response) => {
  const callbackUri = req.body.callback || "http://localhost:3000/callback";

  const randomCode =
    Math.random() < 0.33
      ? authCodes.login
      : Math.random() < 0.5
        ? authCodes.newProvider
        : authCodes.newUser;

  // Simulate the redirect URL in the Location header
  const redirectUrl = `${callbackUri}?authorizationCode=${randomCode}`;

  console.log(`Generated redirect URL for ${randomCode}`);
  res.status(201).header("Location", redirectUrl).send();
});

// GET /siwa/api/payload: Return mock payload data
app.get("/siwa/api/payload", (req: Request, res: Response) => {
  const { authorizationCode } = req.query;

  if (authorizationCode === authCodes.login) {
    console.log("Responding with Login payload");
    res.json(payloads.login);
  } else if (authorizationCode === authCodes.newProvider) {
    console.log("Responding with New Provider payload");
    res.json(payloads.newProvider);
  } else if (authorizationCode === authCodes.newUser) {
    console.log("Responding with New User payload");
    res.json(payloads.newUser);
  } else {
    console.log("Invalid authorization code:", authorizationCode);
    res.status(400).json({ error: "Invalid authorization code" });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Mock SIWA server running on http://localhost:3000");
});
