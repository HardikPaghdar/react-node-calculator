import React, { FunctionComponent } from "react";
import Calculator from './components/Calculator';
import "./assets/scss/app.scss";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <div>
        <Calculator />
    </div>
  );
};





export default App;
