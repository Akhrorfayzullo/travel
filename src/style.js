import styled from "styled-components";
import navlogo from "./assets/logo.png";
export const SDiv = styled.div`
  /* border: 2px solid royalblue; */
  display: flex;
  align-items: center; //y
  justify-content: ${(props) => (props.$nav ? "space-between" : "center")}; //x
  gap: ${(props) => (props.$innav ? "5vw" : "0")};
  border: ${(props) => (props.$dog ? `2px solid orange` : `none`)};
  margin: ${(props) => (props.$nav ? "50px 8vw 0" : "0")};
  padding: ${(props) => (props.$dog ? "8px 20px" : "0")};
`;
export const SImg = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$nav ? navlogo : undefined,
}))``;

export const Sh1 = styled.h1`
  color: var(--1st, #212832);
  font-family: Google Sans;
  font-size: 15.341px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 2px solid red; */
  :hover {
    border: 2px solid red;
  }
`;
export const Sh11 = styled.div`
  color: var(--1st, #212832);
  font-family: Google Sans;
  font-size: 15.341px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  :hover {
    cursor: pointer;
  }
  /* border: 2px solid red; */
  /* :hover {
    border: 20px solid yellowgreen;
  } */
`;
