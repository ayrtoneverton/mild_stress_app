import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import FS from 'react-native-fs';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import EndGame from './EndGame';

const levels = [Level1, Level2, Level3, EndGame];
const fileLevel = FS.ExternalDirectoryPath +'/ms-lv';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		FS.readFile(fileLevel)
		.then((res => {
			const lv = parseInt(res);
			this.setState({ level: lv, saveLevel: lv });
		}).bind(this))
		.catch(err => {});
		this.state = { level: 1, saveLevel: 1 };
		this.nextLevel = this.nextLevel.bind(this);
		this.prevLevel = this.prevLevel.bind(this);
	}
	help(){
		Alert.alert('Help', 'Decifre o enigma para passar para o próximo.');
	}
	getLevel(){
		const Level = levels[this.state.level - 1];
		return <Level onNextLevel={this.nextLevel}/>;
	}
	nextLevel(){
		const lv = this.state.level + 1;
		if(lv > this.state.saveLevel){
			this.setState({ level: lv, saveLevel: lv });
			FS.writeFile(fileLevel, lv.toString());
		}else
			this.setState({ level: lv });
	}
	prevLevel(){
		if(this.state.level > 1)
			this.setState({ level: this.state.level - 1 });
	}
	render() {
		return (
			<View style={styles.container}>
				{this.getLevel()}
				<Text style={styles.prev} onPress={this.prevLevel}>&laquo;</Text>
				<Text style={styles.level}>{this.state.level}</Text>
				<Text style={styles.help} onPress={this.help}>?</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	prev:{
		position: 'absolute',
		bottom: 5,
		right: 130,
		fontSize: 28,
		paddingVertical: 10,
		paddingHorizontal: 22,
		borderRadius: 100,
		backgroundColor: '#ddd'
	},
	level:{
		position: 'absolute',
		bottom: 5,
		right: 65,
		fontSize: 28,
		paddingVertical: 10,
		paddingHorizontal: 22,
		borderRadius: 100,
		backgroundColor: '#ddd'
	},
	help:{
		position: 'absolute',
		bottom: 5,
		right: 5,
		fontSize: 28,
		paddingVertical: 10,
		paddingHorizontal: 22,
		borderRadius: 100,
		backgroundColor: '#ddd'
	}
});
