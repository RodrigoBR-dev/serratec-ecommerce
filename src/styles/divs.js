import styled from 'styled-components'

export const Card = styled.div`
    width:352px;
    height:150px;
    padding:10px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    

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
    padding-top: 10px;
`;

export const NomeProduto = styled.div`
    font-size: 20px;
`;

export const DivPagamento = styled.div`
    margin: auto;
    display: flex;
    width: 90%;
    padding-top: 10px;
    margin-left: 20px;
`;

export const DetalheProd = styled.div`
    display: flex;
    margin: auto;
    max-width: 90%;
    padding: 10px;
`;