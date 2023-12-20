import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ColorsList from './ColorsList';
import ColorPage from './ColorPage';
import NewColorForm from './NewColorForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/colors" element={<ColorsList />} />
            <Route path="/colors/new" element={<NewColorForm />} />
            <Route path="/colors/:color" element={<ColorPage />} />
            <Route path="*" element={<Navigate to="/colors" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
