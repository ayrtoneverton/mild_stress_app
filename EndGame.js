import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EndGame extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					Parabéns, conseguiu chegar ao fim.
				</Text>
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
		textAlign: 'center'
	}
});
