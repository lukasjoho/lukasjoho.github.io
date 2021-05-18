import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image/withIEPolyfill';
import { Col, Modal } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './project.scss';

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isClient: false,
			show: false,
		};
	}
	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	componentDidMount() {
		this.setState({ isClient: true });
	}

	render() {
		var { data } = this.props;
		return (
			<React.Fragment key={this.state.isClient}>
				<Col lg={6} className='project'>
					<ScrollAnimation
						animateIn='animate__fadeInUp'
						duration={0.8}
						animateOnce={true}
					>
						<button onClick={this.handleShow} className='project-wrapper'>
							<BackgroundImage
								fluid={data.photo.fluid}
								className='background-image'
							>
								<div className='project-overlay'></div>
								<div className='details'>
									<p>
										<span>{data.category}</span> - <span>{data.type}</span>
									</p>
									<h3>{data.title}</h3>
								</div>
							</BackgroundImage>
						</button>
					</ScrollAnimation>
					<Modal show={this.state.show} onHide={this.handleClose} centered>
						<button className='modal-close' onClick={this.handleClose}>
							<IoMdClose />
						</button>
						<Modal.Header>
							<Modal.Title>
								<h3>{data.title}</h3>
								<p>
									<span>{data.category}</span> - <span>{data.type}</span>
								</p>
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							{data.description ? (
								<div className='rich-text-container'>
									{documentToReactComponents(data.description.json)}
								</div>
							) : (
								''
							)}

							{data.video ? (
								<div className='ratio-youtube'>
									<iframe
										width='100%'
										height='100%'
										src={data.video}
										frameBorder='0'
										allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
										title={data.title}
									/>
								</div>
							) : null}

							{data.instagram ? (
								<div className='ratio-instagram'>
									<iframe
										className='igembed'
										src={'https://www.' + data.instagram + 'embed'}
										frameBorder='0'
										allowFullScreen
										scrolling='no'
										allowtransparency='true'
										width='100%'
										height='100%'
										title={data.title}
									/>
								</div>
							) : null}
							{data.vimeo ? (
								<div className='ratio-youtube'>
									<iframe
										src={data.vimeo}
										frameBorder='0'
										allowFullScreen
										scrolling='no'
										allowtransparency='true'
										width='100%'
										height='100%'
										title={data.title}
									/>
								</div>
							) : null}
							<div className='images-container'>
								{data.images
									? data.images.map(image => {
											return (
												<Img
													key={image.id}
													fluid={image.fluid}
													alt='portfolio'
													className='portfolio-image'
													objectFit='contain'
												/>
											);
									  })
									: null}
							</div>
						</Modal.Body>
					</Modal>
				</Col>
			</React.Fragment>
		);
	}
}
export default Project;
