import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

:root{
    --colorTheme: #22e0cd;
}

*, *::after, *::before{
    box-sizing: border-box;
}

body{
    font-family: "Helvetica Neue", Helvetica, Arial , sans-serif;
    background-color: #ffffff;
}



`;
