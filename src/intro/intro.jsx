import React from "react";
import { Btn, SDiv, SImg, Sh1 } from "../style";

export default function Intro() {
  return (
    <div>
      <SDiv $introMain>
        <SDiv $introInner>
          <Sh1 $red>Best Destinations around the world</Sh1>
          <Sh1 $main>Travel, enjoy and live a new and full life</Sh1>
          <Sh1 $info>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Sh1>
          <SDiv $btn>
            <Btn>Find out more</Btn>
            <SImg $btn />
            <Sh1 $btn>Play Demo</Sh1>
          </SDiv>
        </SDiv>
        <SDiv $introInner2>
          <SImg $introMain />
        </SDiv>
      </SDiv>
      <Sh1 $cat>CATEGORY</Sh1>
      <Sh1 $offer>We Offer Best Services</Sh1>
      <SDiv $servisWrap>
        <SDiv $servis>
          <SImg $ant />
          <Sh1 $cardinfo>Calculated Weather </Sh1>
          <Sh1 $fullinfo>
            Built Wicket longer <br />
            admire do barton <br />
            vanity itself do in it.
          </Sh1>
        </SDiv>

        <SDiv $servis>
          <SImg $plane />
          <Sh1 $cardinfo>Best Flights</Sh1>
          <Sh1 $fullinfo>
            Engrossed listening.
            <br /> Park gate sell they
            <br /> west hard for the.
          </Sh1>
        </SDiv>

        <SDiv $servis>
          <SImg $mic />
          <Sh1 $cardinfo>Local Events </Sh1>
          <Sh1 $fullinfo>
            We deliver outsourced
            <br /> aviation services for
            <br />
            military customers
          </Sh1>
        </SDiv>

        <SDiv $servis>
          <SImg $gear />
          <Sh1 $cardinfo>Customization</Sh1>
          <Sh1 $fullinfo>
            Barton vanity itself do
            <br /> in it. Preferd to men it
            <br /> engrossed listening
          </Sh1>
        </SDiv>
      </SDiv>
      <Sh1 $cat>Top Selling</Sh1>
      <Sh1 $offer>Top Destinations</Sh1>
      <SDiv $servisWrapp>
        <SDiv $card>
          <SImg $rome />
          <SDiv $imgfooter>
            <SDiv $cardinner>
              <Sh1>Rome, Italty</Sh1>
              <Sh1>$5,42k</Sh1>
            </SDiv>
            <SDiv $trip>
              <SImg $navigator />
              <Sh1>10 Days Trip</Sh1>
            </SDiv>
          </SDiv>
        </SDiv>

        <SDiv $card>
          <SImg $london />
          <SDiv $imgfooter>
            <SDiv $cardinner>
              <Sh1>Rome, Italty</Sh1>
              <Sh1>$5,42k</Sh1>
            </SDiv>
            <SDiv $trip>
              <SImg $navigator />
              <Sh1>10 Days Trip</Sh1>
            </SDiv>
          </SDiv>
        </SDiv>

        <SDiv $card>
          <SImg $europe />
          <SDiv $imgfooter>
            <SDiv $cardinner>
              <Sh1>Rome, Italty</Sh1>
              <Sh1>$5,42k</Sh1>
            </SDiv>
            <SDiv $trip>
              <SImg $navigator />
              <Sh1>10 Days Trip</Sh1>
            </SDiv>
          </SDiv>
        </SDiv>
      </SDiv>
    </div>
  );
}
