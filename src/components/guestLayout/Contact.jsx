import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const navigate = useNavigate();
  return (
    <>
      <style>
        {`
        .contact-section {
          padding: 80px 20px;
          background: radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%);
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

        .contact-info {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
          animation: fadeIn 1s forwards 1s;
        }

        .contact-info p {
          font-size: 20px;
          line-height: 1.8;
          margin: 20px 0;
        }

        .contact-info strong {
          color: #d32f2f;
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
          display: block;
          width: fit-content;
          margin: 40px auto 0;
          padding: 15px 30px;
          background-color: #d32f2f;
          color: white;
          text-decoration: none;
          font-weight: bold;
          border-radius: 50px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #a31515;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        `}
      </style>

      <section className="contact-section">
        <h2 className="section-title">Get in Touch with Us</h2>

        <div className="contact-info">
          <p>📞 <strong>Phone:</strong> +91-9370690520 , 9766807563</p>
          <p>📍 <strong>Address:</strong> Dosti Chicken Center, Near Madhuri Photo Studio, Aajni Road, Savlaj</p>
          <p>📱 <strong>WhatsApp:</strong> +91-9370690520</p>
          <p>📧 <strong>Email:</strong> Dosti786@gmail.com</p>
        </div>

        <div className="text-center">
            <button
          className="cta-button"
          onClick={() => navigate("/contact")}
          type="button"
        >
          Contact Us for Fresh Chicken Orders!
        </button>
         <a
            href="https://wa.me/919370690520?text=Hello%20Dosti%20Chicken%20Center,%20I%20want%20to%20order%20fresh%20chicken."
            target="_blank"
            rel="noreferrer"
            className="cta-button"
            >
            <FaWhatsapp size={24} /> Order on WhatsApp
          </a>
          </div>

        <div className="social-icons">
         
          <a href="https://wa.me/919370690520" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
           <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
           <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

        </div>
      </section>
    </>
  );
};

export default Contact;
