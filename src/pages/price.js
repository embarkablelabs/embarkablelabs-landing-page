import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PriceBlock } from '../components/PriceTable';
import Accordian from '../components/Accordian';

import faqJSON from '../data/faqData';
import priceData from '../data/priceData';
import { getObjectFromArray } from '../utilities/arrayFunctions';
import { MessageBlock } from '../components/MessageBlock';

const PricePage = () => {
	const seo = getObjectFromArray(priceData, 'name', 'seo')
	return (

			<Layout>

				<SEO
					title={seo.title}
					description={seo.description}
				/>

				<div className="pt-24 pb-8">
					
					<div className="mt-12 text-3xl font-bold text-gray-800 lg:text-5xl text-gradient bg-gradient-to-r from-purple-600 to-pink-400 textBlock">
						Start building better products today.
					</div>
					<div className="my-4 text-gray-800 lg:text-xl textBlock">
						Capture more meaningful feedback and build products your customers love.
					</div>

					<PriceBlock data="tierOne"/>

				</div>

				<section className="max-w-4xl p-8 mx-auto my-16">
					<div className="mx-8 my-4 text-4xl">
						Frequently asked questions
					</div>
					<div className="flex justify-center flex-auto ">
						<Accordian data={faqJSON} />
					</div>
				</section>

				<div className="border-b-2 border-gray-300"/>

			</Layout>
		)
}

export default PricePage
