import logo from './logo.svg';
import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

function App() {

  const [scanResult,setscanResult] = useState(null)

  useEffect(()=>{
   
    const scanner = new Html5QrcodeScanner('reader',{
      qrbox: {
         width: 500,
         height: 500,
      },
      fps:5,
    });
  
    scanner.render(success,error);
  
    function success(result){
  
      scanner.clear();
      setscanResult(result);
  
    }
  
    function error(err){
      console.warn(err)
    }
    
  },[]);

 

  

  return (
    <div className='App'>
      <h1> QR CodeScanner</h1>
      {
         scanResult
         ?<div>Success : <img  src={scanResult} alt="abc"></img></div> 
         : <div id="reader"></div>

      }
    </div>
  );
}

export default App;
