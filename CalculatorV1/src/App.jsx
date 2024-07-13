import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/ContainerButton";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display DisplayValue={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
