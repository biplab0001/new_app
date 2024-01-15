
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('')

  const [alert, setAlert] = useState(null)

  const [color, setColor] = useState('')

  const clickMode = (id) => {

    if (id === 'dark') {
      setMode('dark')
      document.body.style.background = '#a6a6a6'
      setColor('#cccaca')
      showAlert("Dark mode enable", "success")
    }
    if (id === 'light') {
      setMode('light')
      document.body.style.background = 'white'
      setColor('white')
      showAlert("light mode enable", "success")
    }
    if (id === 'green') {
      setMode('success')
      document.body.style.background = '#ecffb3'
      setColor('#d5e6a5')
      showAlert("Green mode enable", "success")
    }
    if (id === 'read') {
      setMode('warning')
      document.body.style.background = '#ffffb3'
      setColor('#fafabe')
      showAlert("Read mode enable", "success")
    }
    if (id === 'grey') {
      setMode('secondary')
      document.body.style.background = '#dedcdc'
      setColor('#e8e8e8')
      showAlert("Grey mode enable", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  return (
    <>
      {/* <Router>
        <Navbar title="TextApp" about="About Us" mode={mode} clickMode={clickMode} alert={alert} />


        <Alert alert={alert} />

        <div className='container'>
          <Switch>
            <Route exact path="/">
              <TextBox clickMode={clickMode} mode={mode} bgcolor={color} alert={showAlert} />
            </Route>
            <Route path="/about">
              <About mode={mode} />
            </Route>
          </Switch>

          <Route path="/" exact >
            <TextBox clickMode={clickMode} mode={mode} bgcolor={color} alert={showAlert} />
          </Route>
          <Route path="/about" >
            <About mode={mode} />
          </Route>


        </div>
      </Router> */}

      <Router>
        <Navbar title="TextApp" about="About Us" mode={mode} clickMode={clickMode} alert={alert} />
        <Alert alert={alert} />

        <div className='container'>
          {/* Use the <Routes> component to wrap your individual <Route> components */}
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextBox clickMode={clickMode} mode={mode} bgcolor={color} alert={showAlert} />} />
            
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
