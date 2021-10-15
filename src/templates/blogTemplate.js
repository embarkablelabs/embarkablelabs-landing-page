import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';
import landingPageData from '../data/embarkablePageData';
import { CtaBlock } from '../components/CTABlock';
import { getObjectFromArray } from '../utilities/arrayFunctions';
import { BlogContent } from '../pages/blog';
import { UserTag } from '../components/TagButton';

export default function blogTemplate({ data }) {

	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark

	const pageData = getObjectFromArray(landingPageData, 'name', 'embarkable')

	return (
		<Layout>

			<SEO
				title={frontmatter.title}
				description={frontmatter.description}
			/>

			<BlogContent>

				<div className="text-gray-600 lg:px-4">
					<div className="text-3xl font-semibold text-left text-gray-700 sm:text-5xl">{frontmatter.title}</div>
					<div className="pt-2">
						<div className="inline-block px-4 py-1 my-2 mr-4 text-xs text-white bg-blue-400 rounded-full">{frontmatter.category}</div>
						<div className="inline-block px-4 py-2 my-2 text-sm lg:mx-4">{frontmatter.date}</div>
						<UserTag user={frontmatter.author} />						
					</div>

					<img className="object-cover w-full my-20 h-96 rounded-xl" src={frontmatter.image}/>

					<div
						className="markdown"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</div>

			</BlogContent>

			<div className="mt-56">
				<CtaBlock data={pageData.CTA} text={pageData.CTA.text} inputText={pageData.CTA.inputText} buttonText={pageData.CTA.buttonText}/>
			</div>

		</Layout>
	)
}

export const pageQuery = graphql`
  query($slug: String!) {
	markdownRemark(frontmatter: { slug: { eq: $slug } }) {
	  html
	  frontmatter {
		date(formatString: "MMMM DD, YYYY")
		author
		slug
		title
		category
		image
	  }
	}
  }
`
