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

const Members = () => {
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
						...GatsbyImageSharpFluid
					}
				}
			}
			antonio: file(relativePath: { eq: "team/antonio.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jonas: file(relativePath: { eq: "team/jonas.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			david: file(relativePath: { eq: "team/david.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			moritz: file(relativePath: { eq: "team/moritz.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			oskar: file(relativePath: { eq: "team/oskar.jpg" }) {
				childImageSharp {
					fluid(quality: 70, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<section id='members'>
			<Container>
				<div className='title'>
					<h2>Unser Team</h2>
					<p>Mit wem wir excyten</p>
				</div>
				<UseDencrypt />
				<Row>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={lukas.childImageSharp.fluid}
								className='image'
							/>
							<AiOutlinePlayCircle />
						</div>
						<h3>Lukas</h3>
						<span>- Produktion -</span>
						<a
							href='https://www.linkedin.com/in/lukas-hoppe-948142178'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={antonio.childImageSharp.fluid}
								className='image'
							/>
							<AiFillCode />
						</div>
						<h3>Antonio</h3>
						<span>- IT & Web -</span>
						<a
							href='https://www.linkedin.com/in/excyted/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={jonas.childImageSharp.fluid}
								className='image'
							/>
							<AiFillCode />
						</div>
						<h3>Jonas</h3>
						<span>- UX/UI-Design -</span>
						<a
							href='https://www.linkedin.com/in/excyted/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
				</Row>
				<Row>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={david.childImageSharp.fluid}
								className='image'
							/>
							<AiFillVideoCamera />
						</div>
						<h3>David</h3>
						<span>- Kamera -</span>
						<a
							href='https://www.linkedin.com/company/excyted'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={moritz.childImageSharp.fluid}
								className='image'
							/>
							<AiFillCamera />
						</div>
						<h3>Moritz</h3>
						<span>- Foto -</span>
						<a
							href='https://www.linkedin.com/company/excyted'
							rel='noopener noreferrer'
							target='_blank'
						>
							<AiFillLinkedin />
						</a>
					</Col>
					<Col md={4} className='member'>
						<div className='image-container'>
							<BackgroundImage
								fluid={oskar.childImageSharp.fluid}
								className='image'
							/>
							<AiOutlineCodeSandbox />
						</div>
						<h3>Oskar</h3>
						<span>- Kommunikation & Design -</span>
						<a
							href='https://www.linkedin.com/company/excyted'
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
