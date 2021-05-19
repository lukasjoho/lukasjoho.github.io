import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import IconCode from '../../images/content/code.svg';
import IconVisualz from '../../images/content/visualz.svg';
import Textblock from './textblock';
import Showreel from '../../images/content/showreel.mp4';
import ShowreelPoster from '../../images/content/showreel-poster.jpg';
import { Parallax } from 'react-scroll-parallax';
import WebIcon from './webIcon';
import { useIntl } from 'gatsby-plugin-intl';

// Images
import IconDesign from '../../images/content/icons/icon-design.svg';
import IconCMS from '../../images/content/icons/icon-cms.svg';
import IconSeo from '../../images/content/icons/icon-seo.svg';
import IconFast from '../../images/content/icons/icon-fast.svg';
import IconHosting from '../../images/content/icons/icon-hosting.svg';
import IconCloudFunctions from '../../images/content/icons/icon-cloud-functions.svg';
import IconUsers from '../../images/content/icons/icon-users.svg';
import IconDatabase from '../../images/content/icons/icon-database.svg';
import IconScalability from '../../images/content/icons/icon-scalability.svg';
import IconPayment from '../../images/content/icons/icon-payment.svg';
import IconZahnrad from '../../images/content/icons/icon-zahnrad.svg';
import IconGlobe from '../../images/content/icons/icon-globe.svg';
import Build from './build';

import './sections.scss';
import 'animate.css/animate.css';

const Sections = () => {
	const intl = useIntl();
	const { kiel, captor, code, screen } = useStaticQuery(graphql`
		query {
			people: file(relativePath: { eq: "content/image-people.png" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 540) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			kiel: file(relativePath: { eq: "content/image-kiel.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 405) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			captor: file(relativePath: { eq: "content/image-captor.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 540) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			code: file(relativePath: { eq: "content/image-code.png" }) {
				childImageSharp {
					fluid(quality: 10, maxWidth: 270) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			screen: file(relativePath: { eq: "content/screen.jpg" }) {
				childImageSharp {
					fluid(quality: 60, maxWidth: 550) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`);

	return (
		<section id='sections'>
			<Build />
			{/* SECTION Web */}
			<Container>
				<Row>
					<Col md={4} className='centercol'>
						<Textblock
							title='Web'
							text={intl.formatMessage({ id: 'home.sections.web.subtitle' })}
							icon={IconCode}
						/>
					</Col>
					<Col md={8}>
						<div className='macbook'>
							<div className='screen'>
								<div className='viewport'>
									<Parallax y={[0, -120]} tagOuter='figure'>
										<Img
											className='screen-content'
											fluid={screen.childImageSharp.fluid}
											imgStyle={{ objectFit: 'contain' }}
										/>
									</Parallax>
								</div>
							</div>
							<div className='base'></div>
							<div className='notch'></div>
						</div>
					</Col>
				</Row>
				<section id='web-spacer'>
					<div className='image-code-wrapper'>
						<Img
							className='image-code'
							fluid={code.childImageSharp.fluid}
							alt=''
						/>
					</div>
					<div className='spacer-rect'>
						<IconGlobe className='icons globe' />

						<IconZahnrad className='icons zahnrad' />
					</div>
				</section>
				<Row className='web'>
					<Col className='col-with-margin' md={5}>
						<div className='web-panel web-site'>
							<h3>Website</h3>
							<Row>
								<Col md={6}>
									<WebIcon
										icon={<IconCMS />}
										text={intl.formatMessage({ id: 'home.sections.web.cms' })}
									/>
								</Col>
								<Col md={6}>
									<WebIcon
										icon={<IconDesign />}
										text={intl.formatMessage({
											id: 'home.sections.web.design',
										})}
									/>
								</Col>
								<Col md={6}>
									<WebIcon
										icon={<IconFast />}
										text={intl.formatMessage({ id: 'home.sections.web.speed' })}
									/>
								</Col>
								<Col md={6}>
									<WebIcon
										icon={<IconSeo />}
										text={intl.formatMessage({ id: 'home.sections.web.seo' })}
									/>
								</Col>
							</Row>
						</div>
					</Col>
					<Col md={7}>
						<div className='web-panel web-app'>
							<h3>Web-App</h3>
							<Row>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconDatabase />}
										text={intl.formatMessage({
											id: 'home.sections.web.databases',
										})}
									/>
								</Col>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconCloudFunctions />}
										text={intl.formatMessage({
											id: 'home.sections.web.functions',
										})}
									/>
								</Col>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconPayment />}
										text={intl.formatMessage({
											id: 'home.sections.web.payment',
										})}
									/>
								</Col>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconUsers />}
										text={intl.formatMessage({ id: 'home.sections.web.user' })}
									/>
								</Col>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconHosting />}
										text={intl.formatMessage({
											id: 'home.sections.web.hosting',
										})}
									/>
								</Col>
								<Col md={6} lg={4}>
									<WebIcon
										icon={<IconScalability />}
										text={intl.formatMessage({
											id: 'home.sections.web.scalability',
										})}
									/>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>

				<hr className='hr' />

				{/* SECTION Media*/}
				<Row className='media-row'>
					<Col md={{ size: 6, order: 2 }}>
						<Textblock
							title='Media'
							text={intl.formatMessage({
								id: 'home.sections.media.subtitle',
							})}
							icon={IconVisualz}
						/>
						<Img
							className='image-right'
							fluid={kiel.childImageSharp.fluid}
							alt=''
							style={{ width: '75%' }}
						/>
					</Col>
					<Col md={{ size: 6, order: 1 }}>
						<video
							aria-label='Showreel Video'
							className='showreel'
							preload='auto'
							loop={true}
							playsInline
							autoPlay
							muted
							src={Showreel}
							poster={ShowreelPoster}
						></video>
						<Img
							className='image-middle'
							fluid={captor.childImageSharp.fluid}
							alt=''
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Sections;
