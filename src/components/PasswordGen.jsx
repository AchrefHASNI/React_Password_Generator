import React, { useState } from 'react'
import './PasswordGen.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ToastContainer, toast } from 'react-toastify';


const lowerCaseList ="abcdefghijklmnopqrstuvwxyz"
const upperCaseList =lowerCaseList.toUpperCase()
const numbersList = "0123456789"
const symbolsList = "&#/*()+-=@?!"


function PasswordGen() {
  const [passLen,setPassLen]=useState(6)
  const [password,setPassword]=useState('')
  const [lowerCase,setLowerCase]=useState(true)
  const [upperCase,setUpperCase]=useState(true)
  const [numbers,setNumbers]=useState(true)
  const [symbols,setSymbols]=useState(true)
  

  
  
  const generatePasssword =()=>{
    
    /*check password  elements and  make them in a single string*/ 
    let charList =""
    
    if (lowerCase) {
      charList +=lowerCaseList
    }
    if (upperCase) {
      charList +=upperCaseList
    }
    if (numbers) {
      charList +=numbersList
    }
    if (symbols) {
      charList +=symbolsList
    }

    
    /*create password generator  function from the string that contains elements of password */
    let tempPass =''
    
    const charListLength = charList.length
    
    for (let i = 0; i < passLen; i++) {
      const charPassIndex  = Math.round(Math.random() * charListLength)
      tempPass += charList.charAt(charPassIndex)
    }
      
    setPassword(tempPass)
  }
  
  
 

  const copyPassword = async()=>{
        const copiedText = await navigator.clipboard.readText()
        if (password.length && copiedText !== password) {
          navigator.clipboard.writeText(password)
          toast.success('Password copied with success', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      }

  return (
    <div> 
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: ' #323232' }} className="box" >
          <h1 className="title">Password Generator</h1> 
          <div className="password-area">
          <h2 className="mini-title"> Generated password</h2>
            <div className="password">
            <TextField className="password-text" id="outlined-basic" value={password} disabled placeholder="Click generate password" />
            <button className="copy-btn" onClick={copyPassword}>
            <ContentCopyIcon />
            <ToastContainer />

            </button>
            </div>
          </div>
          <div className="settings">
            <h2 className="mini-title"> Custum settings</h2>
            <div className="customize">
              <div className="checkboxes">
                <div className="checkbox-item">

                <input type="checkbox"
                 className="check"
                  name="lower" id="lower" 
                  checked={lowerCase} 
                  onChange={()=>setLowerCase(!lowerCase)}/>

                <label htmlFor="lower" 
                className="label-check">Include lower case {'(a-z)'} </label>
                </div>
                <div className="checkbox-item">

                <input type="checkbox" 
                className="check" 
                name="upper" id="upper" 
                checked={upperCase} 
                onChange={()=>setUpperCase(!upperCase)}/>

                <label htmlFor="upper" className="label-check">Include upper case {'(A-Z)'}</label>
                </div>
                <div className="checkbox-item">

                <input type="checkbox" 
                className="check" 
                name="numbers" id="numbers" 
                checked={numbers} 
                onChange={()=>setNumbers(!numbers)} />

                <label htmlFor="numbers" className="label-check">Include numbers {'(0-9)'} </label>
                </div>
                <div className="checkbox-item">

                <input type="checkbox" 
                className="check" 
                name="lower" id="symbols" 
                checked={symbols} 
                onChange={()=>setSymbols(!symbols)}/>

                <label htmlFor="symbols" className="label-check">Include symbols {'(/&"..)'} </label>
                </div>

              </div>
            </div>
          </div>
          <div className="password-length">
            <h2 className="mini-title">Password length</h2>
              <div className="slider">
                <p className="range-value">{passLen}</p>
                <div className="range">
            
                <input type="range"  defaultValue={passLen} min={6} max={30} onChange={(e)=>{setPassLen(e.currentTarget.value)}}/>
                </div>
              </div>
          </div>
          <div className="generate-pass">
            <button className="gen-pass-btn" onClick={generatePasssword}>Generate password</button>
          </div>
          <div className="about-me">
              <div>
             <p> &copy; Copyrights. All rights reserved. </p>
              </div>
              <div className="icons">
              <a href="https://github.com/AchrefHASNI" target={"blank"}>
                <GitHubIcon  className="icon"/>
              </a>
              <a href="https://facebook.com/achref.AR11" target={"blank"}>
                <FacebookIcon  className="icon"/>
              </a>
              <a href="https://www.linkedin.com/in/achref-hasni-688b4b230/" target={"blank"}>
                <LinkedInIcon  className="icon"/>
              </a>
              </div>
          </div>
          </Box>
      </Container>
    </div>
    
  )
}

export default PasswordGen