import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const studentIDRef = useRef(null);
  const [qrValue, setQrValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const data = `Name: ${nameRef.current.value}, Phone: ${phoneRef.current.value}, Student ID: ${studentIDRef.current.value}`;
    setQrValue(data); 
    console.log(data);
  };


  return (
    <div>
      <div className='banner'>
        <h1>Campus SignUP</h1>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
            <input type="text" name="username" placeholder='Your full name' ref={nameRef}/>
          </label>
          <label>
            Phone Number: 
            <input type="number" name="phone" placeholder='XXX-XXX-XXXX' ref={phoneRef}/>
          </label>
          <label>
            Student ID: 
            <input type="number" name="studentID" placeholder='Your Student ID' ref={studentIDRef}/>
          </label>
            <button type="submit">Submit</button>
        </form>
        <div className='qr-code'>
          {qrValue && <QRCode value={qrValue} />}  
      </div>
      </div>
    </div>
  );
}

export default App;

