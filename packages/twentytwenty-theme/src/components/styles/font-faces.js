import React from "react";
import { Global, css } from "frontity";
import KalpurushWOFF from "../../fonts/kalpurush.woff2";
import KalpurushTTF from "../../fonts/kalpurush-ANSI.ttf";
import ShobujWOFF from "../../fonts/Shobuj.woff2";
const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Kalpurush";
        src: url(${KalpurushWOFF}) format("woff"),
          url(${KalpurushTTF}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }
      @font-face {
        font-family: "Shobuj";
        src: url(${ShobujWOFF}) format("woff"),
          url(${ShobujWOFF}) format("ttf");
        font-weight: 700;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
