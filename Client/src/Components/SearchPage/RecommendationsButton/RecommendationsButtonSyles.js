import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const RecommendationsButtonStyles = withStyles((theme) => ({
    root: {
        fontSize: '1.3rem',
        margin: '0 auto',
        fontWeight: '600',
        display: 'block',
        textAlign: 'center',
        position: 'absolute',
        left: '70%',
        top: '15%',
        fontFamily: 'Oswald',
        color: 'white',
        background:
            '#9c4dcc',
        padding: '0.5rem 3rem',
        boxShadow: 'green',
        borderRadius: '3rem',
        '&:hover': {
            background:
                '#37006a',
        },
    },
}))(Button);
