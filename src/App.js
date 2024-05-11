import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import Content from './components/Content'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Team from './components/Team'




function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-gray-900 text-lightText">
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/content' element={<Content />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/team' element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
