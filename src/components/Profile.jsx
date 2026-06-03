import React, { useEffect, useState } from 'react';

const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    fetch('http://localhost:4000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('No se pudo cargar el perfil');
        }
        return res.json();
      })
      .then(data => setProfile(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <main className="profile-container">
      <h1>Perfil de usuario</h1>

      {error && <p>{error}</p>}

      {profile ? (
        <section>
          <p><strong>Usuario:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Fecha de registro:</strong> {profile.created_at}</p>
        </section>
      ) : (
        <section>
          <p>No hay ningún usuario con sesión iniciada.</p>
          <p>Inicia sesión para ver tu perfil.</p>
        </section>
      )}
    </main>
  );
};

export default Profile;