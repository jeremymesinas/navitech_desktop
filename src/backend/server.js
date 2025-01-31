require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json()); 
app.use(cors()); 

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

app.post('/register', async (req, res) => {
  const { admin_id, email, password } = req.body;

  if (!admin_id || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt)

    const { user, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      return res.status(400).json({ error: signupError.message });
    }

    const { data, error: insertError } = await supabase
      .from('admin')
      .insert([{ admin_id, email, password: hashedPassword }]);

    if (insertError) {
      return res.status(400).json({ error: `Error inserting data: ${insertError.message}` });
    }

    res.status(200).json({
      message: 'Registration successful! Please check your email for verification.',
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});