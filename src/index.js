import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'
import {Header} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { StateContext, StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer from './context/reducer';
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(
<BrowserRouter>
   <StateProvider initialState={initialState} reducer={reducer}>
        <App />
   </StateProvider>
</BrowserRouter>
)

