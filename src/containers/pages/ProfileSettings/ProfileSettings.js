import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ProfileSetting from '../../../components/ProfileSetting/index.js'

class ProfileSettings extends Component {
  constructor() {
    super()
    this.state = {
      index: ""
    }
  }
  handleSetIndex(index) {
    this.setState({ index })
  }
  render() {
    return (
      <div>
        <div className="main-header">
          <div className="content-bg-wrap">
            <div className="content-bg bg-account"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 col-xs-12">
                <div className="main-header-content">
                  <h1>Your Account Dashboard</h1>
                  <p>Welcome to your account dashboard! Here you’ll find everything you need to change your
                profile information, settings, read notifications and requests, view your latest messages,
                change your pasword and much more! Also you can create or manage your own favourite page, have fun!
              </p>
                </div>
              </div>
            </div>
          </div>

          <img className="img-bottom" src="img/account-bottom.png" alt="friends" />
        </div>

        {/*  <!-- ... end Main Header Your Account -->
        <!-- Your Account Personal Information --> */}

        <div className="container">
          <div className="row">
            <div className="col-xl-9 push-xl-3 col-lg-9 push-lg-3 col-md-12 col-sm-12 col-xs-12">
              { ProfileSetting(this.state.index) }
            </div>

            <div className="col-xl-3 pull-xl-9 col-lg-3 pull-lg-9 col-md-12 col-sm-12 col-xs-12 responsive-display-none">
              <div className="ui-block">
                <div className="your-profile">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Tài khoản của bạn</h6>
                  </div>

                  <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h6 className="mb-0">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Thiết lập tài khoản
                        <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                          </a>
                        </h6>
                      </div>

                      <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                        <ul className="your-profile-menu">
                          <li onClick={ () => this.handleSetIndex("") } >
                            <Link to="/profile-settings">Thông tin cá nhân</Link>
                          </li>
                          <li onClick={ () => this.handleSetIndex("account") }>
                            <Link onClick={ (e) => e.preventDefault() } to="#">Cài đặt tài khoản</Link>
                          </li>
                          <li onClick={ () => this.handleSetIndex("password") }>
                            <Link onClick={ (e) => e.preventDefault() } to="#">Đổi mật khẩu</Link>
                          </li>
                          <li onClick={ () => this.handleSetIndex("hobbies") }>
                            <Link onClick={ (e) => e.preventDefault() } to="#">Sở thích</Link>
                          </li>
                          <li>
                            <a href="32-YourAccount-EducationAndEmployement.html">Trình độ, bằng cấp</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*     
    <!-- ... end Your Account Personal Information -->
    
    
    <!-- Window-popup-CHAT for responsive min-width: 768px --> */}

        <div className="ui-block popup-chat popup-chat-responsive">
          <div className="ui-block-title">
            <span className="icon-status online"></span>
            <h6 className="title">Chat</h6>
            <div className="more">
              <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg>
              <svg className="olymp-little-delete js-chat-open"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg>
            </div>
          </div>
          <div className="mCustomScrollbar">
            <ul className="notification-list chat-message chat-message-field">
              <li>
                <div className="author-thumb">
                  <img src="img/avatar14-sm.jpg" alt="author" className="mCS_img_loaded" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/author-page.jpg" alt="author" className="mCS_img_loaded" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">Don’t worry Mathilda!</span>
                  <span className="chat-message-item">I already bought everything</span>
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:29pm</time></span>
                </div>
              </li>

              <li>
                <div className="author-thumb">
                  <img src="img/avatar14-sm.jpg" alt="author" className="mCS_img_loaded" />
                </div>
                <div className="notification-event">
                  <span className="chat-message-item">Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 8:10pm</time></span>
                </div>
              </li>
            </ul>
          </div>

          <form>

            <div className="form-group label-floating is-empty">
              <label className="control-label">Press enter to post...</label>
              <textarea className="form-control" placeholder=""></textarea>
              <div className="add-options-message">
                <a href="#" className="options-message">
                  <svg className="olymp-computer-icon"><use xlinkHref="icons/icons.svg#olymp-computer-icon"></use></svg>
                </a>
                <div className="options-message smile-block">

                  <svg className="olymp-happy-sticker-icon"><use xlinkHref="icons/icons.svg#olymp-happy-sticker-icon"></use></svg>

                  <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                    <li>
                      <a href="#">
                        <img src="img/icon-chat1.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat2.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat3.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat4.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat5.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat6.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat7.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat8.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat9.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat10.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat11.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat12.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat13.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat14.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat15.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat16.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat17.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat18.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat19.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat20.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat21.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat22.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat23.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat24.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat25.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat26.png" alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon-chat27.png" alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="material-input"></span></div>

          </form>


        </div>
      </div>
    )
  }
}

export default ProfileSettings