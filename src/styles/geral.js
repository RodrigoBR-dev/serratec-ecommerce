import styled from 'styled-components'

export const Menu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 15px;
    padding-top: 20px;
    overflow: hidden;
    background-color: #ffa500;
    font-size: larger;

    li {
        float: left;
        padding-right: 20px;

        :last-child {
            float: right;
        }

        input {
            width: 120%;
            padding: 5px 10px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-image: url('../img/search-icon.png');
            background-position: 10px 10px;
            background-repeat: no-repeat;

            :focus {
                outline: none;
            }
        }
    }

    li a {
        display: block;
        color: #fff;
        padding: 10px;
        text-decoration: none;
        text-align: center;

        :hover {
            background-color: #fff;
            color: #ffa500
        }
    }
`;

export const DivPersonalizada = styled.div`
    width: ${props => props.width};
    border: ${props => props.border};
    margin: ${props => props.margin};
    padding: 25px;
    margin-top: ${props => props.marginTop};
`;