import React from 'react';
import AbstractLevel from './AbstractLevel.js';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Level1 extends AbstractLevel {
	checkText(text){
		if(text.toLowerCase().replace(/[^a-z]/g,'') == 'bemvindo')
			this.nextLevel();
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Bem vindo</Text>
				<TextInput
					style={styles.input}
					onChangeText={this.checkText.bind(this)}/>
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
	title: {
		fontSize: 28,
		marginBottom: 60
	},
	input: {
		width: 200,
		fontSize: 22,
		padding: 8,
		borderWidth: 1,
		borderColor: '#000'
	}
});
