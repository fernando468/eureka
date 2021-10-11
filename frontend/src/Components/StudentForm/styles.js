import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '25px',
    marginRight: '25px',
    marginLeft: '25px',
  },
  form: {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.30)',
    borderRadius: '5px',
    padding: '30px',
  },
  titleForm: {
    marginTop: '15px',
    marginBottom: '15px',
    fontSize: '20px'
  },
  iconDelete: {
    color: theme.palette.warning.main
  }
}));
