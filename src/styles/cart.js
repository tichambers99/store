import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root:{
    textAlign: '',
  },
  noProduct: {
    margin: '10px',
    padding: '50px',
    borderRadius: '5px',
    fontSize: '14px',
    backgroundColor: '#FFF',
    textAlign: 'center',
  },
  noProductText:{
    margin: '25px 0px',
  },
  container: {
    flexGrow: 1,
  },

  gridRoot:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
  },
  cartBox:{
    flexGrow: 1,
  },
  receipt:{
    flexGrow: 1
  },
  cartRoot: {
    margin: '0px 20px 20px 0px',
    padding: '15px 0px',
  },
  cardHeader: {
    marginBottom: '20px',
    paddingLeft: '15px',
    textDecoration: 'none',
  },
  cardFooter: {
    borderTop: 'solid 1px rgb(239, 239, 239)',
    marginTop: '20px',
    paddingLeft: '15px',
  },
  contain: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 15px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexGrow: 1,
    padding: '0px 25px',
  },
  button_non:{
    background: 'none',
    border: 'none',
    color: 'rgb(13, 92, 182)',
    cursor: 'pointer',
    fontSize: '13px',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  detail:{
    display: 'flex',
    alignItems: 'center',
  },
  detail_price:{
    fontWeight: 'bold',
    fontSize: '16px'
  },
  media:{
    maxWidth: 130,
    maxHeight: 130,
  },
  top_border:{
    borderTop: 'solid 1px rgb(239, 239, 239)',
  },
  mb20:{
    marginBottom: '20px',
  },
  dFlex:{
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;