// import styles from './styles/global..css' 
import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'typeface-inter';
import 'typeface-epilogue';

function App() {
  return (
    <Routes>
 

      <Route path='/' exact element={<Home/> } />
    </Routes>
  )
}

export default App
