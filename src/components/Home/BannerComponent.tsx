import Image from 'next/image'
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
        <section className="py-4 py-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    {/* <!-- Title --> */}
                    <div className="col-lg-12 text-center mb-4">
                        <h2 className="h1">More than messaging</h2>
                        <p>Express besides it present if at an opinion visitor. </p>
                    </div>
                </div>
                {/* <!-- Row START --> */}
                <div className="row g-4 g-lg-5">
                    {/* <!-- Feature START --> */}
                    <div className="col-md-4 text-center">
                       
                        <Image
                            className="h-100px mb-4"
                            src="assets/images/elements/02.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <h4>Voice and video calls</h4>
                        <p className="mb-0">Place voice no arises along to. Parlors waiting so against me no. Wishing
                            calling is warrant settled was lucky.</p>
                    </div>
                    {/* <!-- Feature END --> */}

                    {/* <!-- Feature START --> */}
                    <div className="col-md-4 text-center">
                      
                        <Image
                            className="h-100px mb-4" src="assets/images/elements/07.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <h4>Auto save contacts</h4>
                        <p className="mb-0">Handsome met debating sir dwelling age material. As style lived he worse dried.
                            visitors subjects distance.</p>
                    </div>
                    {/* <!-- Feature END --> */}

                    {/* <!-- Feature START --> */}
                    <div className="col-md-4 text-center">
                        
                        <Image
                            className="h-100px mb-4" src="assets/images/elements/01.svg"
                            alt=""
                            width={50}
                            height={50}
                        />
                        <h4>End to end encryption</h4>
                        <p className="mb-0">Yet uncommonly his ten who diminution astonished. Demesne new manners savings
                            staying had. </p>
                    </div>
                    {/* <!-- Feature END --> */}
                </div>
                {/* <!-- Row START --> */}
            </div>
        </section>
    )
}

export default BannerComponent