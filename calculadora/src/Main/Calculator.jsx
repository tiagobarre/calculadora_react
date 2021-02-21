import React, {Component} from 'react'
import Button from '../Components/Button/Button'
import Display from '../Components/Display/Display'
import './Calculator.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0    
}

export default class Calculador extends Component{

    state = { ...initialState }

    clearMemory(){
        this.setState({...initialState})
        console.log('Limpar')
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({operation, current: 1, clearDisplay: true })        
        }
        console.log(operation)
    }

    addDigito(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' ||
            this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })
        

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = {...this.state.values}
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }

        console.log(n)
    }

    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()}  />
                <Button label="/" click={() => this.setOperation('/')}  />
                <Button label="7" click={() => this.addDigito(7)} />
                <Button label="8" click={() => this.addDigito(8)}/>
                <Button label="9" click={() => this.addDigito(9)}/>
                <Button label="*" click={() => this.setOperation('*')} />
                <Button label="4" click={() => this.addDigito(4)}/>
                <Button label="5" click={() => this.addDigito(5)}/>
                <Button label="6" click={() => this.addDigito(6)}/>
                <Button label="-" click={() => this.setOperation('-')}/>
                <Button label="1" click={() => this.addDigito(1)}/>
                <Button label="2" click={() => this.addDigito(2)}/>
                <Button label="3" click={() => this.addDigito(3)}/>
                <Button label="+" click={() => this.setOperation('+')}/>
                <Button label="0" click={() => this.addDigito(0)}/>
                <Button label="." click={() => this.addDigito('.')}/>
                <Button label="=" click={() => this.setOperation('=')} />

            </div>
        )
    }
}