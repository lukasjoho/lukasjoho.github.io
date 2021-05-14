import React from 'react';
import './members.scss';
import { Container, Row, Col } from 'react-bootstrap';
import UseDencrypt from './usedencrypt';
import {
	AiFillLinkedin,
	AiOutlinePlayCircle,
	AiFillCode,
	AiFillCamera,
	AiFillVideoCamera,
	AiOutlineCodeSandbox,
} from 'react-icons/ai';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const Members = () => {
	const intl = useIntl();
	const {
		lukas,
		antonio,
		jonas,
		david,
		moritz,
		oskar,
	} = useStaticQuery(graphql`
		query {
			lukas: file(relativePath: { eq: "team/lukas.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			antonio: file(relativePath: { eq: "team/antonio.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			david: file(relativePath: { eq: "team/david.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
			moritz: file(relativePath: { eq: "team/moritz.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid_withWebp_noBase64
					}
				}
			}
		}
	`);

	return (
		<section id='members'>
			<Container>
				<div className='title'>
					<h2>
						<FormattedMessage id='team.members.title' />
					</h2>
					<p>
						<FormattedMessage id='team.members.subtitle' />
					</p>
				</div>
				<UseDencrypt
					text={[
						intl.formatMessage({ id: 'team.members.dencrypt.0' }),
						intl.formatMessage({ id: 'team.members.dencrypt.1' }),
						intl.formatMessage({ id: 'team.members.dencrypt.2' }),
					]}
				/>
				<Row>
					<Col md={6} xl={3} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={lukas.childImageSharp.fluid}
								className='image'
							/>
							<AiOutlinePlayCircle />
						</div>
						<h3>
							<FormattedMessage id='team.members.members.0.name' />
						</h3>
						<span>
							- <FormattedMessage id='team.members.members.0.specialty' /> -
						</span>
						<a
							href='https://www.linkedin.com/in/lukas-hoppe-948142178'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={6} xl={3} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={antonio.childImageSharp.fluid}
								className='image'
							/>
							<AiFillCode />
						</div>
						<h3>
							<FormattedMessage id='team.members.members.1.name' />
						</h3>
						<span>
							- <FormattedMessage id='team.members.members.1.specialty' /> -
						</span>
						<a
							href='https://www.linkedin.com/in/antonio-schmitter/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={6} xl={3} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={moritz.childImageSharp.fluid}
								className='image'
							/>
							<AiFillCamera />
						</div>
						<h3>
							<FormattedMessage id='team.members.members.2.name' />
						</h3>
						<span>
							- <FormattedMessage id='team.members.members.2.specialty' /> -
						</span>
						<a
							href='https://www.linkedin.com/in/moritzkarnahl/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={6} xl={3} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={david.childImageSharp.fluid}
								className='image'
							/>
							<AiFillVideoCamera />
						</div>
						<h3>
							<FormattedMessage id='team.members.members.3.name' />
						</h3>
						<span>
							- <FormattedMessage id='team.members.members.3.specialty' /> -
						</span>
						<a
							href='https://www.linkedin.com/in/david-greco-/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Members;
