import React from 'react';
import './body.css';
import Link from 'next/link';

const Body = () => {
  return (
    <div className="water-container">
      {/* Ambient background effects */}
      <div className="water-orb orb-1"></div>
      <div className="water-orb orb-2"></div>
      <div className="water-orb orb-3"></div>

      <div className="glass-card">
        <h1 className="brand-title">HOME LINK</h1>
        <p className="brand-subtitle">Automate Your Habbits</p>

        <div className="product-description-container">
          <p className="description-text">
            Welcome to the next generation of living. <Link className="highlight-text" href="/about">HOME LINK</Link> isn't just an app; it's a living ecosystem that adapts to your needs.
            Seamlessly integrating with over 500+ smart devices, we bring harmony to your home environment.
          </p>
          <p className="description-text">
            Imagine a home that knows when you wake up, adjusts the climate before you arrive, and secures itself when you leave.
            With our proprietary <Link className="highlight-text" href="/linkai-about">LinkAI™</Link> technology, your home learning curve is zero. It just works.
          </p>
        </div>

        <div className="section-divider"></div>

        <h2 className="value-prop-title">Why The Future Choice Is Clear</h2>

        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-wrapper">💧</div>
            <h3 className="feature-title">Link Ecosystem</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>Connects with everything. No barriers.</p>
            <span className="feature-status">Universal</span>
          </div>

          <div className="feature-item">
            <div className="icon-wrapper">🧠</div>
            <h3 className="feature-title">Adaptive AI</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>Learns your habits in 72 hours.</p>
            <span className="feature-status">Smart</span>
          </div>

          <div className="feature-item">
            <div className="icon-wrapper">⚡</div>
            <h3 className="feature-title">Energy Saver</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>Cut utility bills by up to 30%.</p>
            <span className="feature-status">Efficient</span>
          </div>

          <div className="feature-item">
            <div className="icon-wrapper">�️</div>
            <h3 className="feature-title">Military Security</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>256-bit encryption for your data.</p>
            <span className="feature-status">Secure</span>
          </div>

          <div className="feature-item">
            <div className="icon-wrapper">🌐</div>
            <h3 className="feature-title">Global Control</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>Manage your home from anywhere.</p>
            <span className="feature-status">Remote</span>
          </div>

          <div className="feature-item">
            <div className="icon-wrapper">💎</div>
            <h3 className="feature-title">Premium Design</h3>
            <p className="description-text" style={{ fontSize: '0.9rem' }}>Sleek hardware that fits your style.</p>
            <span className="feature-status">Elegant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;