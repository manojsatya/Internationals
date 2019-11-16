import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
*, ::after, ::before{
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial , sans-serif;
}

html{
    margin: 0px 40px 20px 40px;
}


`;
