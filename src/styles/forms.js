import styled from "styled-components"; 

export const DivBox = styled.div `
    margin-top: 60px;
    width: 380px;
    margin: auto; 
    height: 400px;
    border: 1px solid #ddd;
    display:flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
    justify-content: space-between;
`;

export const DivEspaco1 = styled.div `
    
    display: grid;
    justify-content: space-between;
    width:100%;
    grid-template-columns: 100%;
    flex-direction: row;




`;

export const DivEspaco2 = styled.div `

    display: grid;
    justify-content: space-between;
    width:100%;
    grid-template-columns: 130px 160px;
    flex-direction: row;



`;

export const DivEspaco3 = styled.div `

    display: grid;
    justify-content: space-between;
    width:100%;
    grid-template-columns: 40px 90px 90px;
    flex-direction: row;



`;

export const InputData = styled.input`

    height:30px;



`;

export const Section = styled.section`

    margin-top: 80px;




`;

export const Button = styled.button`

    cursor: pointer;
    background-color: gray;
    height: 30px;
    border-radius: 4px;


`;

export const InputText = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0px;
    display: inline-block;
    border: 1px solid #ddd;
    outline:none;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Button2 = styled.button`
    width:100%;
    background-color: #FFA500;
    font-size: larger;
    color: #fff;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
    :hover{
        background-color: #FF8500;
    }
`;