import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Delivery = () => {
  return (
    <>
      <style>
        {`
        .delivery-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #fff9f0 0%, #ffe4e1 100%);
          color: #333;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .section-title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: #d32f2f;
          margin-bottom: 40px;
        }

        .delivery-info {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          text-align: center;
          animation: fadeIn 1s forwards 1s;
        }

        .delivery-info p {
          font-size: 20px;
          line-height: 1.8;
          margin: 20px 0;
        }

        .delivery-info strong {
          color: #d32f2f;
        }

        .map-container {
          margin: 30px 0;
          border-radius: 12px;
          overflow: hidden;
        }

        .social-icons {
          text-align: center;
          margin-top: 40px;
        }

        .social-icons a {
          color: #d32f2f;
          text-decoration: none;
          margin: 0 20px;
          font-size: 32px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icons a:hover {
          color: #ff8c00;
          transform: scale(1.2);
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: fit-content;
          margin: 40px auto 0;
          padding: 15px 30px;
          background-color: #25D366;
          color: white;
          text-decoration: none;
          font-weight: bold;
          border-radius: 50px;
          font-size: 18px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #1da851;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        `}
      </style>

      <section className="delivery-section">
        <h2 className="section-title">🚚 Delivery Service</h2>

        <div className="delivery-info">
          <p>
            We offer <strong>fast and fresh delivery</strong> right to your
            doorstep in <strong>Savlaj</strong> and nearby areas.
          </p>

          <h3>🕒 Store Timings</h3>
          <p>
            <strong>Opening Time:</strong> 8:00 AM
          </p>
          <p>
            <strong>Closing Time:</strong> 9:00 PM
          </p>

          <h3>📍 Store Location</h3>
          <p>
            Dosti Chicken Center, Near Madhuri Photo Studio, Aajni Road, Savlaj,
            Tal - Tasgaon, Dist - Sangli
          </p>

          
        </div>

        {/* WhatsApp Order Button */}
        <a
          href="https://wa.me/919370690520?text=Hello%20Dosti%20Chicken%20Center,%20I%20want%20to%20order%20fresh%20chicken."
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          <FaWhatsapp size={24} /> Order on WhatsApp
        </a>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/919370690520"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </>
  );
};

export default Delivery;
