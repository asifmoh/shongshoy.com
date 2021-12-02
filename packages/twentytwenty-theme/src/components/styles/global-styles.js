import { css } from "frontity";

const cssReset = css`
  html,
  body {
    border: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  address,
  big,
  cite,
  code,
  em,
  font,
  img,
  small,
  strike,
  sub,
  sup,
  li,
  ol,
  ul,
  fieldset,
  form,
  label,
  legend,
  button,
  table,
  caption,
  tr,
  th,
  td {
    border: none;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
  }
  .brighttext {
font-size: 1.4rem;
    color: #0e0740;
  }




.social{
  box-sizing: border-box;
  background: #fff;
}
  .clip {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  .svg--source {
    display: none
  }
  
  .svg--icon {
    width: 100%;
    max-width: 5rem;
    height: 100%;
    max-height: 5rem;
    display: block;
    margin: 0 auto;
    fill: currentColor
  }
  
  .wrapper {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .share {
    width: 5rem;
    height: 5rem;
    float: left;
    margin: .5rem 1rem .5rem 0;
    color: #353c4a;
    border: .125rem solid #f3f3f3;
    box-shadow: 0 0 8px 0 rgba(50, 50, 50, 0.15);
    border-radius: 50%;
    transition: 250ms;
    
    &:last-child {
      margin-right: 0
    }
    
    &:hover,
    &:focus {
      background: #f1f1f1;
    }
    
    &:focus {
      outline-color: inherit;
    }
  }
  
  .twitter {
    &:hover,
    &:focus {
      color: #00ACED;
      box-shadow: 0 0 24px 0 #00ACED
    }
  }
  
  .github {
    &:hover,
    &:focus {
      color: #4183c4;
      box-shadow: 0 0 24px 0 #4183c4
    }
  }
  
  .pinterest {
    &:hover,
    &:focus {
      color: #bd081c;
      box-shadow: 0 0 24px 0 #bd081c
    }
  }
  
  .youtube {
    &:hover,
    &:focus {
      color: #cd201f;
      box-shadow: 0 0 24px 0 #cd201f
    }
  }
  
  .facebook {
    &:hover,
    &:focus {
      color: #3b5998;
      box-shadow: 0 0 24px 0 #3b5998
    }
  }
  
  .google {
    &:hover,
    &:focus {
      color: #dd4b39;
      box-shadow: 0 0 24px 0 #dd4b39
    }
  }
  
  


  .text-block {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 4px;
  }




  .slider-container {
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    
    
  }
  
  .slider {
    
     
    width: 100%;
    max-width: 600px;
    height: 100%;
   
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
    border-radius: 5px;
    overflow: hidden;
    position: relative; 
  
  }
  
  .slides {
    display: flex;
    overflow-x: scroll;
    position: relative;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    
  }
  
  .slide:nth-of-type(even) {
    background-color: rgb(250, 246, 212);
  }
  
  .slide {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
   
    scroll-snap-align: center;
    margin-right: 0px;
    box-sizing: border-box;
    object-fit: cover;
    transform-origin: center center;
    transform: scale(1);
  }

  
  .slide__image {
    object-fit: cover;
  }
  
  .slide a {
    background: none;
    border: none;
  }
  
  a.slide__prev,
  .slider::before {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: 5%;
  }
  
  a.slide__next,
  .slider::after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    right: 5%;
  }
  
  .slider::before,
  .slider::after,
  .slide__prev,
  .slide__next {
    position: absolute;
    top: 48%;
    width: 35px;
    height: 35px;
    border: solid black;
    border-width: 0 4px 4px 0;
    padding: 3px;
    box-sizing: border-box;
  }
  
  .slider::before,
  .slider::after {
    content: "";
    z-index: 1;
    background: none;
    pointer-events: none; 
    @media (max-width: 700px) {
      display: none;
    
  }
  }
  
  .slider__nav {
    box-sizing: border-box;
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: 200px;
    margin-left: -100px;
    text-align: center;
  }
  
  .slider__navlink {
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: black;
    margin: 0 10px 0 10px;
  }
  
  
  .read-article{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    color: #000;
    background: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: arial;
    text-decoration: none;
    box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px -15px;
  }
  .read-article:hover{
      background: #d5d5d5;
      box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px 0px;
  }
  iframe[sandbox] .read-article{
    display: none;
  }






#slider{
  display: block;
  margin-left: 20%;
  margin-right: 30%;
  width: 40%;
}

blockquote{

  margin-bottom:3rem;
}

  blockquote::before,
  blockquote::after {
    content: "";
  }

  a,
  path {
    transition: all 0.15s linear;
  }
  
.center {
  display: block;
  margin: auto;
  width: 14rem;
  @media (min-width: 700px) {
    width: 20rem;
  }



}

`;

/**
 * Styles for Document Setup.
 *
 * See `1. Document Setup` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const documentSetup = (colors) => css`
  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    background: ${colors.bodyBg};
    box-sizing: border-box;
    color: #000;
    font-family: "Kalpurush", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
    font-size: 1.8rem;
    letter-spacing: -0.015em;
    text-align: left;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }

  #site-content {
    overflow: hidden;
  }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

/**
 * Styles for Element Base.
 *
 * See `2. Element Base` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const elementBase = (colors) => css`
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .faux-heading {
    font-feature-settings: "lnum";
    font-variant-numeric: lining-nums;
    font-weight: 700;
    letter-spacing: -0.0415625em;
    line-height: 1.25;
    margin: 3.5rem 0 2rem;
  }

  h1,
  .heading-size-1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 1.138888889;
  }

  h2,
  .heading-size-2 {
    font-size: 3.2rem;
  }

  h3,
  .heading-size-3 {
    font-size: 2.8rem;
  }

  h4,
  .heading-size-4 {
    font-size: 2.4rem;
  }

  h5,
  .heading-size-5 {
    font-size: 2.1rem;
  }

  h6,
  .heading-size-6 {
    font-size: 1.6rem;
    letter-spacing: 0.03125em;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    margin: 0 0 1em 0;
  }

  em,
  i,
  q,
  dfn {
    font-style: italic;
  }

  em em,
  em i,
  i em,
  i i,
  cite em,
  cite i {
    font-weight: bolder;
  }

  big {
    font-size: 1.2em;
  }

  small {
    font-size: 0.75em;
  }

  b,
  strong {
    font-weight: 700;
  }

  ins {
    text-decoration: underline;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  abbr,
  acronym {
    cursor: help;
  }

  address {
    line-height: 1.5;
    margin: 0 0 2rem 0;
  }

  hr {
    border-style: solid;
    border-width: 0.1rem 0 0 0;
    border-color: ${colors.gray.light};
    margin: 4rem 0;
  }

  a {
    color: ${colors.primary};
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }
`;

const elementBase700 = css`
  @media (min-width: 700px) {
    h1,
    .heading-size-1,
    h2,
    .heading-size-2,
    h3,
    .heading-size-3 {
      margin: 6rem auto 3rem;
    }

    h4,
    .heading-size-4,
    h5,
    .heading-size-5,
    h6,
    .heading-size-6 {
      margin: 4.5rem auto 2.5rem;
    }

    h1,
    .heading-size-1 {
      font-size: 3.2rem;
    }

    h2,
    .heading-size-2 {
      font-size: 3rem;
    }

    h3,
    .heading-size-3 {
      font-size: 2.8rem;
    }

    h4,
    .heading-size-4 {
      font-size: 2.6rem;
    }

    h5,
    .heading-size-5 {
      font-size: 2.4rem;
    }

    h6,
    .heading-size-6 {
      font-size: 2.2rem;
    }
  }
`;

const elementBase1220 = css`
  @media (min-width: 1220px) {
    h1,
    .heading-size-1 {
      font-size: 4.4rem;
    }
  }
`;

const listStyle = css`
  ul,
  ol {
    margin: 0 0 3rem 1rem;
  }

  ul {
    list-style: disc;
  }

  ul ul {
    list-style: circle;
  }

  ul ul ul {
    list-style: square;
  }

  ol {
    list-style: decimal;
  }

  ol ol {
    list-style: lower-alpha;
  }

  ol ol ol {
    list-style: lower-roman;
  }

  li {
    line-height: 1.5;
    margin: 0.5rem 0 0 1rem;
  }

  li > ul,
  li > ol {
    margin: 1rem 0 0 2rem;
  }

  .reset-list-style,
  .reset-list-style ul,
  .reset-list-style ol {
    list-style: none;
    margin: 0;
  }

  .reset-list-style li {
    margin: 0;
  }

  dt,
  dd {
    line-height: 1.5;
  }

  dt {
    font-weight: 700;
  }

  dt + dd {
    margin-top: 0.5rem;
  }

  dd + dt {
    margin-top: 1.5rem;
  }
`;

/**
 * Styles for blockquotes.
 *
 * See `2. Element Base / Quotes` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const quoteStyle = (colors) => css`
  blockquote {
    border: 1px solid black;
    padding: 20px;
    background-color: #dddcdc;
    border-radius: 4px;
    box-shadow: 5px 5px 5px #aaaaaa;
    page-break-inside: avoid;
  }

  cite {
    color: ${colors.gray};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25;
  }

  blockquote cite {
    display: block;
    margin: 2rem 0 0 0;
  }

  blockquote p:last-child {
    margin: 0;
  }
`;

/**
 * Styles for code elements.
 *
 * See `2. Element Base / Code` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const codeStyle = (colors) => css`
  code,
  kbd,
  pre,
  samp {
    font-family: Kalpurush;
    font-size: 0.9em;
    padding: 0.4rem 0.6rem;
  }

  code,
  kbd,
  samp {
    background: rgba(0, 0, 0, 0.075);
    border-radius: 0.2rem;
  }

  pre {
    border: 0.1rem solid ${colors.gray.light};
    line-height: 1.5;
    margin: 4rem 0;
    overflow: auto;
    padding: 3rem 2rem;
    text-align: left;
  }

  pre code {
    background: transparent;
    padding: 0;
  }
`;

/**
 * Styles for media elements.
 *
 * See `2. Element Base / Media` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const mediaStyle = (colors) => css`
  figure {
    display: block;
    margin: 0;
  }

  iframe {
    display: block;
    max-width: 100%;
  }

  video {
    display: block;
  }

  svg,
  img,
  embed,
  object {
    display: block;
    height: auto;
    max-width: 100%;
    margin: auto;
  }

  figcaption,
  .wp-caption-text {
    color: ${colors.gray.base};
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 1.5rem;
  }

  figcaption a,
  .wp-caption-text a {
    color: inherit;
  }
`;

/**
 * Styles for tables.
 *
 * See `2. Element Base / Tables` at
 * https://themes.trac.wordpress.org/browser/twentytwenty/1.7/style.css.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const tableStyles = (colors) => css`
  table {
    border: 0.1rem solid ${colors.gray.light};
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: 1.6rem;
    margin: 4rem 0;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
  }

  .alignleft > table {
    margin: 0;
  }

  .alignright > table {
    margin: 0;
  }

  th,
  td {
    border: 0.1rem solid ${colors.gray.light};
    line-height: 1.4;
    margin: 0;
    overflow: visible;
    padding: 0.5em;
  }

  caption {
    background: ${colors.gray.light};
    font-weight: 600;
    padding: 0.5em;
    text-align: center;
  }

  thead {
    vertical-align: bottom;
    white-space: nowrap;
  }

  th {
    font-weight: 700;
  }
  #toc_container {
    background: #f5efe0;
      border: 1px solid #aaa;
      padding: 10px;
      margin-bottom: 1em;
      width: auto;
      display: table;
      font-size: 95%;
  }

  toc_title{
    text-align: center;
    font-weight: 700;
    margin: 0;
    padding: 0;

  }
  toc_list{
  margin-top: 1em;
}

.footnotes{

  font-style: italic;
}

a:link {
  color: #056608;
}

p.has-background {
  padding: 1.25em 2.375em;
}

li p.has-background {
  padding: 1.25em 2.375em;
}

ol.has-background, ul.has-background {
  padding: 1.25em 2.375em;
}



:root .has-pale-pink-background-color {
	background-color: #f78da7
}

:root .has-vivid-red-background-color {
	background-color: #cf2e2e
}

:root .has-luminous-vivid-orange-background-color {
	background-color: #ff6900
}

:root .has-luminous-vivid-amber-background-color {
	background-color: #fcb900
}

:root .has-light-green-cyan-background-color {
	background-color: #7bdcb5
}

:root .has-vivid-green-cyan-background-color {
	background-color: #00d084
}

:root .has-pale-cyan-blue-background-color {
	background-color: #8ed1fc
}

:root .has-vivid-cyan-blue-background-color {
	background-color: #0693e3
}

:root .has-vivid-purple-background-color {
	background-color: #9b51e0
}

:root .has-white-background-color {
	background-color: #fff
}

:root .has-very-light-gray-background-color {
	background-color: #eee
}

:root .has-cyan-bluish-gray-background-color {
	background-color: #abb8c3
}

:root .has-very-dark-gray-background-color {
	background-color: #313131
}

:root .has-black-background-color {
	background-color: #000
}

:root .has-pale-pink-color {
	color: #f78da7
}

:root .has-vivid-red-color {
	color: #cf2e2e
}

:root .has-luminous-vivid-orange-color {
	color: #ff6900
}

:root .has-luminous-vivid-amber-color {
	color: #fcb900
}

:root .has-light-green-cyan-color {
	color: #7bdcb5
}

:root .has-vivid-green-cyan-color {
	color: #00d084
}

:root .has-pale-cyan-blue-color {
	color: #8ed1fc
}

:root .has-vivid-cyan-blue-color {
	color: #0693e3
}

:root .has-vivid-purple-color {
	color: #9b51e0
}

:root .has-white-color {
	color: #fff
}

:root .has-very-light-gray-color {
	color: #eee
}

:root .has-cyan-bluish-gray-color {
	color: #abb8c3
}

:root .has-very-dark-gray-color {
	color: #313131
}

:root .has-black-color {
	color: #000
}

:root .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
	background: linear-gradient(135deg, #0693e3, #9b51e0)
}

:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
	background: linear-gradient(135deg, #00d084, #0693e3)
}

:root .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
	background: linear-gradient(135deg, #7adcb4, #00d082)
}

:root .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
	background: linear-gradient(135deg, #fcb900, #ff6900)
}

:root .has-luminous-vivid-orange-to-vivid-red-gradient-background {
	background: linear-gradient(135deg, #ff6900, #cf2e2e)
}

:root .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
	background: linear-gradient(135deg, #eee, #a9b8c3)
}

:root .has-cool-to-warm-spectrum-gradient-background {
	background: linear-gradient(135deg, #4aeadc, #9778d1 20%, #cf2aba 40%, #ee2c82 60%, #fb6962 80%, #fef84c)
}

:root .has-blush-light-purple-gradient-background {
	background: linear-gradient(135deg, #ffceec, #9896f0)
}

:root .has-blush-bordeaux-gradient-background {
	background: linear-gradient(135deg, #fecda5, #fe2d2d 50%, #6b003e)
}

:root .has-purple-crush-gradient-background {
	background: linear-gradient(135deg, #34e2e4, #4721fb 50%, #ab1dfe)
}

:root .has-luminous-dusk-gradient-background {
	background: linear-gradient(135deg, #ffcb70, #c751c0 50%, #4158d0)
}

:root .has-hazy-dawn-gradient-background {
	background: linear-gradient(135deg, #faaca8, #dad0ec)
}

:root .has-pale-ocean-gradient-background {
	background: linear-gradient(135deg, #fff5cb, #b6e3d4 50%, #33a7b5)
}

:root .has-electric-grass-gradient-background {
	background: linear-gradient(135deg, #caf880, #71ce7e)
}

:root .has-subdued-olive-gradient-background {
	background: linear-gradient(135deg, #fafae1, #67a671)
}

:root .has-atomic-cream-gradient-background {
	background: linear-gradient(135deg, #fdd79a, #004a59)
}

:root .has-nightshade-gradient-background {
	background: linear-gradient(135deg, #330968, #31cdcf)
}

:root .has-midnight-gradient-background {
	background: linear-gradient(135deg, #020381, #2874fc)
}


`;

/**
 * Global styles for the TwentyTwenty theme.
 *
 * @param colors - Object with color definitions, from `state.theme.colors`.
 * @returns Serialized style.
 */
const globalStyle = (colors) =>
  css([
    cssReset,
    documentSetup(colors),
    accessibilitySettings,
    elementBase(colors),
    elementBase700,
    elementBase1220,
    listStyle,
    quoteStyle(colors),
    codeStyle(colors),
    mediaStyle(colors),
    tableStyles(colors),
  ]);

export default globalStyle;


/*-------Main css ---------*/

