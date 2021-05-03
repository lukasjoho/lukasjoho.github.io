import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { useIntl } from 'gatsby-plugin-intl';
import 'swiper/swiper.scss';
import './slider.scss';
import { Container } from 'react-bootstrap';

import Siemens from './casestudies/Siemens';
import Biersafe from './casestudies/Biersafe';
import HeyFuture from './casestudies/HeyFuture';

import { IoMdArrowRoundBack } from 'react-icons/io';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Slider = () => {
	SwiperCore.use([Navigation, Pagination, A11y]);
	const intl = useIntl();
	const [swiper, setSwiper] = useState();

	return (
		<section id='casestudies'>
			<Swiper
				onSwiper={setSwiper}
				speed={400}
				className='swiper'
				spaceBetween={100}
				navigation={{
					prevEl: '#swiper-button-prev',
					nextEl: '#swiper-button-next',
				}}
				pagination={{
					el: '#swiper-pagination',
					clickable: true,
					renderBullet: (index, className) => {
						return (
							'<button class="' + className + '">' + (index + 1) + '</button>'
						);
					},
				}}
			>
				<SwiperSlide>
					<Siemens />
				</SwiperSlide>
				<SwiperSlide>
					<Biersafe />
				</SwiperSlide>
				<SwiperSlide>
					<HeyFuture />
				</SwiperSlide>
			</Swiper>
			<div className='swiper-tools-container'>
				<button
					id='swiper-button-prev'
					className='swiper-button prev'
					aria-label={intl.formatMessage({
						id: 'home.casestudies.prevButton',
					})}
				>
					<IoMdArrowRoundBack className='icon' size='2rem' />
				</button>
				<div id='swiper-pagination' />
				<button
					id='swiper-button-next'
					className='swiper-button next'
					aria-label={intl.formatMessage({
						id: 'home.casestudies.nextButton',
					})}
				>
					<IoMdArrowRoundForward className='icon' size='2rem' />
				</button>
			</div>
		</section>
	);
};

export default Slider;
