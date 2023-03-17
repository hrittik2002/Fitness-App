import './App.css';
import {  Route , Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetails />}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
