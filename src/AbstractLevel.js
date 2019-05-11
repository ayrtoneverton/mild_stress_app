import React from 'react';
import PropTypes from 'prop-types';

export default class AbstractLevel extends React.Component {
	constructor(props) {
		super(props);
		this.nextLevel = this.nextLevel.bind(this);
	}
	nextLevel() {
		this.props.onNextLevel();
	}
}

AbstractLevel.propTypes = {
	onNextLevel: PropTypes.func.isRequired
};
