import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 50px 0px 50px",
    background: 'rgb(1, 127, 255)',
    color: 'white',
  },

  toolBar:{
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  logoMenu: {
    flexBasis: 250,
    display: 'flex',
    justifyContent: 'start',
  },
  logo:{
    flexGrow: 1,
  },
  menu:{
    fontSize: 'large',
    color: '#FFF',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    height: '40px',
    width: '40px',
  },

  menuText:{
    textDecoration: 'none',
   fontSize: '12px', 
  },
  searchBar: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
  },
  userCart: {
    marginRight: 'auto',
    display: 'flex',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    color: '#FFF',
    fontSize: '12px',
    textDecoration: 'none',
    alignItems: 'center',
  },
  inputSearch:{
    backgroundColor: "#FFFFFF",
    border: 'none',
    width: '80%',
    height: '40px',
  },
  searchButton:{
    border: 'none',
    borderRadius: 0,
    height: '40px',
  },
  cartBadge: {
    color: '#000',
    backgroundColor: 'rgb(253, 216, 53)',
  }
}));

export default useStyles;