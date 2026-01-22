const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{ padding: '2rem', borderRadius: '8px', border: '2px solid #FFD333', backgroundColor: '#fff' }}>
      <div style={{ color: '#FFD333', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#333', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};