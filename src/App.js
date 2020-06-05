import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ThemeProvider, injectGlobal } from "styled-components"
import { BrowserRouter, withRouter } from "react-router-dom";
import Routes from "./Routes";

import { Row, Small, Medium, Large, Hero, Hero2 } from "./styledComponents";
import { StickyHeader } from "./components";

function App() {
  return (
    <div>
      <Hero/>
      <BrowserRouter>
        <StickyHeader/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
