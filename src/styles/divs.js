import styled from 'styled-components'

export const Card = styled.div`
    min-width:352px;
    height:150px;
    padding:10px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    

    img {
        width: 150px;
    }

    a {
        text-decoration: none;
        color: black
    }

    div {
        display: flex;
        div {
            flex-direction: column;
            div {
                flex-direction: row;
            }
        }
    }
    img {
        width: 150px;
    }
`;

export const ContainerProduto = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
`;

export const NomeProduto = styled.div`
    font-size: 20px;
`; 