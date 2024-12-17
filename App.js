import './App.css';
import React , {useState} from 'react';
function App() {
  const [value, setValue] = useState(' ');



  const calculate = () => {
    try {
      // Safe parsing and evaluation of basic mathematical expressions
      const result = Function('"use strict"; return (' + value + ')')();
      setValue(result.toString());
    } catch {
      alert('Invalid expression');
    }
  };

  return (
    <>
    
     <div class="container">
     
    <div class="calculator">
      
    <form action=''>
      <div clsss="input-field ">
        <input type="text" class="text-box" value={value}></input>
      </div>
      <div class="btn-div">
      <input type="button" className='button' onClick={e => setValue(' ')} value={"AC"}/>
      <input type="button" className='button' onClick={e => setValue(value.slice(0, -1))} value={"Del"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"%"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"/"}/>
      </div>
      <div class="btn-div">
        <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"7"}/>
        <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"8"}/>
        <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"9"}/>
        <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"*"}/>
      </div>
      <div class="btn-div">
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"4"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"5"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"6"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"-"}/>
      </div>
      <div class="btn-div">
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"1"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"2"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"3"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"+"}/>
      </div>
      <div class="btn-div">
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"0"}/>
      <input type="button" className='button' onClick={e => setValue(value + e.target.value)} value={"."}/>
      {/* <input type="button" onClick={e => setValue(eval(value))} value={"="}/> */}
      <input type='button' className='button' value={"="} onClick={calculate}/>
      </div>
     </form>
    </div>
     </div>
    </>
  );
}

export default App;
