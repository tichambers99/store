import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  media:{
    padding: '20px',
  },
  head:{
    margin: '20px 0px',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    borderLeft: 'solid 1px rgb(239, 239, 239)',
  },
  cover: {
    width: '450px',
    height: '450px',
  },
  controls: {
    padding: '20px 0px',
  },
  meadia_list:{
    display: 'flex',
  },
  media_item:{
    height: '64px',
    width: '64px',
    margin: '10px 10px 0px 0px',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
      border: 'solid 1px #0d5cb6',
    },
    border: 'solid 1px #fff',
  },
  media_item_active: {
    border: 'solid 1px #0d5cb6',
  },
  infor:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  product:{
    flex: '2 0 0',
    paddingRight: '20px',
  },
  product_price: {
    backgroundColor: 'rgb(250, 250, 250)',
    borderRadius: '5px',
    padding: '10px',
  },
  product_groups:{
    padding: '20px 0px',
    borderBottom: 'solid 1px rgb(239, 239, 239)',
  },
  button_list: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px', 
  },
  color_button:{
    backgroundColor: '#fff',
    outline: 'none',
    padding: '8px 12px',
    marginRight: '10px',
    border: 'solid 1px rgb(239, 239, 239)',
    borderRadius: '6px',
    '&:hover': {
      border: 'solid 1px #0d5cb6',
      cursor: 'pointer',
    },
  },
  color_button_active: {
      border: 'solid 1px #0d5cb6',
  },
  voucher_button:{
    backgroundColor: '#fff',
    outline: 'none',
    padding: '4px 8px',
    marginRight: '10px',
    color: '#0d5cb6',
    border: 'solid 1px #0d5cb6',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  controls:{
    margin: '20px 0px',
  },
  shop:{
    border: 'solid 1px rgb(239, 239, 239)',
    borderRadius: '5px',
    height: 'fit-content',
    flex: '1 0 0',
  },

  shop_action:{
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '10px',
    borderBottom: 'solid 1px rgb(239, 239, 239)',
  },
  shopButton:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    outline: 'none',
    padding: '2px 4px',
    color: '#0d5cb6',
    border: 'solid 1px #0d5cb6',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
    },
    width: '100px',
  },
  shop_footer:{
    padding: '10px',
    display: 'flex',
    
  },
  icon_box:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#0d5cb6',
  },
  icon_box_text:{
    paddingTop: '10px',
    color: '#000',
    fontSize: '13px',
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default useStyles;