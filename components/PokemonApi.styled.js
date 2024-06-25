import styled from "styled-components";

export const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: ${(warna) => warna.color };
`;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background: lightgreen;
  color: ${(props) => props.color};
`;
export const Image = styled.img`
  width: 100px;
  margin-top: 10px;
 
`;

export const List = styled.li`
background-color: ${(props) => props.type === "fire" ? "red" : props.type === "water" ? "blue" : props.type === "earth" ? "brown": "white" };
`
