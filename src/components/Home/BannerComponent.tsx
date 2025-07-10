import React from 'react'
/*

Headline (Bold & Catchy)
"A Developer-Driven Community for Growth, Support & Good Vibes."
2. Subheadline
Join Keralatechies — where developers come together to learn, build, chill, and grow.
3. Call-to-Actions (CTA Buttons)
🟢 [Join the Community] → Leads to signup/registration
• 🔵 [See Upcoming Events] → Scrolls or navigates to events section/page
•
4. Background Visual / Carousel Options
You can use:
• Option A: A full-width banner with a single inspiring image — e.g., a friendly tech meetup
or Kerala-style outdoor dev session.

*/
const BannerComponent = () => {
  return (
    <div style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <h1 style={{ fontWeight: 'bold' }}>A Developer-Driven Community for Growth, Support & Good Vibes.</h1>
        <h2>Join Keralatechies — where developers come together to learn, build, chill, and grow.</h2>
        <div>
            <button>🟢 Join the Community</button>
            <button>🔵 See Upcoming Events</button>
        </div>  
    </div>
  )
}

export default BannerComponent