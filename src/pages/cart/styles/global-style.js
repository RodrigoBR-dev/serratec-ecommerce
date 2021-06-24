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
    flex-direction: row;
    align-items: center;
    border: 2px solid black;
    border-radius: 90px;
    height: 50px;
    width: 100px;
    box-sizing: border-box;

    button {
        background:none;
        :hover{
            background: none;
        }
    }
`