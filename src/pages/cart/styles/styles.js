import styled from 'styled-components';

export const CardCustom = styled.div ` 
    background-color: #ddd;
    width: 70%;
    height:150px;
    display:flex;
    flex-direction:row;
    align-items: center;
    margin:10px;
    justify-content: flex-start;
    
`;
export const ButtonDiv = styled.div `
    border: 2px solid #111;
    border-radius: 20px;
    display: flex;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;

    button{
        margin:5px;
        border:none;
        outline: none;
        background-color:#ddd;
    }
    
`;
export const Image = styled.img `
    margin: 10px;
    width: 100px;
    height:100px;
    border-radius:90px;
`;
export const Info = styled.p `
    margin:10px;
 `