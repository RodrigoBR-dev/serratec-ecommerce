import { Card } from '../../styles/divs';

export const MeuCard = (props) => {
    return (
        <Card>
            {props.children}
        </Card>
    );
};