import { Routes, Route } from 'react-router-dom';

import './styles/index.css';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import AddCountry from './pages/AddCountry';
import AddState from './pages/AddState';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className={styles.nav}>
        <Navbar />
      </div>

      {/* Routes */}
      <div className={styles.content}>
        <Routes>

          {/* Home Page */}
          <Route path='/' element={
            <Home />
          } />

          {/* Add Country Page */}
          <Route path='/addcountry' element={
            <AddCountry />
          } />

          {/* Add State Page */}
          <Route path='/addstate' element={
            <AddState />
          } />

        </Routes>
      </div>
    </div>
  )
}

export default App