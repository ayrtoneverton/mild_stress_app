import React from 'react';
import AbstractLevel from './AbstractLevel.js';
import { StyleSheet, View } from 'react-native';

export default class Level3 extends AbstractLevel {
	constructor(props) {
		super(props);
		this.state = { top: 10, left: 10 };
		this.onStart = this.onStart.bind(this);
		this.onMove = this.onMove.bind(this);
		this.onEnd = this.onEnd.bind(this);
	}
    onStart(event) {
		this.X = event.nativeEvent.pageX;
		this.Y = event.nativeEvent.pageY;
		this.boxX = this.X - event.nativeEvent.locationX;
		this.boxY = this.Y - event.nativeEvent.locationY;
    }
    onMove(event) {
		this.setState({
			top: this.state.top + this.Y - event.nativeEvent.pageY,
			left: this.state.left + this.X - event.nativeEvent.pageX
		});
    }
    onEnd() {
		if (this.boxY < this.state.top
			&& this.boxX < this.state.left
			&& this.boxY + 20 > this.state.top
			&& this.boxX + 20 > this.state.left)
			this.nextLevel();
		else
			this.setState({ top: 10, left: 10 });
    }
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.box}
					onTouchStart={this.onStart}
					onTouchMove={this.onMove}
					onTouchEnd={this.onEnd}/>
				<View style={StyleSheet.flatten([styles.circle, this.state])}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	box: {
		width: 60,
		height: 60,
		borderWidth: 1,
		top: 150
	},
	circle: {
		position: 'absolute',
		backgroundColor: '#0bb',
		width: 40,
		height: 40,
		borderRadius: 20
	}
});
