const InputField = ({ icon, label, type, name, value, onChange, error, placeholder, showToggle, showPassword, setShowPassword }) => {
  return (
    <div>
      <label style={{ display: 'block', marginBottom: '0.5rem', color: '#000', fontWeight: '500' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#666' }}>
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: error ? '2px solid #dc3545' : '2px solid #ddd', borderRadius: '4px', fontSize: '1rem', boxSizing: 'border-box' }}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && <p style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</p>}
    </div>
  );
};