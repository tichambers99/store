import React from 'react';
import commonStyles from '../styles/common';
import useStyles from '../styles/footer';

export default function Footer(){
  const common = commonStyles();
  const classes = useStyles();
  return(
    <div>
      <div className={classes.new_letter}>
        <div className={classes.new_letter_img}>
          <img
            height='99px'
            width='163px'
            alt='email-picture'
            src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png'
          />
        </div>
        <div className={classes.new_letter_description}>
          <h3>Đăng ký nhận ngay bản tin từ Tiki</h3>
          <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</h5>
        </div>
        <div className={classes.new_letter_form}>
          <input 
            className={classes.form_input}
            placeholder='Địa chỉ email của bạn'
          />
          <button className={classes.form_button}>Đăng kí</button>
        </div>
      </div>

      <div className={classes.infor}>
        <div>Hỗ trợ khách hàng</div>
        <div>Về tiki</div>
        <div>Hợp tác và liên kết</div>
        <div>Phương thức thanh toán</div>
        <div>Kết nối với chúng tôi</div>
      </div>
    </div>
  )
}