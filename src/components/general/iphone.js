import React from 'react';
import './iphone.scss';
import Video from '../../images/content/video-siemens-trimmed.mp4';
import ImagePosterSiemens from '../../images/content/image-poster-siemens.png';
import { BrowserView, MobileView } from 'react-device-detect';

const Iphone = () => {
	const videoRef = React.createRef();

	return (
		<div className='mockup'>
			<div
				className='iphonex'
				onMouseOver={() => videoRef.current.play()}
				onMouseLeave={() => {
					videoRef.current.pause();
					videoRef.current.currentTime = 0;
				}}
			>
				<div className='front'>
					<div className='screen'>
						<div className='screen__view'>
							<video
								ref={videoRef}
								className='view__video'
								preload='auto'
								loop={false}
								playsInline
								muted
								poster={ImagePosterSiemens}
								src={Video}
							></video>
						</div>
						<div className='screen__front'>
							<div className='screen__front-speaker'></div>
							<div className='screen__front-camera'></div>
						</div>
					</div>
					<div className='front__line'></div>
					<div className='front__line front__line-second'></div>
				</div>
				<div className='phoneButtons phoneButtons-right'></div>
				<div className='phoneButtons phoneButtons-left'></div>
				<div className='phoneButtons phoneButtons-left2'></div>
				<div className='phoneButtons phoneButtons-left3'></div>
				<div className='back'></div>
			</div>
			<div className='info'>
				<BrowserView>
					<small>Phone hovern für Animation</small>
				</BrowserView>
				<MobileView>
					<small>Phone tappen für Animation</small>
				</MobileView>
			</div>
		</div>
	);
};

export default Iphone;
