import Image from 'next/image';
import React from 'react';

const IntroductionToCommunity = () => {
    return (
        <section className="pt-5 pb-0 position-relative">

            {/* <!-- Container START --> */}
            <div className="container">
                {/* <!-- Row START --> */}
                <div className="row text-center position-relative z-index-1">
                    <div className="col-lg-7 mx-auto">
                        {/* <!-- Heading --> */}
                        <h1 className="display-3">Download The Best Social App</h1>
                        <p className="lead">See resolved goodness felicity shy civility domestic had but perceive laughing
                            six did far. </p>
                        <div className="d-sm-flex justify-content-center">
                            {/* <!-- button --> */}
                            <button className="btn btn-primary">Sign up free</button>
                            <div className="mt-2 mt-sm-0 ms-sm-3">
                                {/* <!-- Rating START --> */}
                                <div className="hstack justify-content-center justify-content-sm-start gap-1">
                                    <div><i className="fa-solid fa-star text-warning"></i></div>
                                    <div><i className="fa-solid fa-star text-warning"></i></div>
                                    <div><i className="fa-solid fa-star text-warning"></i></div>
                                    <div><i className="fa-solid fa-star text-warning"></i></div>
                                    <div><i className="fa-solid fa-star-half-stroke text-warning"></i></div>
                                </div>
                                {/* <!-- Rating END --> */}
                                <i>&quot;I can&apos;t believe it&apos;s free!&quot;</i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Row END --> */}

                {/* <!-- Row START --> */}
                <div className="row g-0 align-items-center mt-2 position-relative z-index-1">
                    <div className="col-lg-4">
                        {/* <!-- iphone-x mockup START --> */}
                        <div className="iphone-x iphone-x-small"
                            // style="background: url(assets/images/mockup/app-placeholder2.jpg); background-size: 100%;"
                            style={{ backgroundImage: 'url(assets/images/mockup/app-placeholder2.jpg)', backgroundSize: '100%' }}>
                            <i></i>
                            <b></b>
                        </div>
                        {/* <!-- iphone-x mockup END --> */}
                    </div>
                    <div className="col-lg-8">
                        {/* <!-- Mac desk START --> */}
                        <div className="mac_container ">
                            <div className="mac_scaler">
                                <div className="mac_holder">
                                    <div className="mac_screen">
                                        <div className="mac_camera"></div>
                                        <div className="mac_screen_content"
                                            // style="background:url(assets/images/mockup/mac-placeholder.jpg); background-size: 100%;"
                                            style={{ backgroundImage: 'url(assets/images/mockup/mac-placeholder.jpg)', backgroundSize: '100%' }}
                                        >
                                        </div>
                                    </div>
                                    <div className="mac_bottom">
                                        <div className="mac_bottom_top_half">
                                            <div className="mac_thumb_space"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Mac desk START --> */}
                    </div>
                </div>
                {/* <!-- Row END --> */}
            </div>
            {/* <!-- Container END --> */}

            {/* <!-- Svg decoration START --> */}
            <div className="position-absolute top-0 end-0 mt-5 pt-5">

                <Image
                    className="h-300px blur-9 mt-5 pt-5"
                    src="assets/images/elements/07.svg"
                    alt=''
                    width={300}
                    height={300} />
            </div>
            <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
                <Image
                    className="h-[300px] blur-9" src="./assets/images/elements/01.svg" alt=""
                    width={300}
                    height={300} />
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
                <Image
                    className="h-300px blur-9" 
                    src="./assets/images/elements/04.svg" 
                    alt=""
                    width={300}
                    height={300} />

            </div>
            {/* <!-- Svg decoration END --> */}

        </section>
    );
};

export default IntroductionToCommunity;
