import React, { useState } from 'react';
import { loginUser } from '../api/api';
import { User, Lock } from 'lucide-react'; // changed from Mail to User icon
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser(form);
    localStorage.setItem('token', res.data.token);
    setMessage('✅ Login successful!');
    setSuccess(true);
    navigate('/'); // 👈 redirect to homepage after login
  } catch (err) {
    setSuccess(false);
    setMessage(err.response?.data?.message || '❌ Login failed');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 transition-all duration-300 transform hover:scale-[1.01]">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6 tracking-tight">Sign In to Trivio</h2>

        {message && (
          <div
            className={`mb-4 text-sm px-4 py-2 rounded-md text-center font-medium transition-all ${
              success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="relative">
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                placeholder="yourusername"
                required
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <User className="absolute left-3 top-2.5 h-5 w-5 text-blue-400 transition duration-300" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full pl-11 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-blue-400 transition duration-300" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
