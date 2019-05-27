import React from 'react';
import AbstractLevel from './AbstractLevel.js';
import { StyleSheet, View } from 'react-native';

export default class Level2 extends AbstractLevel {
	constructor(props) {
		super(props);
		this.state = { count: 1 };
		this.sequenceMap = [
			4, 6, 5,
			2, 8, 9,
			3, 7, 1
		];
		this.dimension = 3;
		this.totalBlocks = this.dimension * this.dimension;
	}
	select(order) {
		if(order == this.state.count){
			this['item-'+ (this.totalBlocks - order)].setNativeProps({style: styles.blockCheck});
			this.setState({ count: order + 1 });
			if(order == this.totalBlocks)
				this.nextLevel();
		}else{
			for (let i = (this.totalBlocks - this.state.count); i < this.totalBlocks; i++) {
				this['item-'+ i].setNativeProps({style: styles.block});
			}
			this.setState({ count: 1 });
		}
	}
	getBlocks(column){
		let blocks = [];
		for (let i = (column * this.dimension); i < (column * this.dimension + this.dimension); i++) {
			blocks[i] = (<View key={i}
							style={styles.block}
							ref={item => this['item-'+i] = item}
							onTouchEnd={() => this.select(this.sequenceMap[i])}/>);
		}
		return blocks;
	}
	getColumns(){
		let columns = [];
		for (let i = 0; i < this.dimension; i++) {
			columns[i] = <View key={this.totalBlocks + 1 + i}>{this.getBlocks(i)}</View>;
		}
		return columns;
	}
	render() {
		return (
			<View style={styles.container}>
				{this.getColumns()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection:'row',
		justifyContent: 'center'
	},
	block: {
		backgroundColor: '#bbb',
		padding: 40,
		margin: 10
	},
	blockCheck: {
		backgroundColor: '#0bb',
		padding: 40,
		margin: 10
	}
});
