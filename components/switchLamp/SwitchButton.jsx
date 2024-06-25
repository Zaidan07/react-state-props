// import State & Styled Component
import { useState } from "react";
import { Button, Wrapper, Box } from "./SwitchButton.styled";

//component
export default function SwitchLamp() {
  const [lamp, setLamp] = useState(false);

  const HandleLamp = () => {
    setLamp(lamp ? false : true);
  };

  return (
    <Wrapper>
      <Box bgColor={lamp}></Box>
      <Button onClick={HandleLamp}>{lamp === false ? "Off" : "On"}</Button>
    </Wrapper>
  );
}
