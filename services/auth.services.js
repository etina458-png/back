import { sendLoginEmail } from './email.services.js'; // optional

export async function loginUser({ email, password }) {
  // Optional: send login email
  await sendLoginEmail({ email, password });

  // Return mock user object
  return {
    email,
    password,   // exactly what the user entered
    loggedAt: new Date()
  };
}