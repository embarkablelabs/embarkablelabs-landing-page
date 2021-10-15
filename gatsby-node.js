
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug
		})
	}
}

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions

	//create markdown pages
	const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)

	const result = await graphql(`
		{
				allMarkdownRemark(
						sort: { order: DESC, fields: [frontmatter___date] }
						filter: { frontmatter: { publish: { eq: true } }}
								limit: 1000
						) {
								edges {
										node {
												frontmatter {
														slug
														publish
												}
										}
								}
						}
				}
	`)

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.slug,
			component: blogTemplate,
			context: {
				// additional data can be passed via context
				slug: node.frontmatter.slug
			}
		})
	})
	/*
	//create feature pages
	const features = require('./src/data/featureData.json')
	
	features.forEach(props => {
		createPage({
			path: `/${props.name}`,
			component: require.resolve(`./src/templates/featureTemplate.js`),
			context: { props }
		})
	})

	//create landing pages  
	const landingPages = require('./src/data/landingPageData.json')
	
	landingPages.forEach(props => {
		createPage({
			path: `/${props.name}`,
			component: require.resolve(`./src/templates/landingPageTemplate.js`),
			context: { props }
		})
	})
	*/
	
}
