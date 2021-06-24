import styled from 'styled-components';

export const CardCustom = styled.div ` 
    background-color: #ddd;
    width: 70%;
    height:150px; 
    flex-direction:row;
    align-items: center;
    margin:10px;
    display: flex;
    justify-content: flex-start;
    box-sizing:border-box;

    
`;
export const ButtonDiv = styled.div `
    border: 2px solid #111;
    border-radius: 25px;
    display: flex;
    width: 100px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`;
export const Image = styled.img `
    width: 100px;
    height:100px;
    border-radius:90px;
`;
export const Info = styled.p `
    
   margin: 5px;

 `
export const Break = styled.hr `
    background-color:#ccc ;
    height: 0.1px;
    width: 70%;

 `
 export const Button = styled.button `
        
        margin:13px;
        border:none;
        outline: none;
        background-color:#ddd;
        cursor: pointer;
    
 `;
 export const Container = styled.div `
    max-width: 100px;
    max-height: 100px;
    box-sizing: border-box;
    margin:15px;


   
 `; 