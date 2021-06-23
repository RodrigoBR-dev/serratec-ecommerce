import styled from 'styled-components'

export const Menu = styled.li`
    list-style-type: none;
    margin: 0;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 3px;
    overflow: hidden;
    background-color: #ffa500;
    font-size: larger;

    li {
        float: left;
        padding-right: 20px;

        :last-child {
            float: right;
        }
    }

    li a {
        display: block;
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;

        :hover {
            background-color: #111;
        }
    }
`;