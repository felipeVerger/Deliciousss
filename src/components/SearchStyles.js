import styled from "styled-components";

export const FormStyle = styled.form`
    margin: 0rem 20rem;
    div {
        position: relative;
        width: 100%;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem, 3rem;
        border-radius: 1rem;
        text-align: center;
        height: 50px;
        width: 100%;
        outline: none;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`