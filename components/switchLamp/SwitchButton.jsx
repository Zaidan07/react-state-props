// import State & Styled Component
import { useState } from "react";
import { Box, Button, Wrapper } from "./SwitchButton.styled";

//component
export default function SwitchLamp() {
  const [onLamp, setOnLamp] = useState(false);

  function handleLamp() {
    setOnLamp(onLamp ? false : true);
  }

  return (
    <Wrapper bgWrapper={onLamp}>
      <Box bgColor={onLamp}></Box>
      <Button onClick={handleLamp}>{onLamp === false ? "Off" : "On"}</Button>
    </Wrapper>
  );
}
