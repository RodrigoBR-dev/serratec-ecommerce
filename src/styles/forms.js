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