import React from "react";
import { Form, SDiv, SImg, Sh1, Sh11, Formm, Optionn, Selectt } from "../style";

export default function Navbar() {
  return (
    <div>
      <SDiv $nav>
        <SImg $nav />
        <SDiv $innav>
          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Desitnatidons</Sh1>
          </SDiv>

          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Hotels</Sh1>
          </SDiv>
          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Flights</Sh1>
          </SDiv>
          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Bookings</Sh1>
          </SDiv>
          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Login</Sh1>
          </SDiv>
          <SDiv $dog={true}>
            <Sh1 $navh1={true}>Sign up</Sh1>
          </SDiv>
          <Formm>
            <Selectt id="" name="">
              <Optionn value="volvo">ENG</Optionn>
              {/* <option value="saab">UZ</option>
            <option value="mercedes">KR</option>
            <option value="audi">FR</option> */}
            </Selectt>
          </Formm>
        </SDiv>
      </SDiv>
    </div>
  );
}
