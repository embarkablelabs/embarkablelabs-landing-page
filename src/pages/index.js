import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import landingPageData from "../data/embarkablePageData";

import { imageLookup } from "../utilities/imageLookup";
import { getObjectFromArray } from "../utilities/arrayFunctions";

import LogoBlock from "../components/Logo";
import { IconButton } from "../components/IconButton";

function IndexPage() {
  const pageData = getObjectFromArray(
    landingPageData,
    "name",
    "embarkablelabs"
  );
  return (
    <Layout header={pageData.SEO.title}>
      {/*use default SEOfrom gatsby-config*/}
      <SEO title={pageData.SEO.title} image={imageLookup[pageData.SEO.image]} />

      {/* <TitleBlockSplit
				title={pageData.titleBlock.title}
				subtitle={pageData.titleBlock.subtitle}
				color={pageData.titleBlock.color}
				image={pageData.titleBlock.image}
				CTA={pageData.CTA}
			/>	 */}

      <div className="relative h-screen overflow-hidden">
        <div className="absolute max-w-xl text-blue-600 left-1/10 top-1/5">
          <LogoBlock />
          <div className="text-6xl">Where creativity meets innovation.</div>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full h-40 gap-4">
          <IconButton
            color="white"
            isExternal
            link="https://spruceirrigation.com/"
          >
            <img
              className="object-cover overflow-hidden rounded-md"
              src={imageLookup.Spruce}
            />
          </IconButton>
          <IconButton color="white" isExternal link="https://embarkable.io/">
            <img
              className="object-cover p-4 overflow-hidden bg-white rounded-md"
              src={imageLookup.Embarkable}
            />
          </IconButton>
          <IconButton
            color="white"
            isExternal
            link="https://www.linkedin.com/in/nathan-cauffman/"
          >
            <img
              className="object-cover w-24 h-24 overflow-hidden rounded-md"
              src={imageLookup.NathanIn}
            />
          </IconButton>
        </div>
        <img
          className="object-cover w-full h-full overflow-hidden"
          src={imageLookup.LandingPageImage}
        />
      </div>
    </Layout>
  );
}

export default IndexPage;
