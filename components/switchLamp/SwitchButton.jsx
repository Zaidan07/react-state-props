// import State & Styled Component
import { useState } from "react";
import { Wrapper, Button, Box } from "./SwitchButton.styled";

//component
export default function SwitchButton() {
  const [button, setButton] = useState(false);

  function HandleButton() {
    setButton(button ? false : true);
  }

  return (
    <Wrapper ChangeColor={button}>
      <Box bgColor={button}></Box>
      <Button onClick={HandleButton}>{button === false ? "Off" : "On"}</Button>
    </Wrapper>
  );
}
