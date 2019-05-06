import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello World</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
