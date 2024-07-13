import Styless from "./ContainerButton.module.css";
const Buttons = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "%",
    "MC",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "ON",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={Styless.buttonContainer}>
      {buttonNames.map((buttonNames) => (
        <button
          key={buttonNames}
          className={Styless.button}
          onClick={() => onButtonClick(buttonNames)}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
