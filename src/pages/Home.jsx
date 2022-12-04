import React, {useState, useEffect, useCallback} from 'react';
import CalculatorButtons from '../components/CalculatorButtons';
import DisplayResult from '../components/DisplayResult';
import '../css/home.css';


export default function Home() {
    const [calcValue, setCalcValue] = useState("");
    
    const operator = ['/', '*', '-', '+', '.'];
    
    const handleValue = (value) =>{
            if(operator.includes(value) && calcValue === '' ||
                operator.includes(value) && operator.includes(calcValue.slice(-1)))
            {
                return;
            }
        setCalcValue(calcValue + value)
    }

    const handleResult = useCallback(() =>{
        setCalcValue(eval(calcValue).toString())
    })

    const handleReset = () =>{
        setCalcValue('')
    }
  return (
    <div className='home'>
        <header>
            <h1>Simple Calculator</h1>
        </header>
        <main>
            <DisplayResult calcValue={calcValue} />
            <CalculatorButtons handleValue={handleValue}
                handleResult={handleResult} handleReset={handleReset}
                calcValue={calcValue} />
        </main>
        
    </div>
  )
}
