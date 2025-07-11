import SectionComp from '@/ui/section';
import Image from 'next/image';
import React from 'react';

const HighlightSection = () => {
    return (
        <React.Fragment>

            <section className="py-4 py-sm-5">
                <div className="container">
                    <div className="row g-4 g-lg-5 align-items-center">
                        {/* <!-- Title --> */}
                        <div className="col-lg-4">
                            <h2 className="h1">Take a look at our big set of features</h2>
                            <p className="mb-4">Express besides it present if at an opinion visitor. </p>
                            <a className="btn btn-dark" href="#">Download now</a>
                        </div>
                        {/* <!-- Feature item START --> */}
                        <div className="col-lg-8">
                            <div className="card card-body bg-mode shadow-none border-0 p-4 p-sm-5 pb-sm-0 overflow-hidden">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        {/* <!-- Info --> */}

                                        <Image
                                            src="/assets/images/elements/05.svg"
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="h-[50px]"
                                        />
                                        <h4 className="mt-4">Built-in digital wallet</h4>
                                        <p className="mb-0">Yet uncommonly his ten who diminution astonished. Demesne new
                                            manners savings staying had. Under folly balls.</p>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        {/* <!-- image --> */}
                                        {/* <!-- iphone-x mockup START --> */}
                                        <div className="iphone-x iphone-x-small iphone-x-half mb-n5 mt-0"
                                            style={{ background: 'url(assets/images/mockup/app-placeholder3.jpg)', backgroundSize: '100%' }}>
                                            <i></i>
                                            <b></b>
                                        </div>
                                        {/* <!-- iphone-x mockup END --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Feature item END --> */}

                        {/* <!-- Feature item START --> */}
                        <div className="col-md-4">
                            <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                                {/* <!-- Image --> */}
                                <div>
                                    <Image
                                        src="assets/images/elements/03.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="h-[50px]"
                                    />
                                </div>
                                {/* <!-- Info --> */}
                                <h4 className="mt-4">Safer communities</h4>
                                <p className="mb-0">Departure defective arranging rapturous did believe him all had supported
                                    simple set nature.</p>
                            </div>
                        </div>
                        {/* <!-- Feature item START --> */}

                        <div className="col-md-4">
                            <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                                {/* <!-- Image --> */}
                                <div>
                                    <Image
                                        src="assets/images/elements/09.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="h-[50px]"
                                    />
                                </div>
                                {/* <!-- Info --> */}
                                <h4 className="mt-4">Genuine users</h4>
                                <p className="mb-0">Satisfied conveying a dependent contented he gentleman agreeable do be
                                    warrant removed.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-body bg-mode shadow-none border-0 p-4 p-lg-5">
                                {/* <!-- Image --> */}
                                <div>
                                    <Image
                                        src="assets/images/elements/06.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="h-[50px]"
                                    />
                                </div>
                                {/* <!-- Info --> */}
                                <h4 className="mt-4">Stronger communities</h4>
                                <p className="mb-0">Meant balls it if up doubt small purse. Required his you put the outlived
                                    answered position.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionComp  >
                <div className="col-md-6 w-full">
                    <div className="me-4">
                        {/* <!-- TItle --> */}
                        <h2 className="h1 mb-4">Video call</h2>

                        {/* <!-- Meet creators --> */}
                        <div className="mb-3 d-flex align-items-start">
                            <Image width={40} height={40} className="h-40px" src="assets/images/elements/04.svg" alt="" />
                            <div className="ms-4">
                                <h5 className="mt-2">Meet creators</h5>
                                <p className="mb-0">In no impression assistance contrasted Manners she wishing
                                    justice hastily.</p>
                            </div>
                        </div>


                        <div className="mb-3 d-flex align-items-start">
                            <Image width={40} height={40} className="h-40px" src="assets/images/elements/10.svg" alt="" />
                            <div className="ms-4">
                                <h5 className="mt-2">Support artists</h5>
                                <p className="mb-0">Handsome met debating sir dwelling age material. As style
                                    lived he worse dried. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 position-relative">
                    {/* <!-- Image --> */}
                    <Image width={400} height={400} className="rounded-circle" src="assets/images/post/4by3/02.jpg" alt="" />


                </div>
            </SectionComp>
        </React.Fragment>
    );
};

export default HighlightSection;
