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

import Img from 'gatsby-image';
import '~/components/sites/case-studies/casestudy.scss';

const HeyFuture = () => {
	const intl = useIntl();
	const {
		imageSplashscreen,
		imageUX,
		imageUI,
		imageDev,
	} = useStaticQuery(graphql`
		query {
			imageSplashscreen: file(
				relativePath: { eq: "content/image-heyfuture.png" }
			) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 700) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageUX: file(relativePath: { eq: "content/image-heyfuture-ux.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1000) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageUI: file(relativePath: { eq: "content/image-heyfuture-ui.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1000) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			imageDev: file(relativePath: { eq: "content/image-heyfuture-dev.png" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1000) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO
				title={intl.formatMessage({ id: 'caseStudies.heyFuture.seo.title' })}
				description={intl.formatMessage({
					id: 'caseStudies.heyFuture.seo.description',
				})}
				image={imageSplashscreen.childImageSharp.fluid.src}
				url='https://excyted.io/case-studies/heyfuture'
			/>

			<section className='casepage' id='heyfuture'>
				<Container>
					<Row className='pb-hero'>
						<Col xs={12} lg={7}>
							<p className='label'>
								<FormattedHTMLMessage id='caseStudies.heyFuture.category' />
							</p>
							<h1>
								<FormattedMessage id='caseStudies.heyFuture.title' />
							</h1>
							<p>
								<FormattedMessage id='caseStudies.heyFuture.subtitle' />
							</p>
						</Col>

						<Col className='image-hero' xs={12}>
							<Img
								fluid={imageSplashscreen.childImageSharp.fluid}
								alt=''
								className='img-hero'
							/>
						</Col>
					</Row>
					<article>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.heyFuture.text.0' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.heyFuture.text.1' />
							</Col>
							<Col xs={12} lg={9}>
								<Img
									className='image border-radius'
									fluid={imageUX.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7} className='d-flex align-items-center'>
								<div>
									<FormattedHTMLMessage id='caseStudies.heyFuture.text.2' />
								</div>
							</Col>
							<Col xs={12} lg={8}>
								<Img
									className='image'
									fluid={imageUI.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.heyFuture.text.3' />

								<FormattedHTMLMessage id='caseStudies.heyFuture.text.4' />

								<FormattedHTMLMessage id='caseStudies.heyFuture.text.5' />

								<FormattedHTMLMessage id='caseStudies.heyFuture.text.6' />

								<FormattedHTMLMessage id='caseStudies.heyFuture.text.7' />
							</Col>

							<Col xs={12} lg={8}>
								<Img
									className='image'
									fluid={imageDev.childImageSharp.fluid}
									alt=''
								/>
							</Col>
						</Row>

						<Row>
							<Col xs={12} lg={7}>
								<FormattedHTMLMessage id='caseStudies.heyFuture.text.8' />
								<FormattedHTMLMessage id='caseStudies.heyFuture.text.9' />
							</Col>
						</Row>
					</article>
				</Container>
			</section>
		</Layout>
	);
};

export default HeyFuture;
