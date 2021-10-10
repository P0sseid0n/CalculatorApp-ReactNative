import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from './src/components/button'
import Display from './src/components/display'

export default function App() {
	const [displayValue, setDisplayValue] = useState('0')
	const [memory, setMemory] = useState([])

	const addValue = value => {
		/*
      if(value == ','){
         if(!displayValue.includes(value)) setDisplayValue(displayValue + '.')
      } else if(displayValue == '0'){
         setDisplayValue(value)
      } else setDisplayValue(displayValue + value)
      */

		const valueIsNumber = !isNaN(+value)
		if (valueIsNumber && displayValue == '0') {
			setDisplayValue(value)
		} else if (isNaN(value)) {
			if (value == ',') {
				if (!displayValue.includes(value)) setDisplayValue(displayValue + '.')
				return
			}
			addMemory(displayValue + value)
		} else setDisplayValue(displayValue + value)
	}

	const addMemory = value => {
		setMemory([...memory, value])
		setDisplayValue('0')
	}

	const eraseValue = () => {
		if (displayValue == '0') {
			if (memory.length > 0) {
				const newValue = memory[memory.length - 1]
				setDisplayValue(newValue.slice(0, newValue.length - 1))
				const newMemory = [...memory]
				newMemory.pop()
				setMemory(newMemory)
			}
		} else {
			const valueErased = displayValue.slice(0, displayValue.length - 1)
			if (valueErased === '') setDisplayValue('0')
			else setDisplayValue(valueErased)
		}
	}

	const eraseMemory = () => {
		setMemory([])
		setDisplayValue('0')
	}

	const totalValue = () => {
		if (isNaN(displayValue[displayValue.length - 1])) return
		setDisplayValue(`${eval(memory.join('') + displayValue)}`)
		setMemory([])
	}

	return (
		<View style={style.container}>
			<Display memory={memory.join('')}>{displayValue}</Display>
			<View style={style.buttons}>
				<Button onClick={eraseMemory}>AC</Button>
				<Button onClick={eraseValue}>C</Button>
				<Button onClick={addValue}>/</Button>
				<Button onClick={addValue}>7</Button>
				<Button onClick={addValue}>8</Button>
				<Button onClick={addValue}>9</Button>
				<Button onClick={addValue}>*</Button>
				<Button onClick={addValue}>4</Button>
				<Button onClick={addValue}>5</Button>
				<Button onClick={addValue}>6</Button>
				<Button onClick={addValue}>-</Button>
				<Button onClick={addValue}>1</Button>
				<Button onClick={addValue}>2</Button>
				<Button onClick={addValue}>3</Button>
				<Button onClick={addValue}>+</Button>
				<Button onClick={addValue}>0</Button>
				<Button onClick={addValue}>,</Button>
				<Button onClick={totalValue}>=</Button>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})
