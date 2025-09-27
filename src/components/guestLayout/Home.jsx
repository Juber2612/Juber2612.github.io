import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',               // full viewport height
        display: 'flex',
        flexDirection: 'column',       // stack vertically
        justifyContent: 'center',      // vertical center
        alignItems: 'center',          // horizontal center
        textAlign: 'center',
        background: 'radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)',
        padding: '20px'
      }}
    >
      <h2 style={{ fontSize: '36px', color: '#d32f2f', marginBottom: '20px' }}>
        Welcome to Dosti Chicken Center
      </h2>
      <p style={{ fontSize: '18px', color: '#333', maxWidth: '600px' }}>
        Your trusted chicken shop delivering quality and service since 2000.
      </p>

      <Carousel interval={2000} style={{ marginTop: '40px', width: '100%', maxWidth: '800px' }}>
        <Carousel.Item>
          <img
            src="/images/image.1.jpg"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
            alt="Fresh Chicken"
          />
          <Carousel.Caption>
            Fresh Quality Chicken, Ready to Cook
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
          src="/images/boiler.jpeg"
          style={{
           width: '100%',
           height: '500px',          // fixed height for all carousel images
           objectFit: 'cover',       // ensures image covers the box without distortion
           borderRadius: '10px'
        }}
        alt="Chicken Products"
        />
        <Carousel.Caption>
          <h3>Healthy Boilers</h3>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/image3.png"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
            alt="High Quality Chicken"
          />
          <Carousel.Caption>
            High-quality chicken, ready to cook.
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/image2.jpg"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
            alt="High Quality Chicken"
          />
          <Carousel.Caption>
            High-quality chicken, ready to cook.
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p style={{ marginTop: '40px', fontSize: '18px', maxWidth: '600px' }}>
        We provide the freshest chicken with the highest quality service to customers in Savlaj and beyond.
      </p>
    </div>
  );
};

export default Home;
