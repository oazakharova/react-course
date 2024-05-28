// создание компонента с помощью стрелочной функции
// const Box = ({ children }) =>
function Box({ children }) {
  return <div className="boxClass">{children}</div>;
}

export default Box;
