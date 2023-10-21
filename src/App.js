import './App.css';
import React, {useState} from 'react';
import Share from './Share';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const [shareTo,setShareTo]=useState(false)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }


  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <Share shareTo={ shareTo} />
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={()=>{setShareTo(!shareTo)}} className="btn">Share to</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  )
}


export default App;
