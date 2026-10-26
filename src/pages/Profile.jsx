import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const Profile = () => {
  return (
    <div
      style={{
        backgroundColor: '#121212',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Bar */}
      <TopBar title="PROFIL SAYA" />

      {/* Konten Utama (Scrollable & Responsive) */}
      <div
        style={{
          paddingTop: '80px',
          paddingBottom: '88px',
          paddingLeft: '16px',
          paddingRight: '16px',
          maxWidth: '460px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Gambar Profil Lingkaran */}
        <div
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            backgroundColor: '#18181b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            border: '4px solid #f59e0b',
            boxShadow: '0 6px 20px rgba(245, 158, 11, 0.25)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/Arman.jpeg"
            alt="Armandhito Surya Nugraha"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Card Biodata */}
        <div
          style={{
            backgroundColor: '#18181b',
            borderRadius: '16px',
            padding: '24px 20px',
            width: '100%',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
            border: '1px solid #d97706',
            boxSizing: 'border-box',
          }}
        >
          {/* Header Card */}
          <div
            style={{
              textAlign: 'center',
              borderBottom: '1px solid #27272a',
              paddingBottom: '14px',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: '#fbbf24',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              Data Mahasiswa
            </span>
          </div>

          {/* Nama */}
          <div style={{ marginBottom: '18px' }}>
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                color: '#a1a1aa',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              Nama Lengkap
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              Armandhito Surya Nugraha
            </span>
          </div>

          {/* NIM */}
          <div style={{ marginBottom: '18px' }}>
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                color: '#a1a1aa',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              NIM
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#fbbf24',
              }}
            >
              243016020
            </span>
          </div>

          {/* Universitas */}
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '11px',
                color: '#a1a1aa',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              Universitas
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              Universitas Pignatelli Triputra
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
};

export default Profile;
