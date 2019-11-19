import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
*, ::after, ::before{
    box-sizing: border-box;
}

body{
    margin: 0px 0px 20px 0px;
    font-family: "Helvetica Neue", Helvetica, Arial , sans-serif;
    background-color: #ffffff;
}


`;
