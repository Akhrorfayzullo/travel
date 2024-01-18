import styled from "styled-components";
import navlogo from "./assets/logo.png";
import girl from "./assets/Traveller 1.png";
import playbtn from "./assets/Play button.png";
import plane from "./assets/airplane.svg";
import ant from "./assets/ant.png";
import mic from "./assets/mic.png";
import gear from "./assets/gear.svg";
import rome from "./assets/realrome.png";
import london from "./assets/london.jpg";
import europe from "./assets/europe.png";
import nav from "./assets/navig.svg";
import tripg from "./assets/tripg.png";
import icon1 from "./assets/icon3 (2).svg";
import icon from "./assets/icon3.svg";
export const Wrapper = styled.div`
  margin: 0 8vw;
`;

export const SDiv = styled.div`
  /* border: 2px solid red; */
  background-color: ${(props) => (props.$imgfooter ? "#fff" : "unset")};
  display: flex;
  height: ${(props) =>
    props.$imgfooter ? "130px" : props.$tripinner ? "100%" : "unset"};
  width: ${(props) =>
    props.$cardinner || props.$imgfooterr || props.$trip
      ? "100%"
      : props.$imgfooter
      ? "315px"
      : "unset"};
  flex-direction: ${(props) =>
    props.$introInner ||
    props.$servis ||
    props.$card ||
    props.$imgfooter ||
    props.$servisWrapp ||
    props.$tripinner ||
    props.$ksiz ||
    props.$column
      ? "column"
      : "row"};

  align-items: ${(props) =>
    props.$introInner ||
    props.$tripinner ||
    props.$ksiz ||
    props.$cardinner ||
    props.$tripinner
      ? "start"
      : "center"}; //y
  justify-content: ${(props) =>
    props.$nav || props.$cardinner
      ? "space-between"
      : props.$imgfooter
      ? "space-evenly"
      : props.$trip
      ? "left"
      : "center"}; //x
  gap: ${(props) =>
    props.$innav || props.$tripinner
      ? "2vw"
      : props.$introInner
      ? "30px"
      : props.$servis || props.$servisWrap || props.$servisWrapp
      ? "15px"
      : "0"};
  flex: ${(props) =>
    props.$introInner ||
    props.$introInner2 ||
    props.$tripinner ||
    props.$tripinner2
      ? "1"
      : "none"};

  margin: ${(props) =>
    props.$nav
      ? "50px 0vw 0"
      : props.$introMain
      ? "50px 0 0"
      : props.$introInner
      ? "100px -100px 100px 0"
      : props.$servisWrap
      ? "0 0 150px"
      : props.$imgfooter
      ? "-300px 0 0"
      : props.$tripinner2
      ? "200px 0 0"
      : "0"};
  padding: ${(props) =>
    props.$dog
      ? "8px 20px"
      : props.$servis
      ? "45px"
      : props.$imgfooter
      ? "0 20px"
      : "0"};
  border-radius: ${(props) =>
    props.$servis ? "36px" : props.$imgfooter ? "0 0 24px 24px" : "unset"};
  box-shadow: ${(props) =>
    props.$servis
      ? `0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02)`
      : props.$imgfooter
      ? `0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)`
      : "unset"};
`;
export const SImg = styled.img.attrs((props) => ({
  alt: "no img",
  src: props.$nav
    ? navlogo
    : props.$introMain
    ? girl
    : props.$btn
    ? playbtn
    : props.$ant
    ? ant
    : props.$plane
    ? plane
    : props.$gear
    ? gear
    : props.$mic
    ? mic
    : props.$rome
    ? rome
    : props.$london
    ? london
    : props.$europe
    ? europe
    : props.$navigator
    ? nav
    : props.$tripgirl
    ? tripg
    : props.$icon
    ? icon
    : props.$icon1
    ? icon1
    : undefined,
}))`
  /* border: 10px solid blueviolet; */
  height: ${(props) =>
    props.$ant || props.$mic || props.$gear || props.$plane
      ? "150px"
      : "unset"};
  margin: ${(props) => (props.$btn ? "30px 0 0 " : "0")};
`;

export const Sh1 = styled.h1`
  color: ${(props) =>
    props.$red
      ? "#DF6951"
      : props.$main || props.$cardinfo
      ? "#181E4B"
      : props.$info || props.$cat || props.$fullinfo || props.$ksiz
      ? "#5E6282"
      : "#212832"};
  font-family: Google Sans;
  text-align: ${(props) =>
    props.$cat || props.$offer || props.$cardinfo || props.$fullinfo
      ? "center"
      : "left"};
  font-size: ${(props) =>
    props.$navh1 || props.$cat || props.$fullinfo || props.$ksiz
      ? "17px"
      : props.$red || props.$cardinfo
      ? "20px"
      : props.$main
      ? "84px"
      : props.$offer || props.$book
      ? "50px"
      : "15px"};
  font-style: normal;
  font-weight: ${(props) =>
    props.$red ||
    props.$main ||
    props.$cat ||
    props.$offer ||
    props.$cardinfo ||
    props.$book ||
    props.$ksiz
      ? "700"
      : "400"};
  line-height: ${(props) =>
    props.$main
      ? "89px"
      : props.$info
      ? "30px"
      : props.$fullinfo
      ? "26px"
      : props.$ksiz
      ? "19px"
      : "normal"};
  text-transform: ${(props) =>
    props.$red || props.$offer
      ? "uppercase"
      : props.$book
      ? "capitalize"
      : "lovercase"};
  /* border: 2px solid red; */
  letter-spacing: ${(props) => (props.$main ? "-3.3px" : "0")};
  margin: ${(props) =>
    props.$cat ? "80px 0 10px" : props.$offer ? "0 0 70px" : "0"};
  :hover {
    border: 2px solid red;
  }
`;
export const Btn = styled.button`
  width: 170px;
  height: 60px;
  color: #fff;
  border-radius: 10px;
  background-color: #f1a501;
  border: 1px solid transparent;
  box-shadow: 0px 20px 35px 0px rgba(241, 165, 1, 0.15);
  :hover {
    background-color: #e09000; /* Change background color on hover */
    cursor: pointer;
  }
`;

export const Formm = styled.form`
  border: 1px solid transparent;
`;
export const Optionn = styled.option`
  border: 1px solid yellowgreen;
`;
export const Selectt = styled.select`
  border: 1px solid transparent;
`;
export const Wrapdiv = styled.div`
  display: flex;
  border: 1px solid yellow;
  justify-content: space-around;
`;
export const Test = styled.h1`
  color: var(--TEXT-CLR, #5e6282);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;
export const Message = styled.div`
  /* border: 11px solid aliceblue; */
  width: 504px;
  height: 245px;
  border-radius: 10px;
  padding: 28px 68px 0px 34px;
  background-color: #fff;
  box-shadow: 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0),
    0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01),
    0px 20px 13px 0px rgba(0, 0, 0, 0.01),
    0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01),
    0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02),
    0px 100px 80px 0px rgba(0, 0, 0, 0.02);
`;
export const Shh = styled.h1`
  color: var(--TEXT-CLR, #5e6282);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;
