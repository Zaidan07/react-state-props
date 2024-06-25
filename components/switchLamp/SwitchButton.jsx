// import State & Styled Component
import { useState } from "react";
import { Button, Wrapper, Box } from "./SwitchButton.styled";

//component
export default function SwitchButton() {
  const [handle, setHandle] = useState(false);

  const HandleLamp = () => {
    setHandle(handle ? false : true);
  };

  return (
    <Wrapper>
      <Button onClick={HandleLamp}>
        <Box bgColor={handle}></Box>
        {handle ? "On" : "Off"}
      </Button>
    </Wrapper>  
  );
}
