import React from "react";
import { SDiv, SImg, Sh1, Sh11 } from "../style";

export default function Navbar() {
  return (
    <div>
      <SDiv $nav>
        <SImg $nav />
        <SDiv $innav>
          <SDiv $dog={true}>Desitnations</SDiv>

          <Sh1 $dog={true}>Desitnations</Sh1>
          <Sh1>Desitnatidons</Sh1>
          <Sh11>tnatidons</Sh11>
        </SDiv>
      </SDiv>
    </div>
  );
}
