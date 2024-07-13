import style from "./Display.module.css";
const Display = ({ DisplayValue }) => {
  return (
    <input
      className={style.display}
      type="text"
      value={DisplayValue}
      readOnly
    />
  );
};
export default Display;
