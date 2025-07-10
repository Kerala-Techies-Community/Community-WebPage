import React from 'react';

const HighlightSection = () => {
    return (
        <div className="highlight-section">
            <h2>What&apos;s Happening Right Now</h2>
            <div className="highlights-grid">
                <div className="highlight-item">
                    <h3>Next Meetup: Devs & Chai – Kochi</h3>
                    <p><strong>Date:</strong> August 18, 2025</p>
                    <p>Join us for an informal evening to network, share ideas, and chill with fellow devs. Open for all skill levels.</p>
                </div>
                <div className="highlight-item">
                    <h3>Why Kerala Needs More Developer Communities</h3>
                    <p><strong>Date:</strong> Posted July 3, 2025</p>
                    <p>A reflection on the power of tech communities in shaping careers, solving problems, and building lifelong friendships.</p>
               </div>
                <div className="highlight-item">
                    <h3>Community Stats</h3>
                    <ul>
                        <li>👥 Members: 218+</li>
                        <li>🌱 Events Hosted: 9</li>
                        <li>💬 Messages Shared: 4,000+</li>
                        <li>🧳 Tours Completed: 3</li>
                    </ul>
                </div>
            </div>
            <div className="cta-buttons">
               
            </div>

          
        </div>
    );
};

export default HighlightSection;
