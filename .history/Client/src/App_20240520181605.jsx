import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './main-router'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <Router>
        <MainRouter />
      </Router>
    </>
  )
}

export default App
