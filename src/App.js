import React, { useState } from 'react';
import './App.css';
import { caesarCipher, vigenereCipher, railFenceCipher } from "./encryption.js";

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  function handleEncrypt() {
    let algorithm = document.querySelector(".algorithm-select").value;
    let cipherText = "";
    if (algorithm === "caesar") {
      cipherText = caesarCipher(inputText, 3);
    } else if (algorithm === "vigenere") {
      cipherText = vigenereCipher(inputText, "SECRET");
    } else if (algorithm === "railfence") {
      cipherText = railFenceCipher(inputText, 3);
    }
    setOutputText(cipherText);
  }
  
  return (
    <div>
    <video autoPlay loop muted id="video-bg">
      <source src="video111.webm" type="video/mp4" />
    </video>
    <nav className="navbar">
    <div className="navbar-logo">
      <h2 className="navbar-brand">C̷̢̹̤̻̈i̴̛̻̮͊̾̈́͆͆̕p̴̛̺͕͇̃́̽̀́̃̆́h̸̞̲̮̟̬͇̞̓̊͜ẽ̵͙̙ŗ̶̡̢͖̗̠̤̮͉̒͝ ̸͓͔͖̈́̐̂̽̆V̶̧̟̗͖̬̭̯̞̽̏͐̊̕ͅa̸̼͔̜̎̑̀̊ư̵̡̡͎̱͚̳͕̪̘̈̉̐͝͠ͅl̵͍̘̔̾̿͋͊̒̅̑̕͠t̸͇͕̰̞̝́</h2>
    </div>
    <div class="loader">
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
    </div>
    <div className="navbar-links">
      <a href="#">Contact</a>
      <a href="#">Account</a>
      <a href="#">Login</a>
    </div>
  
      </nav>
      <div className="algorithm-box">
        <select className="algorithm-select">
          <option value="caesar">Caesar Cipher</option>
          <option value="vigenere">Vigenere Cipher</option>
          <option value="railfence">Rail Fence Cipher</option>
        </select>
      </div>
      <div className="container">
        <input 
          type="text" 
          placeholder="Enter your text here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="input-box" 
        />
        <button 
          onClick={handleEncrypt} 
          className="button2">
          Encrypt
        </button>
        <div className="output-box">
          {outputText}
        </div>
      </div>
    </div>
  );
}

export default App;
