import Image from 'next/image'
import React from 'react'



export type SectionCompProp = {
    title?: string;
    image?: string;
    isLeftImage?: "left" | "right";
    children?: React.ReactNode
}
const SectionComp: React.FC<SectionCompProp> = ({

    image = "assets/images/elements/06.svg",
   
    children
}) => {
    return (
        <section className="py-4 py-sm-5 position-relative">
            {/* <!-- Svg decoration START --> */}
            <div className="position-absolute top-0 start-0 mt-n5 pt-n5">
                <Image width={300} height={300} className="h-300px blur-9" src={image} alt="" />
            </div>
            {/* <!-- Svg decoration END --> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row g-4 align-items-center position-relative z-index-1">
                           {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionComp