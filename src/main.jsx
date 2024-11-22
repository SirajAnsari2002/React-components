import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Heading from './components/Heading.jsx';
import SubHeading from './components/SubHeding.jsx';
import Time from './components/Time.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <center>
   <Heading></Heading>
   <SubHeading></SubHeading>
   <Time></Time>
   </center>
  </StrictMode>,
)
