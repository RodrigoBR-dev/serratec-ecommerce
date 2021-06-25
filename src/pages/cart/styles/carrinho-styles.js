import styled from 'styled-components';

export const CardProdutos =  styled.div `
    display: flex;
    flex-direction:column;
    max-width: 80%;
    

`; 
export const Container = styled.div `
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin:10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

 
export const DivProd = styled.div `
    display: flex;
    flex-direction: row;
`
export const BotaoDiv = styled.div `
    position: relative;

    Button{
        position: absolute;
        top: 50%;
        left: 50%;
        background: #E7625F;
        width: 25px;
        height:25px ;

        :hover{
            background-color:#BA0F30;
        }
    }
`