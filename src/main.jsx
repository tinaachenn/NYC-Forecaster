// main.jsx
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client" instead of "react-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Layout from './routes/Layout.jsx';
import DetailView from './routes/DetailedView.jsx';
import NotFound from './routes/NotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render( // Use createRoot from "react-dom/client"
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <NotFound /> }/>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/details/:date" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);