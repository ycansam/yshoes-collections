import React from "react";
import Banner from "./Banner/Banner";
import SectionContent from "../SectionContent/SectionContent";
import LandingPageContents from "./LandingPage.contents";

const LandingPage: React.FC = () => {

    return (
        <div>
            <Banner />
            <SectionContent title={LandingPageContents.sectionContents.h1} paragraph={LandingPageContents.sectionContents.p} />
        </div>
    )
}

export default LandingPage;