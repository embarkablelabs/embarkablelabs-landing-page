import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import landingPageData from '../data/embarkablePageData';
import { StepCard, ImageCard } from '../components/StepCard';

import { TitleBlockSplit } from '../components/TitleBlock';
import { imageLookup } from '../utilities/imageLookup';
import { CtaBlockImg } from '../components/CTABlock';
import { getObjectFromArray } from '../utilities/arrayFunctions';
import { ImgContent } from '../components/ImgContent';

function IndexPage() {
	const pageData = getObjectFromArray(landingPageData, 'name', 'embarkable')
	return (
		<Layout header={pageData.SEO.title}>

			{/*use default SEOfrom gatsby-config*/}
			<SEO
				title={pageData.SEO.title}
				image={imageLookup[pageData.SEO.image]}
			/>


			<TitleBlockSplit
				title={pageData.titleBlock.title}
				subtitle={pageData.titleBlock.subtitle}
				color={pageData.titleBlock.color}
				image={pageData.titleBlock.image}
				CTA={pageData.CTA}
			/>
			
			
			<div className="py-20 md:py-40 xl:py-64">
				<div className="flex flex-col w-full mx-auto text-center xxl:w-3/4 ">
					<div className="mb-24 text-3xl font-light text-gray-800 md:text-5xl xl:text-6xl">
						How does Embarkable work?
					</div>
{/*
					<div className="w-2/3 mx-auto mb-48 cursor-">
						<img className="block py-3 overflow-hidden md:p-4 bg-gradient-to-tr from-purple-400 to-pink-200 md:rounded-xl" src={imageLookup.LikeGIF}/>
					</div>	
*/}				
					<div className="bg-gradient-to-br from-purple-600 to-pink-700 xxl:rounded-3xl">
						<StepCard data={pageData.features} textColorWhite isArrow/>
					</div>
				</div>
			</div>


			<div className="">
			{pageData.content.map( ( props, index ) => {
				//console.log(index)
				if (index === 0 || index > 4) {return null;}
				return (
					<ImgContent
						key={index}
						data={props}
						CTA={pageData.CTA}
						isBorder={index % 2 ? true : false}
						//isReverse={index % 2 ? true : false}
					/>
				)}
			)}
			</div>

			<div className="py-20 md:pb-20" id="use-case">
				<div className="flex flex-col w-full py-16 mx-auto text-center bg-gray-200 border-t-2 border-b-2">
					<div className="mb-8 text-3xl font-light text-gray-800 md:text-6xl">
						Use case
					</div>		
					<div className="">
						<ImageCard data={pageData.useCase}  bgColor="white"/>
					</div>
				</div>
			</div>		


			<div className="border-b-2 border-gray-300">
				<CtaBlockImg data={pageData.CTA} text={pageData.CTA.text} inputText={pageData.CTA.inputText} buttonText={pageData.CTA.buttonText}/>
			</div>

		</Layout>
	);
}

export default IndexPage;
