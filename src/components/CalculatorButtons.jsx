import React from 'react';

export default function CalculatorButtons({handleValue, handleResult, handleReset,
     calcValue}) {



  return (
    <div className='calculatorButtons'>
        <div className='container'>
            
            {/* ROW 1 */}
            
            <div id='buttons' className="reset" onClick={handleReset}>
                <label>{calcValue == 0 ? 'CE': `C`}</label>
            </div>
            <div id='buttons' className="negativePositive">
                <label>+/-</label>
            </div>
            <div onClick={(e)=>handleValue('%')} id='buttons' className="percent">
                <label>%</label>
            </div>
            <div onClick={(e)=>handleValue('/')} id='buttons' className="division">
                <label>÷</label>
            </div>

            {/* ROW 2 */}
            
            <div onClick={(e)=>handleValue('7')} id='buttons' className="seven">
                <label>7</label>
            </div>
            <div  onClick={(e)=>handleValue('8')} id='buttons' className="eight">
                <label>8</label>
            </div>
            <div onClick={(e)=>handleValue('9')} id='buttons' className="nine">
                <label>9</label>
            </div>
            <div onClick={(e)=>handleValue('*')} id='buttons' className="multiplication">
                <label>✕</label>
            </div>

            {/* COLUMN 3 */}

            <div onClick={(e)=>handleValue('4')} id='buttons' className="four">
                <label>4</label>
            </div>
            
            <div onClick={(e)=>handleValue('5')} id='buttons' className="five">
                <label>5</label>
            </div>
            <div onClick={(e)=>handleValue('6')} id='buttons' className="six">
                <label>6</label>
            </div>
            <div onClick={(e)=>handleValue('-')} id='buttons' className="subtraction">
                <label>-</label>
            </div>


            {/* COLUMN 4 */}

            <div onClick={(e)=>handleValue('1')} id='buttons' className="one">
                <label>1</label>
            </div>
            
            <div onClick={(e)=>handleValue('2')} id='buttons' className="two">
                <label>2</label>
            </div>
            <div onClick={(e)=>handleValue('3')} id='buttons' className="three">
                <label>3</label>
            </div>
            <div onClick={(e)=>handleValue('+')} id='buttons' className="addition">
                <label>+</label>
            </div>

            {/* COLUMN 5 */}

            <div onClick={(e)=>handleValue('0')} id='buttons' className="zero">
                <label>0</label>
            </div>
            
            <div onClick={(e)=>handleValue('.')} id='buttons' className="period">
                <label>.</label>
            </div>
            <div id='buttons' className="equals" onClick={handleResult}>
                <label>=</label>
            </div>
        </div>
    </div>
  )
}
