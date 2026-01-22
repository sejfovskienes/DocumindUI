import FeatureCard from '../components/common/FeatureCard';
import { Upload, FileText, Search } from 'lucide-react';

const HomePage = ({ setCurrentPage, isAuthenticated }) => {
  if (isAuthenticated) {
    setCurrentPage('dashboard');
    return null;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#000', marginBottom: '1.5rem' }}>
        Manage Your Documents with Ease
      </h2>
      <p style={{ fontSize: '1.25rem', color: '#333', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
        Upload, organize, and access your documents securely from anywhere. Start managing your files efficiently today.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={() => setCurrentPage('register')} 
                style={{ backgroundColor: '#FFD333', color: '#000', border: 'none', padding: '1rem 2rem', borderRadius: '4px', fontSize: '1.125rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Get Started
        </button>
        <button onClick={() => setCurrentPage('login')} 
                style={{ backgroundColor: '#000', color: '#FFD333', border: 'none', padding: '1rem 2rem', borderRadius: '4px', fontSize: '1.125rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Sign In
        </button>
      </div>
      
      <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        <FeatureCard icon={<Upload size={40} />} title="Easy Upload" description="Drag and drop or click to upload your documents instantly" />
        <FeatureCard icon={<FileText size={40} />} title="Organize Files" description="Keep your documents organized with metadata and search" />
        <FeatureCard icon={<Search size={40} />} title="Quick Access" description="Find any document in seconds with powerful search" />
      </div>
    </div>
  );
};