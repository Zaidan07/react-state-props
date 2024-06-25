//import styled component
import styled from "styled-components";
// button
export const Button = styled.button`
background-color: white;
`
// Wrapper
export const Wrapper = styled.section`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
// Box
export const Box = styled.div`
height: 100px;
width: 100px;
background-color: ${(props) => props.bgColor === false ? "white" : "yellow"};
`

