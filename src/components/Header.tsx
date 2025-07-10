'use client'; // only if you're using app directory and client components

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <h1 className="logo">
          <Link href="/">Developer Community Hub</Link>
        </h1>
        <nav className="nav-links">
          <Link href="/about">About Us</Link>
          <Link href="/founders-stories">Founders & Stories</Link>
          <Link href="/members">Members</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/join" className="join-btn">Join</Link>
        </nav>
      </div>

      <style jsx>{`
        .main-header {
          background-color: #f9f9f9;
          padding: 1rem 2rem;
          border-bottom: 1px solid #ddd;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .logo a {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }
        .nav-links {
          display: flex;
          gap: 1rem;
        }
        .nav-links a {
          text-decoration: none;
          color: #0070f3;
          font-weight: 500;
        }
        .nav-links a:hover {
          text-decoration: underline;
        }
        .join-btn {
          background-color: #0070f3;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
        }
        .join-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </header>
  );
};

export default Header;
