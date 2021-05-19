import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { useIntl } from 'gatsby-plugin-intl';
import 'swiper/swiper.scss';
import './slider.scss';

import Siemens from './casestudies/Siemens';
import Biersafe from './casestudies/Biersafe';
import HeyFuture from './casestudies/HeyFuture';

import IconArrow from '~/images/content/icons/icon-arrow.svg';

const Slider = () => {
	SwiperCore.use([Navigation, Pagination, A11y]);
	const intl = useIntl();

	return (
		<section id='casestudies'>
			<Swiper
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
							'<button class="' + className + '"><div class="line"/></button>'
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
					className='swiper-button'
					aria-label={intl.formatMessage({
						id: 'home.casestudies.prevButton',
					})}
				>
					<IconArrow className='icon back' />
				</button>
				<div id='swiper-pagination' />
				<button
					id='swiper-button-next'
					className='swiper-button'
					aria-label={intl.formatMessage({
						id: 'home.casestudies.nextButton',
					})}
				>
					<IconArrow className='icon' />
				</button>
			</div>
		</section>
	);
};

export default Slider;
