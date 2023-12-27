import { createTheme } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0;

    .button{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    .button Button{
        margin: 0 20px 10px 20px;
    }
`

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
