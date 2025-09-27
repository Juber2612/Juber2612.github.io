import React from "react";

const About = () => {
  return (
    <>
      <style>
        {`
        .about-section {
          padding: 80px 20px;
          background: radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%);
          color: #333;
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .about-section .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          color: #d32f2f;
          margin-bottom: 50px;
        }

        .about-text {
          padding: 30px;
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          margin-bottom: 60px;
          text-align: center;
          opacity: 0;
          animation: fadeInUp 1s forwards;
        }

        .about-text img {
          width: 100%;
          max-width: 450px;
          display: block;
          margin: 0 auto 20px;
          border-radius: 15px;
          transition: transform 0.4s ease;
        }

        .about-text img:hover {
          transform: scale(1.05);
        }

        .about-text h3 {
          font-size: 26px;
          color: #d32f2f;
          margin-bottom: 20px;
        }

        .about-text p {
          font-size: 18px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 15px;
        }

        .cta-button {
          display: inline-block;
          margin-top: 30px;
          padding: 15px 30px;
          background: linear-gradient(45deg, #ff8c00, #ff5722);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          font-size: 18px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Dosti Chicken Center</h2>

          {/* Welcome Section */}
          <div className="about-text">
            <img
              src="/images/Shop.png"
              alt="Dosti Chicken Center Shop"
            />
            <h3>Welcome to Dosti Chicken Center</h3>
            <p>
              Dosti Chicken Center is your one-stop destination for fresh, hygienic, and high-quality chicken products.
              We take pride in delivering top-notch service and clean cuts that meet the needs
              of every customer – from daily cooks to weekend grillers.
            </p>
          </div>

          {/* Owner Section */}
          <div className="about-text">
            <img
              src="/images/owner.jpg"
              alt="Owner of Dosti Chicken Center"
              
            />
            <h3>Meet the Owner</h3>
            <p>
              Dosti Chicken Center was founded in the year 2000 by <strong>Mr. Husen Babaso Shaikh</strong>, 
              a passionate and hardworking individual with a clear vision — to provide fresh, hygienic chicken 
              to the local community with honesty and quality service.
            </p>
            <p>
              What began as a small roadside shop has now grown into a main branch serving hundreds of happy customers every day.
              The journey of 25 successful years is a true reflection of Mr. Husen’s dedication and commitment.
            </p>
            <p>
              His determination to serve the best, even during tough times, has earned the trust of the entire community.
              The growth and success of Dosti Chicken Center wouldn’t have been possible without the unwavering support of his family.
            </p>
            <p>
              Today, under his leadership, Dosti Chicken Center is not just a shop – it is a trusted name for quality and service.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a href="/contact" className="cta-button">
              Contact Us for Fresh Chicken Orders!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
