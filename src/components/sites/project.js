import React from 'react';
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
		var style = {
			backgroundImage: 'url(' + data.photo.file.url + ')',
		};
		return (
			<React.Fragment key={this.state.isClient}>
				<Col lg={4} className='project'>
					<ScrollAnimation
						animateIn='animate__fadeInUp'
						duration={0.8}
						animateOnce={true}
					>
						<div
							className='project-wrapper'
							onClick={this.handleShow}
							style={style}
							role='link'
							tabindex='0'
						>
							<div className='project-overlay'></div>
							<div className='details'>
								<p>
									<span>{data.category}</span> - <span>{data.type}</span>
								</p>
								<h3>{data.title}</h3>
							</div>
						</div>
					</ScrollAnimation>
					<Modal show={this.state.show} onHide={this.handleClose} centered>
						<IoMdClose onClick={this.handleClose} className='modal-close' />
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

							<div className='images-container'>
								{data.images
									? data.images.map(image => {
											console.log(image.file.url);
											return (
												<img
													key={image.id}
													src={image.file.url}
													alt='portfolio'
													className='portfolio-image'
												/>
											);
									  })
									: null}
							</div>
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
						</Modal.Body>
					</Modal>
				</Col>
			</React.Fragment>
		);
	}
}
export default Project;
