import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
import Header from './components/header/header'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
)
