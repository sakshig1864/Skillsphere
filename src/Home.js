import React from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Enhanced Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-left">
            <span className="nav-logo">SkillSphere</span>
          </div>
          <div className="nav-right">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
            <Link to="/profile" className="nav-link">
              My Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image Section */}
      <section className="hero-image-section">
        <div className="hero-image-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SkillSphere Team Meeting"
            className="hero-image"
          />
          <div className="hero-image-overlay">
            <h2 className="hero-image-title">SkillSphere</h2>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="hero-content-section">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Join the SkillSphere Revolution</h1>
            <h2 className="hero-subtitle">
              SkillSphere: Where Skills Transform Into Success
            </h2>
            <p className="hero-description">
              Empowering the skills that machines can't replace — human skills
              for a better future. Discover, develop, and deploy your unique
              talents in an AI-driven world through personalized learning
              experiences.
            </p>
            <button className="cta-button" onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Three Questions Section */}
      <section className="three-questions-section">
        <div className="three-questions-content">
          <div className="questions-header">
            <h2 className="questions-title">
              Are you ready to stop talking about soft skills and start
              mastering them?
            </h2>
          </div>

          <div className="questions-grid">
            <div className="question-card">
              <div className="question-icon">👥</div>
              <h3 className="question-title">
                Do you feel unheard in meetings and group projects?
              </h3>
              <p className="question-description">
                SkillSphere provides practical strategies and tools to develop
                confident communication and active listening skills.
              </p>
            </div>

            <div className="question-card">
              <div className="question-icon">⚙️</div>
              <h3 className="question-title">
                Ready to turn interview anxiety into a performance opportunity?
              </h3>
              <p className="question-description">
                Success in an interview is about more than just knowledge—it's
                about how you present it. We focus on developing your core soft
                skills so you can walk into any interview prepared to perform
                with poise, clarity, and genuine confidence.
              </p>
            </div>

            <div className="question-card">
              <div className="question-icon">🧠</div>
              <h3 className="question-title">
                Does critical thinking feel more like a buzzword than a skill?
              </h3>
              <p className="question-description">
                SkillSphere breaks down critical thinking into actionable steps,
                providing exercises and real-world case studies to cultivate
                analytical and problem-solving abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Categories Section */}
      <section className="core-skills-section">
        <div className="core-skills-content">
          <div className="section-header">
            <h2 className="section-title">Our Core Skill Categories</h2>
          </div>

          <div className="core-skills-grid">
            <div className="core-skill-card">
              <div className="skill-icon">👥</div>
              <h3 className="skill-title">Personal Skills</h3>
              <p className="skill-description">
                To you how to professional and creative you can do and more find
                opportunities
              </p>
            </div>

            <div className="core-skill-card">
              <div className="skill-icon">💬</div>
              <h3 className="skill-title">Social Skills</h3>
              <p className="skill-description">
                To this communicating and your self like yourself to understand
                positive working
              </p>
            </div>

            <div className="core-skill-card">
              <div className="skill-icon">💡</div>
              <h3 className="skill-title">Thinking Power Skills</h3>
              <p className="skill-description">
                In profile or brainstorm about perspective Critical thinking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">SkillSphere</div>
          <p className="footer-description">
            Empowering the skills that machines can't replace — human skills for
            a better future.
          </p>
          <div className="footer-links">
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
          </div>
          <div className="footer-bottom">
            <p>Copyright &copy; 2025 SkillSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
