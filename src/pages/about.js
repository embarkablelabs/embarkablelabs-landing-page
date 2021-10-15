import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import learnData from '../data/learnData';
import { getObjectFromArray } from '../utilities/arrayFunctions';
import { imageLookup } from '../utilities/imageLookup';

const AboutPage = () => {
	const data = getObjectFromArray(learnData, 'name', 'about')

	return (

			<Layout>

				<SEO
					title={data.title}
					description={data.description}
				/>

				<div className="">

					<section className="">
						<div className="flex flex-col justify-center w-full pt-32 mx-auto font-light text-center text-gray-800 lg:w-4/5">
							<h1 className="my-6 text-5xl font-semibold text-gradient bg-gradient-to-r from-purple-600 to-pink-400">
							Our story
							</h1>
							<p className="w-full px-4 mx-auto text-xl leading-relaxed text-center lg:w-3/4">
							Back in 2014 we started an IOT (internet-of-things) company through a Kickstarter campaign.
							We had enthusiastic customers with ideas, but no great way of tracking or following up with them.
							We implemented a simple Excel sheet, which later changed to a Trello board, but neither was a great solution.
							After investigating existing solutions, we found most revolved around up-vote boards.
							The up-vote made no sense to our anlytical minds as it provided no meaningful value so we "ditched the up-vote" and built Embarkable.
							</p>
						</div>
					</section>

					<section className="py-32">
						<div className="flex flex-col justify-center w-4/5 mx-auto text-gray-700">
							<div className="justify-center w-64 h-64 mx-auto overflow-hidden rounded-full">
								<img className="bg-cover" src={imageLookup.natelily}/>
							</div>
							<div className="mx-auto text-center">
								Nathan & Lilyann
							</div>
						</div>
					</section>

				</div>

				<div className="mt-12 border-b-2 lg:mt-40">
					<img className="flex justify-center h-20 mx-auto lg:h-24" src={imageLookup.MadeInUSA}/>
				</div>

			</Layout>
		)
}

export default AboutPage
