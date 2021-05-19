import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
	useIntl,
	FormattedHTMLMessage,
	FormattedMessage,
} from 'gatsby-plugin-intl';

import SEO from '../../components/seo';
import Layout from '../../components/general/layout';
import { Container, Row, Col } from 'react-bootstrap';
import Iphone from '~/components/sites/case-studies/siemens/iphone';

import Img from 'gatsby-image';
import '~/components/sites/case-studies/casestudy.scss';

const Siemens = () => {
	const intl = useIntl();
	const {
		imageImac,
		imageDropdown,
		imageMdxCode,
		imageMdxPage,
		imageSiemensCase,
	} = useStaticQuery(graphql`
		query {
			imageImac: file(relativePath: { eq: "content/image-imac.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageMdxPage: file(relativePath: { eq: "content/image-mdx-page.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 850) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageMdxCode: file(relativePath: { eq: "content/image-mdx-code.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 740) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageDropdown: file(relativePath: { eq: "content/image-dropdown.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1100) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageSiemensCase: file(
				relativePath: { eq: "content/image-siemens-case.jpg" }
			) {
				childImageSharp {
					fixed(width: 1200, quality: 90) {
						src
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'caseStudies.siemens.seo.title' })}
				description={intl.formatMessage({
					id: 'caseStudies.siemens.seo.description',
				})}
				image={imageSiemensCase.childImageSharp.fixed.src}
				url='https://excyted.io/case-studies/siemens-ai'
			/>

			<section className='casepage' id='siemens'>
				<Container>
					<Row className='pb-hero'>
						<Col xs={12} lg={7}>
							<p className='label'>
								<FormattedHTMLMessage id='caseStudies.siemens.category' />
							</p>
							<h1>
								<FormattedMessage id='caseStudies.siemens.title' />
							</h1>
							<p>
								<FormattedMessage id='caseStudies.siemens.subtitle' />
							</p>
						</Col>

						<Col className='image-hero' xs={12}>
							<Img
								fluid={imageImac.childImageSharp.fluid}
								alt=''
								className='img-hero'
							/>
						</Col>
					</Row>
					<article>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.siemens.text.0' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.siemens.text.1' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7} className='d-flex align-items-center'>
								<div>
									<FormattedHTMLMessage id='caseStudies.siemens.text.2' />
								</div>
							</Col>
							<Col lg={5} className='image-iphone'>
								<Iphone />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={6} xxl={7}>
								<FormattedHTMLMessage id='caseStudies.siemens.text.3' />
							</Col>
							<Col className='images-mdx' xs={12} lg={8} xxl={10}>
								<Img
									className='mdx-page'
									fluid={imageMdxPage.childImageSharp.fluid}
									alt=''
								/>
								<Img
									className='mdx-code'
									fluid={imageMdxCode.childImageSharp.fluid}
									alt=''
									style={{ position: 'absolute' }}
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.siemens.text.4' />
							</Col>
							<Col xs={12} lg={8} xxl={9}>
								<Img
									fluid={imageDropdown.childImageSharp.fluid}
									alt=''
									className='use-case-explorer'
								/>
							</Col>
						</Row>
					</article>
				</Container>
			</section>
		</Layout>
	);
};

export default Siemens;
