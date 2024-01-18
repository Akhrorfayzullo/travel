import React from "react";
import { Message, SDiv, SImg, Sh1, Shh, Test, Wrapdiv } from "../style";

export default function Trip() {
  return (
    <div>
      <SDiv>
        <SDiv $tripinner>
          <Sh1 $cat>Top Selling</Sh1>
          <Sh1 $book>Book your next trip in 3 easy steps</Sh1>
          <SDiv>
            <SImg $icon />
            <SDiv $ksiz>
              <Sh1 $ksiz>Choose Destination</Sh1>
              <Sh1>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </Sh1>
            </SDiv>
          </SDiv>
          <SDiv>
            <SImg $icon />
            <SDiv $ksiz>
              <Sh1 $ksiz>Choose Destination</Sh1>
              <Sh1>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </Sh1>
            </SDiv>
          </SDiv>
          <SDiv>
            <SImg $icon1 />
            <SDiv $ksiz>
              <Sh1 $ksiz>Choose Destination</Sh1>
              <Sh1>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </Sh1>
            </SDiv>
          </SDiv>
        </SDiv>
        <SDiv $tripinner2>
          <SImg $tripgirl />
        </SDiv>
      </SDiv>

      <Wrapdiv>
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <Test>Testimonials</Test>
          <Sh1 $book>
            What people say
            <br /> about Us.
          </Sh1>
        </div>
        <div>
          <Message>
            <Shh>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </Shh>
          </Message>
        </div>
      </Wrapdiv>
    </div>
  );
}
