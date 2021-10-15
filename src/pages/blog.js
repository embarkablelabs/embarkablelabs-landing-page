import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import landingPageData from '../data/embarkablePageData';
import { CtaBlock, CtaBlockImg } from '../components/CTABlock';
import learnData from '../data/learnData';
import { getObjectFromArray } from '../utilities/arrayFunctions';

export const LearnPageQuery = graphql`
	query LearnPageQuery {
		allMarkdownRemark(
			sort: {order: DESC, fields: frontmatter___date}
			filter: { frontmatter: { publish: { eq: true } }}
		) {
		edges {
			node {
				frontmatter {
					slug
					date
					title
          			description
					image
					category
					publish
				}
			}
			}
		}
	}
`

//main page
const BlogPage = () => {
	const data = getObjectFromArray(learnData, 'name', 'blog')
	const pageData = getObjectFromArray(landingPageData, 'name', 'embarkable')

	return (

		<Layout>

			<SEO
				title={data.title}
				description={data.description}
			/>

			<BlogContent />

			<div className="mt-56 border-b-2 border-gray-300">
				<CtaBlockImg data={pageData.CTA} text={pageData.CTA.text} inputText={pageData.CTA.inputText} buttonText={pageData.CTA.buttonText}/>
			</div>

		</Layout>
	)
}

export default BlogPage


//menu and content
export const BlogContent = ({ children }) => {

	return (
		<StaticQuery
			query={LearnPageQuery}

			render={markdown => {
				const { allMarkdownRemark } = markdown;
				const [category, setCategory] = useState(null);

				console.log(category)
				//get categories from blog
				let categoryList = [];
				allMarkdownRemark.edges.forEach(element => {
					if (!categoryList.includes(element.node.frontmatter.category)) {categoryList.push(element.node.frontmatter.category)}
				});

				//filter by category
				var filteredList = allMarkdownRemark.edges.filter(element => element.node.frontmatter.category === category)
				if (filteredList.length === 0) {filteredList = allMarkdownRemark.edges}

				return (
					<section className="flex flex-wrap justify-center w-full px-4 mx-auto mt-48 xxl:w-2/3">

							<BlogMenu categoryList={categoryList} selectedCategory={category} setCategory={setCategory}/>

							<div className="w-full px-6 lg:w-4/5">
								{children ||

									<div className="grid grid-cols-3 gap-10">
									{filteredList.map((edge, index) => {
										if (index === 0) {
											return (
												<div className="col-span-3">
													<BlogCard key={'key-' + index} edge={edge} isTitle/>

												</div>
											)
										}
										return <BlogCard key={'key-' + index} edge={edge}/>
									})}

									</div>
								}
							</div>


					</section>
				)

			}}
		/>
	)
};

//<Link to="/blog" className="mb-6 text-lg font-semibold" onClick={() => setCategory(null)}>All</Link>
export const BlogMenu = ({ categoryList, selectedCategory, setCategory }) => {

		return(
			<div className="hidden w-full lg:block lg:w-1/5">
			<div className="w-56 p-4 mx-auto text-gray-600 xl:fixed">

				<div className="flex flex-wrap flex-auto justify-left">

					<div className="mb-4 font-semibold">Categories</div>

					<Link to="/blog" className={`w-full mb-2 ${selectedCategory === null && 'text-pink-400'} hover:underline`} onClick={() => setCategory(null)}>All</Link>
					{categoryList.map(category => {
						return <Link to="/blog" className={`w-full mb-2 ${selectedCategory === category && 'text-pink-400'} hover:underline`} onClick={() => setCategory(category)}>{category}</Link>
					})}

				</div>

			</div>
			</div>
		)

};

export const TopBlogMenu = ({ categoryList, selectedCategory, setCategory }) => {

	return(
		<div className="w-full -mt-24">
			<div className="fixed flex w-2/3 p-4 mx-auto text-gray-600 justify-evenly">

				<Link to="/blog" className={`${selectedCategory === null && 'text-pink-400'} hover:underline`} onClick={() => setCategory(null)}>All</Link>
				{categoryList.map(category => {
					return <Link to="/blog" className={`${selectedCategory === category && 'text-pink-400'} hover:underline`} onClick={() => setCategory(category)}>{category}</Link>
				})}

			</div>
		</div>
	)

};

 export const BlogCard = data => {

    return (
		<div className={`relative overflow-hidden shadow-xl text-gray-700 cursor-pointer rounded-none ${data.isTitle ? 'col-span-3' : 'col-span-3 md:col-span-1'} hover:shadow-2xl hover:text-pink-400`}>
			<Link to={data.edge.node.frontmatter.slug} tag={data.edge.node.frontmatter.slug}>
				<img className={`object-cover w-full ${data.isTitle ? 'h-80' : 'h-56'}`} src={data.edge.node.frontmatter.image} alt={data.edge.node.frontmatter.title}/>
				<div className="p-6">
					<div className="inline-block px-4 text-xs text-white bg-blue-400 rounded-full">{data.edge.node.frontmatter.category}</div>
					<div className="py-4 text-lg font-bold ">{data.edge.node.frontmatter.title}</div>
					{data.isTitle &&
						<p className="mt-1 font-light text-md">
							{data.edge.node.frontmatter.description}
						</p>}
				</div>
			</Link>
		</div>
    )
 };
