
import './App.css';

import Tesseract from 'tesseract.js';

let completeText; 

function Text() {

  

}



function getText() {

  Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    completeText = text;
    console.log(completeText);
    return(<div>{completeText}</div>);
  })

  return(<div>{completeText}</div>);

}



function App() {

  return(<div>
    <h1>Hello!</h1>
    <img src="https://tesseract.projectnaptha.com/img/eng_bw.png"></img>
    <Text />
  </div>)
}

export default App;