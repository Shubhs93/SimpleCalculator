import React, { useState } from 'react'
import Button from './component/Button'
import './App.css'

const App = () => {
  const[input,setInput]=useState('')
  const[previousNumber,setPreviousNumber]=useState('')
  const[operator,setOperator]=useState('')

  var addInput=val=>{
    setInput(input+val)
  }

  var addDecimal=val=>{
    if(input.indexOf('.')==-1){
      setInput(input+val)
    }
  }

  var addition=val=>{
    setPreviousNumber(input)
    setInput('')
    setOperator('+')
  }
  
  var subtract=()=>{
    setPreviousNumber(input)
    setInput('')
    setOperator('-')
  }
  
  var multiply=()=>{
    setPreviousNumber(input)
    setInput('')
    setOperator('*')
  }
  
  var division=()=>{
    setPreviousNumber(input)
    setInput('')
    setOperator('/')
  }

  var evalute=()=>{
    
    if(operator ==='+'){
      var a=(previousNumber +"+"+ input);
      console.log(a)
      setInput(parseInt(input) + parseInt(previousNumber))
    }else if(operator ==='-'){
      setInput(parseInt(input) - parseInt(previousNumber))
    }else if(operator ==='*'){
      setInput(parseInt(input) * parseInt(previousNumber))
    }else if(operator ==='/'){
      setInput(parseInt(input) % parseInt(previousNumber))
    }
  }

  var clear=()=>{
    setInput('')
    setPreviousNumber('')
    setInput('')
    setOperator('')
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
          <div className="output">
            {input}
          </div>
          <div className="row">
            <Button handleClick={addInput} >7</Button>
            <Button handleClick={addInput} >8</Button>
            <Button handleClick={addInput} >9</Button>
            <Button handleClick={division} >/</Button>
          </div>
          <div className="row">
            <Button handleClick={addInput} >4</Button>
            <Button handleClick={addInput} >5</Button>
            <Button handleClick={addInput} >6</Button>
            <Button handleClick={multiply} >*</Button>
          </div>
          <div className="row">
            <Button handleClick={addInput} >1</Button>
            <Button handleClick={addInput} >2</Button>
            <Button handleClick={addInput} >3</Button>
            <Button handleClick={addition} >+</Button>
          </div>
          <div className="row">
            <Button handleClick={addDecimal} >.</Button>
            <Button handleClick={addInput} >0</Button>
            <Button handleClick={evalute} >=</Button>
            <Button handleClick={subtract} >-</Button>
          </div>
          <div className='clear'>
            <Button handleClick={clear} >Clear</Button>
          </div>
    </div>
  </div>
  )
}

export default App
