import Button from "./button";
// all button related properties should encapsulate inside button component
// but when other component extend <Button />
// they needs to inherit all props from Button, export it so others can use
export { default as ButtonProps } from "./button";

export default Button;
