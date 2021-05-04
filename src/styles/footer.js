import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  new_letter:{
    display: 'flex',
    alignItems: 'center',
    padding: '0px 50px',
    lineHeight: 1.15,
  },
  new_letter_img:{
    marginRight: '20px',
  },
  new_letter_description:{
    marginRight: '15px',
  },
  new_letter_form:{
    display: 'flex',
    marginRight: '15px',
  },
  form_input:{
    padding: '6px 12px',
    border: 'solid 1px rgb(204, 204, 204)',
    borderRadius: '4px',
    width: '350px',
    outline: 'none',
    fontSize: '14px',
    flex: '1 1 0',
    marginRight: '15px',
  },
  form_button:{
    backgroundColor: 'rgb(0, 175, 239)',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    padding: '2px 10px',
  },
  infor:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '20px 20px',
  },
})

export default useStyles;