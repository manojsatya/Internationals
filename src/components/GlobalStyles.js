import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`

:root{
    --colorTheme: #22e0cd;
}

*, ::after, ::before{
    box-sizing: border-box;
}

body{
    margin: 0px 0px 20px 0px;
    font-family: "Helvetica Neue", Helvetica, Arial , sans-serif;
    background-color: #ffffff;
}



`;
