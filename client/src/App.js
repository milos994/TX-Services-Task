import React from "react";
import { Routes } from "./Routes";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <CssBaseline >
      <h1 style={{ display: 'flex', justifyContent: 'center' }} > Welcome to the blog</h1>
      <Routes />
    </CssBaseline>
  )
}
export default App;
