import { makeStyles } from '@material-ui/core/styles';

const commonStyles = makeStyles(() => ({
  card: {
    borderRadius: '0px',
    boxShadow: 'none',
  },
  textDecoNone:{
    textDecoration: 'none',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '15px',
  },
  table: {
    border: 'solid 1px rgb(239, 239, 239)',
    borderCollapse: 'collapse',
  },
  td: {
    border: 'solid 1px rgb(239, 239, 239)',
    borderCollapse: 'collapse',
    width: '30px',
    maxWidth: '30px',
    height: '30px',
    textAlign: 'center',
  },
  buttonInput: {
    border: 'none',
    background: 'none',
    outline: 'none',
    width: '30px',
    fontSize: '13px',
  },
  Button:{
    backgroundColor: 'rgb(253, 206, 3)',
  },
  orderButton: {
    backgroundColor: 'rgb(255, 66, 78)',
    color: '#fff',
    width: '100%',
    '&:hover':{
      backgroundColor: 'rgba(255, 66, 78, 0.8)',
    },
  },
}));

export default commonStyles;