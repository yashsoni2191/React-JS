import React from 'react';
import Logout from './Logout';

function Home() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/src/assets/image1.avif)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="card bg-dark text-white shadow-lg border-0" style={{ maxWidth: '600px', borderRadius: '30px' }}>
        <div className="card-body text-center p-5">
          <h1 className="display-3 mb-4 text-warning">Welcome to the Home Page</h1>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Home;
