import React from "react";
import Banner from "./Banner/Banner";
import SectionContent from "../SectionContent/SectionContent";
import LandingPageContents from "./LandingPage.contents";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const LandingPage: React.FC = () => {

    return (
        <div>
            <Banner />
            <SectionContent title={LandingPageContents.sectionContents.h1} paragraph={LandingPageContents.sectionContents.p} />
            <FeaturedProducts />
        </div>
    )
}

export default LandingPage;