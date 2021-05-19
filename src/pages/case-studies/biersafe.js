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
import { ReactCompareSlider } from 'react-compare-slider';
import Img from 'gatsby-image';
import '~/components/sites/case-studies/casestudy.scss';

const HeyFuture = () => {
	const intl = useIntl();
	const {
		imageShop,
		imageShopOld,
		imageBranding,
		imageUI,
		imageDev,
		imageDelivery,
	} = useStaticQuery(graphql`
		query {
			imageShop: file(relativePath: { eq: "content/image-biersafe-shop.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 800) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageShopOld: file(
				relativePath: { eq: "content/image-biersafe-old.jpg" }
			) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 800) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageBranding: file(
				relativePath: { eq: "content/image-biersafe-branding.png" }
			) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageUI: file(relativePath: { eq: "content/image-biersafe-ui.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageDev: file(relativePath: { eq: "content/image-biersafe-dev.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageDelivery: file(
				relativePath: { eq: "content/image-biersafe-delivery.png" }
			) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'caseStudies.biersafe.seo.title' })}
				description={intl.formatMessage({
					id: 'caseStudies.biersafe.seo.description',
				})}
				image={imageShop.childImageSharp.fluid.src}
				url='https://excyted.io/case-studies/biersafe'
			/>

			<section className='casepage' id='heyfuture'>
				<Container>
					<Row className='pb-hero'>
						<Col xs={12} lg={7}>
							<p className='label'>
								<FormattedHTMLMessage id='caseStudies.biersafe.category' />
							</p>
							<h1>
								<FormattedMessage id='caseStudies.biersafe.title' />
							</h1>
							<p>
								<FormattedMessage id='caseStudies.biersafe.subtitle' />
							</p>
						</Col>

						<Col className='image-hero' xs={12}>
							<ReactCompareSlider
								className='compare-slider'
								itemOne={
									<Img fluid={imageShopOld.childImageSharp.fluid} alt='' />
								}
								itemTwo={<Img fluid={imageShop.childImageSharp.fluid} alt='' />}
							/>
						</Col>
					</Row>
					<article>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.biersafe.text.0' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.biersafe.text.1' />
							</Col>
							<Col xs={12} lg={8} xxl={9}>
								<Img fluid={imageBranding.childImageSharp.fluid} alt='' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7} className='d-flex align-items-center'>
								<div>
									<FormattedHTMLMessage id='caseStudies.biersafe.text.2' />
								</div>
							</Col>
							<Col xs={12} lg={8} xxl={9}>
								<Img
									className='image border-radius'
									fluid={imageUI.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.biersafe.text.3' />
							</Col>
							<Col xs={11} sm={7} lg={4} className='d-flex align-items-center'>
								<Img
									className='image'
									fluid={imageDev.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>

						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.biersafe.text.4' />
							</Col>
							<Col xs={11} lg={4} className='d-flex align-items-center'>
								<Img
									className='image'
									fluid={imageDelivery.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>
					</article>
				</Container>
			</section>
		</Layout>
	);
};

export default HeyFuture;
