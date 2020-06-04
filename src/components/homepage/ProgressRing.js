import React from 'react';

class ProgressRing extends React.Component {
	constructor(props) {
		super(props);

		const { radius, stroke, text } = this.props;

		this.normalizedRadius = radius - stroke * 2;
		this.circumference = this.normalizedRadius * 2 * Math.PI;
		this.text = text;
	}
	render() {
		const { radius, stroke, progress, text } = this.props;
		const strokeDashoffset =
			this.circumference - (progress / 100) * this.circumference;

		return (
			<div>
				<div className='progressring'>
					<svg height={radius * 2} width={radius * 2}>
						<circle
							stroke='green'
							fill='transparent'
							strokeWidth={stroke}
							strokeDasharray={this.circumference + ' ' + this.circumference}
							style={{ strokeDashoffset }}
							stroke-width={stroke}
							r={this.normalizedRadius}
							cx={radius}
							cy={radius}
						/>
					</svg>
					<p>{progress}</p>
				</div>
				<p className='circle-text'>{text}</p>
			</div>
		);
	}
}
export default ProgressRing;
