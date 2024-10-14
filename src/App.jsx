import { useState } from 'react'
import styles from'./App.module.css'
import Buttons from './components/buttons'
import Display from './components/display'

function App() {
  
  const [displayVal , setdisplayVal] = useState('');
  const onButtonClick = (buttontext)=>{
    if(buttontext==='C'){
        setdisplayVal('')
    }
    else if (buttontext==='='){
      const result = eval(displayVal);
      setdisplayVal(result)

    }
    else{
      let newDisplayValue = displayVal + buttontext;
      setdisplayVal(newDisplayValue)
    } 
  }

  return (
    <>
    <h2>Calculator</h2>
    <div className={styles.mainContainer} id='calculator'>
      <Display displayVal={displayVal} />
      <Buttons onButtonClick = {(buttontext)=>{
        onButtonClick(buttontext)
      }}/>
    </div>
    </>
  )
}

export default App
