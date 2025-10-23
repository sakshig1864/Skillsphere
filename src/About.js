import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-left">
            
            <span className="nav-logo"> SkillSphere</span>
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
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>
              In a world full of competition, grades and degrees are no longer
              enough. Your skills yet value SkillSphere to of complete need
              enough, provide no longer enough.SkillSphere equips you with
              essential soft skills to stand out, thrive in any environment, and
              succeed beyond just grades and certificates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="mv-content">
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              “Empowering individuals to unlock their fullest potential by
              providing intelligent, personalized soft skills development
              journeys that transform not just careers, but entire lives. We
              envision a world where every person has the opportunity to master
              the uniquely human skills that technology cannot replace —
              fostering confidence, empathy, critical thinking, and
              collaboration for a better, more connected future.”
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              “Our mission is to revolutionize soft skills learning by creating
              an engaging, adaptive platform that assesses, guides, and nurtures
              individuals on their path to personal and professional excellence.
              Through tailored assessments, actionable tasks, progress tracking,
              and motivating rewards, we aim to make human skill development
              accessible, measurable, and enjoyable — helping every learner
              stand out in an increasingly automated world.”
            </p>
          </div>
        </div>
      </section>

      {/* What Makes SkillSphere Different Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="features-title">What Makes SkillSphere Different?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="feature-title">
                Smarter Assessments, Not Just Tests
              </h3>
            </div>

            <div className="feature-card highlighted">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">
                Personalized Learning That Adapts to You
              </h3>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Real Practice, Real Progress</h3>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">
                Progress You Can See (and Show Off)
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join the SkillSphere Movement</h2>
          <p className="cta-description">
            Discover your hidden potential and master the human skills that set
            you apart — start your SkillSphere journey today
          </p>
          <button className="cta-button" onClick={() => navigate("/contact")}>
            Start Your SkillSphere Journey
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
