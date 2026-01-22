import React, { useEffect, useState } from 'react';

import InputField from '../components/common/InputField';
import { Mail, Lock } from 'lucide-react';

const LoginPage = ({ setCurrentPage, users, setIsAuthenticated, setCurrentUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentPage('dashboard');
    } else {
      setErrors({ general: 'Invalid email or password' });
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '4rem auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '2rem', textAlign: 'center' }}>
        Welcome Back
      </h2>
      {errors.general && (
        <div style={{ padding: '0.75rem', borderRadius: '4px', backgroundColor: '#f8d7da', color: '#721c24', marginBottom: '1rem' }}>
          {errors.general}
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <InputField 
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
        <InputField 
          icon={<Lock size={20} />}
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          showToggle
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <button type="submit" 
                style={{ backgroundColor: '#FFD333', color: '#000', border: 'none', padding: '1rem', borderRadius: '4px', fontSize: '1.125rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Login
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#333' }}>
        Don't have an account?{' '}
        <span onClick={() => setCurrentPage('register')} style={{ color: '#000', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>
          Register here
        </span>
      </p>
    </div>
  );
};