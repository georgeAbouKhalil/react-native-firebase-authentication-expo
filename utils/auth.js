import axios from "axios";

const API_KEY = "AIzaSyA0sfOEf3mhORHUSW-zjbXzZ_A4sWMwn_A"; // it can change (use ur firebase Web API Key )

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export async function createUser(email, password) {
  const token = await authenticate("signUp", email, password);
  return token;
}

export async function login(email, password) {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
}
