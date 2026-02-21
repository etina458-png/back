import { loginUser } from '../services/auth.services.js';

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Call service
    const user = await loginUser({ email, password });

    // Return success
    res.status(200).json({
      message: 'Login successful',
      user: { email: user.email }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
}