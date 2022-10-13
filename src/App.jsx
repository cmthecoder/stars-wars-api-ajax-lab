import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './components/pages/StarshipList/StarshipList';
import StarshipPage from './components/pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/starships'
          element={<StarshipList />}
        />
          <Route 
          path='/starship'
          element={<StarshipPage />}
        />
      </Routes>
    </>
  );
}

export default App;
