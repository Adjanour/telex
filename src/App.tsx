import React from 'react';
import './App.css';
import './bootstrap.css'
import './total2.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Main} from './pages/main/Main';
import { Provider } from 'react-redux';
import { store } from './store';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import { CreatePost } from './pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}
export default App;
