import styled from 'styled-components';

export const Button = styled.button `

    border-radius: 25px;
    display: flex;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #FF9636;
    cursor: pointer;
    border:none;
    outline: none;

    :hover{
        background-color: #FFCD58;
    }
    
`;
export const ButtonDiv = styled.div `
    
    display: flex;
    align-items: center;
    border-radius: 90px;
    height: 50px;
    width: 100px;
    box-sizing: border-box;
    background-color: #CC792B;

    :hover{
        background-color: #FFA500;
    }

    button {
        background:none;
        :hover{
            background: none;
        }
    }
`