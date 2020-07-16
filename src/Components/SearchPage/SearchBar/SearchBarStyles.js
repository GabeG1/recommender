import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

export const SearchBarStyled = withStyles((theme) => ({
    root: {  
        '& .MuiInput-root': {
            width: 300,
            height: 50,
            padding: '10px 10px 10px 20px',
            fontWeight: 15,
            backgroundColor: 'white',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
    }
}))(TextField);

