const RegisterPage = ({ setCurrentPage, users, setUsers }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', repeatPassword: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Passwords do not match';
    }
    if (users.some(u => u.email === formData.email)) {
      newErrors.email = 'Email already registered';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const newUser = {
        id: users.length + 1,
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      };
      setUsers([...users, newUser]);
      alert('Registration successful! Please login.');
      setCurrentPage('login');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '4rem auto', padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000', marginBottom: '2rem', textAlign: 'center' }}>
        Create Account
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <InputField 
          icon={<User size={20} />}
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="John Doe"
        />
        <InputField 
          icon={<Mail size={20} />}
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="john@example.com"
        />
        <InputField 
          icon={<Lock size={20} />}
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="••••••••"
          showToggle
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <InputField 
          icon={<Lock size={20} />}
          label="Repeat Password"
          type={showRepeatPassword ? "text" : "password"}
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleChange}
          error={errors.repeatPassword}
          placeholder="••••••••"
          showToggle
          showPassword={showRepeatPassword}
          setShowPassword={setShowRepeatPassword}
        />
        {formData.password && formData.repeatPassword && (
          <div style={{ padding: '0.75rem', borderRadius: '4px', backgroundColor: formData.password === formData.repeatPassword ? '#d4edda' : '#f8d7da', color: formData.password === formData.repeatPassword ? '#155724' : '#721c24', fontSize: '0.875rem' }}>
            {formData.password === formData.repeatPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
          </div>
        )}
        <button type="submit" 
                style={{ backgroundColor: '#FFD333', color: '#000', border: 'none', padding: '1rem', borderRadius: '4px', fontSize: '1.125rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Register
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#333' }}>
        Already have an account?{' '}
        <span onClick={() => setCurrentPage('login')} style={{ color: '#000', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>
          Login here
        </span>
      </p>
    </div>
  );
};