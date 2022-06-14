import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AgendaContacto } from './componentes/AgendaContacto';
import { TablaAgenda } from './componentes/TablaAgenda';
import { FormContacto } from './componentes/FormContacto';

function App() {
  return (
    <Routes>
    <Route path="/" element={<AgendaContacto/>}/>
    <Route path="/agenda" element={<AgendaContacto/>}/>
    <Route path="/agenda/:indice" element={<AgendaContacto />} />
    <Route path="/tabla" element={<TablaAgenda/>}/>
    <Route path="/formulario/:id" element={<FormContacto/>}/>
  </Routes>
  );
}

export default App;
