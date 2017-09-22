import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './css/customs.css'
import 'react-datepicker/dist/react-datepicker.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      isExpanded: false,
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  
  handleExpandMenu() {
    let menu = document.querySelector("ul.profile-menu");
    if(menu) {
      if(!menu.getAttribute("class").includes("expanded-menu")) {
        menu.classList.add("expanded-menu")
        this.setState({isExpanded: true})
      } else {
        menu.classList.remove("expanded-menu")
        this.setState({isExpanded: false})        
      }
    }
  }

  render() {
    return (
      <div className="landing-page">
        <div className="content-bg-wrap">
          <div className="content-bg"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div id="site-header-landing" className="header-landing">
                <a href="02-ProfilePage.html" className="logo">
                  <img src="img/logo.png" alt="Olympus" />
                  <h5 className="logo-title">olympus</h5>
                </a>

                <ul onClick={ () => this.handleExpandMenu() } className="profile-menu">
                  <li>
                    <a href="javascript(void)">About Us</a>
                  </li>
                  <li>
                    <a href="javascript(void)">Careers</a>
                  </li>
                  <li>
                    <a href="javascript(void)">FAQS</a>
                  </li>
                  <li>
                    <a href="javascript(void)">Help & Support</a>
                  </li>
                  <li>
                    <a href="#" className="js-expanded-menu">
                      {
                        this.state.isExpanded
                        ? <i className="fa fa-times" aria-hidden="true"></i>
                        : <i className="fa fa-bars" aria-hidden="true"></i>
                      }
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row display-flex">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>We are the best and biggest social network with 5 billion active users all around the world. Share you thoughts,
              write blog posts, show your favourite music via Stopify, earn badges and much more!
            </p>
                <a href="javascript(void)" className="btn btn-md btn-border c-white">Đăng ký ngay!</a>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="registration-login-form">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab">
                      <i className="fa fa-user-plus" aria-hidden="true"></i>                   
                    </a>
                    <div className="ripple-container">
                      <div className="ripple ripple-on"></div> 
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile" role="tab">
                      <i className="fa fa-sign-in" aria-hidden="true"></i>                    
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
                    <div className="title h6">Đăng ký tài khoản</div>
                    <form className="content">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="text" />
                            <label className="control-label">Tên</label>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="text" />
                            <label className="control-label">Họ</label>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="email" />
                            <label className="control-label">Email</label>
                          </div>
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="password" />
                            <label className="control-label">Mật khẩu</label>
                          </div>

                          <div className="form-group date-time-picker label-floating is-focused">
                            <label className="control-label">Ngày sinh</label>
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                            />
                            <span className="input-group-addon">
                              <label htmlFor="date"><i className="fa fa-calendar" aria-hidden="true"></i></label>                      
                            </span>
                          </div>

                          <div className="form-group label-floating is-select">
                            <label className="control-label">Giới tính</label>
                            <select className="selectpicker form-control" size="auto">
                              <option value="1">Nam</option>
                              <option value="0">Nữ</option>
                            </select>
                          </div>

                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input name="optionsCheckboxes" type="checkbox" />
                                <span className="checkbox-material"><span className="check"></span></span>
                                Tôi chập nhận <a href="javascript(void)">những điều khoản và điều lệ</a> của website
                          </label>
                            </div>
                          </div>

                          <a href="javascript(void)" className="btn btn-purple btn-lg full-width">Hoàn tất đăng ký!</a>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
                    <div className="title h6">Đăng nhập</div>
                    <form className="content">
                      <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="email" />
                            <label className="control-label">Email</label>
                          </div>
                          <div className="form-group label-floating is-empty">
                            <input className="form-control" placeholder="" type="password" />
                            <label className="control-label">Mật khẩu</label>
                          </div>

                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input name="optionsCheckboxes" type="checkbox" />
                                <span className="checkbox-material">
                                  <span className="check"></span>
                                </span>
                                Nhớ tài khoản
                          </label>
                            </div>
                            <a href="javascript(void)" className="forgot">Quên mật khẩu</a>
                          </div>

                          <a href="javascript(void)" className="btn btn-lg btn-primary full-width">Đăng nhập</a>

                          <div className="or"></div>

                          <a href="javascript(void)" className="btn btn-lg bg-facebook full-width btn-icon-left"><i className="fa fa-facebook" aria-hidden="true"></i>Đăng nhập với Facebook</a>

                          <a href="javascript(void)" className="btn btn-lg bg-twitter full-width btn-icon-left"><i className="fa fa-twitter" aria-hidden="true"></i>Đăng nhập với Twitter</a>

                          <p>Bạn chưa có tài khoản? <a href="javascript(void)">Đăng ký ngay!</a> nó thực sự đơn giản và bạn có thể tham gia nhiều điều bổ ích!</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login