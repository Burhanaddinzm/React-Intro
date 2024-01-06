# React + Vite - React Introduction

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm create vite@latest > React > JavaScript > cd Project-Name > npm i > npm run dev

npm i react-router-dom@latest

import {useState,useEffect} from "react";

import {customHook} from "/customHook"

import {BrowserRouter,Route,Routes or Switch} from "react-router-dom"

`<BrowserRouter > <Header /> <Routes or Switch > <Route path="/" > <Main /> <Route /> <Routes or Switch /> <Footer /> <BrowserRouter />`

const [test,setTest] = useState("test")

useEffect(() => {},[]);
