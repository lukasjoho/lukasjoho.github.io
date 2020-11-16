import React, { useEffect, useState } from 'react';
import './iphone.scss';
import Video from '../../images/content/video-siemens-trimmed.mp4';
const Iphone = () => {
	const videoRef = React.createRef();

	return (
		<div className='mockup'>
			<div
				class='iphonex'
				onMouseOver={() => videoRef.current.play()}
				onMouseOut={() => {
					videoRef.current.pause();
					videoRef.current.currentTime = 0;
				}}
			>
				<div class='front'>
					<div class='screen'>
						<div class='screen__view'>
							<video
								ref={videoRef}
								className='view__video'
								preload='auto'
								loop={false}
								playsInline
								muted
								src={Video}
							></video>
							{/* <div class='dribbbleLogo'>
									<span></span>
								</div>
								<div class='hello'>
									<p>Hello </p>
									<div class='dribbbleLogo white'>
										<span></span>
									</div>
								</div> */}
						</div>
						<div class='screen__front'>
							<div class='screen__front-speaker'></div>
							<div class='screen__front-camera'></div>
						</div>
					</div>
					<div class='front__line'></div>
					<div class='front__line front__line-second'></div>
				</div>
				<div class='phoneButtons phoneButtons-right'></div>
				<div class='phoneButtons phoneButtons-left'></div>
				<div class='phoneButtons phoneButtons-left2'></div>
				<div class='phoneButtons phoneButtons-left3'></div>
				<div class='back'></div>
			</div>
		</div>
	);
};

export default Iphone;
