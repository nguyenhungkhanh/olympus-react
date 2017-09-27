import React, { Component } from 'react'
import classNames from 'classnames'
import Newsfeed from './containers/pages/Newsfeed/Newsfeed.js'
import ProfileSettings from './containers/pages/ProfileSettings/ProfileSettings.js'
import Profile from './components/Profile.js'
import { Link, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {
        sidebarLeft: false,
        sidebarRight: false
      }
    }
  }
  handleChange(e) {

  }
  handleSidebar(location) {
    let isOpen = this.state.isOpen;
    location === "left" 
    ? isOpen.sidebarLeft = !isOpen.sidebarLeft
    : isOpen.sidebarRight = !isOpen.sidebarRight
    
    this.setState({isOpen})
  }
  render() {
    return (
      <div>
        <div className="profile-settings-responsive">

          <a href="#" className="js-profile-settings-open profile-settings-open">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <div className="ui-block">
              <div className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Your PROFILE</h6>
                </div>

                <div id="accordion1" role="tablist" aria-multiselectable="true">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne-1">
                      <h6 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1" aria-expanded="true" aria-controls="collapseOne">
                          Profile Settings
                          <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                        </a>
                      </h6>
                    </div>

                    <div id="collapseOne-1" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                      <ul className="your-profile-menu">
                        <li>
                          <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                        </li>
                        <li>
                          <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                        </li>
                        <li>
                          <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                        </li>
                        <li>
                          <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                        </li>
                        <li>
                          <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="ui-block-title">
                  <a href="33-YourAccount-Notifications.html" className="h6 title">Notifications</a>
                  <a href="#" className="items-round-little bg-primary">8</a>
                </div>
                <div className="ui-block-title">
                  <a href="34-YourAccount-ChatMessages.html" className="h6 title">Chat / Messages</a>
                </div>
                <div className="ui-block-title">
                  <a href="35-YourAccount-FriendsRequests.html" className="h6 title">Friend Requests</a>
                  <a href="#" className="items-round-little bg-blue">4</a>
                </div>
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FAVOURITE PAGE</h6>
                </div>
                <div className="ui-block-title">
                  <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Create Fav Page</a>
                </div>
                <div className="ui-block-title">
                  <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={ classNames("fixed-sidebar", { "open": this.state.isOpen.sidebarLeft ? true : false} ) }>
          <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
            <Link to="/" className="logo">
              <img src="img/logo.png" alt="Olympus" />
            </Link>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                <li onClick={(e) => {
                  e.preventDefault();
                  this.handleSidebar("left")}
                }>
                  <a href="" className="js-sidebar-open">
                    <svg className="olymp-menu-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="OPEN MENU">
                      <use xlinkHref="icons/icons.svg#olymp-menu-icon"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <Link to="/profile">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
            <Link to="/" className="logo">
              <img src="img/logo.png" alt="Olympus" />
              <h6 className="logo-title">olympus</h6>
            </Link>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                <li onClick={(e) => {
                  e.preventDefault()
                  this.handleSidebar("left")}
                }>
                  <a href="#" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
                    <span className="left-menu-title">Collapse Menu</span>
                  </a>
                </li>
                <li>
                  <Link to="/profile">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg> 
                    <span className="left-menu-title">Bản Tin</span>
                  </Link>
                </li>
              </ul>

              <div className="profile-completion">

                <div className="skills-item">
                  <div className="skills-item-info">
                    <span className="skills-item-title">Hoàn thiện hồ sơ</span>
                    <span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
                  </div>
                  <div className="skills-item-meter">
                    <span className="skills-item-meter-active bg-primary" style={{width: '76%'}}></span>
                  </div>
                </div>

                <span>Hoàn thiện <a href="#">hồ sơ của bạn</a> để mọi người biết nhiều hơn về bạn</span>

              </div>
            </div>
          </div>
        </div>

        {/* <!-- ... end Fixed Sidebar Left -->
    
    <!-- Fixed Sidebar Left -->  */}

        <div className="fixed-sidebar fixed-sidebar-responsive">

          <div className="fixed-sidebar-left sidebar--small" id="sidebar-left-responsive">
            <a href="#" className="logo js-sidebar-open">
              <img src="img/logo.png" alt="Olympus" />
            </a>

          </div>

          <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1-responsive">
            <a href="#" className="logo">
              <img src="img/logo.png" alt="Olympus" />
              <h6 className="logo-title">olympus</h6>
            </a>

            <div className="mCustomScrollbar" data-mcs-theme="dark">

              <div className="control-block">
                <div className="author-page author vcard inline-items">
                  <div className="author-thumb">
                    <img alt="author" src="./img/author-page.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                  <Link to="/profile" className="author-name fn">
                    <div className="author-title">
                      James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                    </div>
                    <span className="author-subtitle">SPACE COWBOY</span>
                  </Link>
                </div>
              </div>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">MAIN SECTIONS</h6>
              </div>

              <ul className="left-menu">
                <li>
                  <a href="#" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
                    <span className="left-menu-title">Thu nhỏ</span>
                  </a>
                </li>
                <li>
                  <a href="mobile-index.html">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg> 
                    <span className="left-menu-title">Newsfeed</span>
                  </a>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">YOUR ACCOUNT</h6>
              </div>

              <ul className="account-settings">
                <li>
                  <a href="#">

                    <svg className="olymp-menu-icon"><use xlinkHref="icons/icons.svg#olymp-menu-icon"></use></svg> 

                    <span>Cài đặt tài khoản</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="olymp-logout-icon"><use xlinkHref="icons/icons.svg#olymp-logout-icon"></use></svg> 

                    <span>Đăng Xuất</span>
                  </a>
                </li>
              </ul>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">About Olympus</h6>
              </div>

              <ul className="about-olympus">
                <li>
                  <a href="#">
                    <span>Terms and Conditions</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>FAQs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
{/* 
        <!-- ... end Fixed Sidebar Left -->
    
    
    <!-- Fixed Sidebar Right -->  */}

        <div className={ classNames("fixed-sidebar right", { "open": this.state.isOpen.sidebarRight ? true : false}) }>
          <div className="fixed-sidebar-right sidebar--small" id="sidebar-right">

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar67-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar62-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar68-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar69-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>
                </li>

                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar70-sm.jpg" className="avatar" />
                    <span className="icon-status disconected"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar64-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar68-sm.jpg" className="avatar" />
                    <span className="icon-status status-invisible"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>
                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>
                </li>
              </ul>
            </div>

            <div onClick={ (e) => {
              e.preventDefault()
              this.handleSidebar("right") 
              }} className="search-friend inline-items">
              <a href="#" className="js-sidebar-open">
                <svg className="olymp-menu-icon"><use xlinkHref="icons/icons.svg#olymp-menu-icon"></use></svg> 
              </a>
            </div>

            <a href="34-YourAccount-ChatMessages.html" className="olympus-chat inline-items">
              <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
            </a>

          </div>

          <div className="fixed-sidebar-right sidebar--large" id="sidebar-right-1">

            <div className="mCustomScrollbar" data-mcs-theme="dark">

              <div className="ui-block-title ui-block-title-small">
                <a href="#" className="title">Close Friends</a>
                <a href="#">Settings</a>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar67-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Carol Summers</a>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>

                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar62-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Mathilda Brinker</a>
                    <span className="status">AT WORK!</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>

                </li>

                <li className="inline-items js-chat-open">


                  <div className="author-thumb">
                    <img alt="author" src="img/avatar68-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Carol Summers</a>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>


                </li>

                <li className="inline-items js-chat-open">


                  <div className="author-thumb">
                    <img alt="author" src="img/avatar69-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Michael Maximoff</a>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>


                </li>

                <li className="inline-items js-chat-open">


                  <div className="author-thumb">
                    <img alt="author" src="img/avatar70-sm.jpg" className="avatar" />
                    <span className="icon-status disconected"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Rachel Howlett</a>
                    <span className="status">OFFLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>


                </li>
              </ul>


              <div className="ui-block-title ui-block-title-small">
                <a href="#" className="title">MY FAMILY</a>
                <a href="#">Settings</a>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar64-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Sarah Hetfield</a>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>
                </li>
              </ul>


              <div className="ui-block-title ui-block-title-small">
                <a href="#" className="title">UNCATEGORIZED</a>
                <a href="#">Settings</a>
              </div>

              <ul className="chat-users">
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Bruce Peterson</a>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>


                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Chris Greyson</a>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>

                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar68-sm.jpg" className="avatar" />
                    <span className="icon-status status-invisible"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Nicholas Grisom</a>
                    <span className="status">INVISIBLE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>
                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar72-sm.jpg" className="avatar" />
                    <span className="icon-status away"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Chris Greyson</a>
                    <span className="status">AWAY</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>
                </li>
                <li className="inline-items js-chat-open">

                  <div className="author-thumb">
                    <img alt="author" src="img/avatar71-sm.jpg" className="avatar" />
                    <span className="icon-status online"></span>
                  </div>

                  <div className="author-status">
                    <a href="#" className="h6 author-name">Bruce Peterson</a>
                    <span className="status">ONLINE</span>
                  </div>

                  <div className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 

                    <ul className="more-icons">
                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="START CONVERSATION" className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="ADD TO CONVERSATION" className="olymp-add-to-conversation-icon"><use xlinkHref="icons/icons.svg#olymp-add-to-conversation-icon"></use></svg> 
                      </li>

                      <li>
                        <svg data-toggle="tooltip" data-placement="top" data-original-title="BLOCK FROM CHAT" className="olymp-block-from-chat-icon"><use xlinkHref="icons/icons.svg#olymp-block-from-chat-icon"></use></svg> 
                      </li>
                    </ul>

                  </div>
                </li>
              </ul>

            </div>

            <div className="search-friend inline-items">
              <form className="form-group">
                <input onChange={ this.handleChange.bind(this) } className="form-control" placeholder="Search Friends..." value="" type="text" />
              </form>

              <a href="29-YourAccount-AccountSettings.html" className="settings">
                <svg className="olymp-settings-icon"><use xlinkHref="icons/icons.svg#olymp-settings-icon"></use></svg> 
              </a>

              <a onClick={ (e) => {
                e.preventDefault()
                this.handleSidebar("right") 
              }} href="#" className="js-sidebar-open" >
                <svg className="olymp-close-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
              </a>


            </div>

            <a href="34-YourAccount-ChatMessages.html" className="olympus-chat inline-items">

              <h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
              <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
            </a>

          </div>
        </div>
{/*             
    <!-- ... end Fixed Sidebar Right -->
    
    <!-- Fixed Sidebar Right -->  */}

        <div className="fixed-sidebar right fixed-sidebar-responsive">

          <div className="fixed-sidebar-right sidebar--small" id="sidebar-right-responsive">

            <a href="#" className="olympus-chat inline-items js-chat-open">
              <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
            </a>

          </div>

        </div>
{/*             
    <!-- ... end Fixed Sidebar Right -->
    
    
    <!-- Header -->  */}

        <header className="header" id="site-header">

          <div className="page-title">
            <h6>Newsfeed</h6>
          </div>

          <div className="header-content-wrapper">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input onChange={ this.handleChange.bind(this) } className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
                <button>
                  <svg className="olymp-magnifying-glass-icon"><use xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon"></use></svg> 
                </button>
              </div>
            </form>

            <a href="#" className="link-find-friend">Find Friends</a>

            <div className="control-block">

              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                <div className="label-avatar bg-blue">6</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FRIEND REQUESTS</h6>
                    <a href="#">Find Friends</a>
                    <a href="#">Settings</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list friend-requests">
                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar68-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                          <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar56-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Tony Stevens</a>
                          <span className="chat-message-item">4 Friends in Common</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>

                      <li className="accepted">
                        <div className="author-thumb">
                          <img src="img/avatar57-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">her wall</a>.
                    </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar58-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                          <span className="chat-message-item">9 Friends in Common</span>
                        </div>
                        <span className="notification-icon">
                          <a href="#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                          <a href="#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                            </span>
                          </a>

                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>

                    </ul>
                  </div>

                  <a href="#" className="view-all bg-blue">Check all your Events</a>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                <div className="label-avatar bg-purple">2</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat / Messages</h6>
                    <a href="#">Mark all as read</a>
                    <a href="#">Settings</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list chat-message">
                      <li className="message-unread">
                        <div className="author-thumb">
                          <img src="img/avatar68-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Diana Jameson</a>
                          <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar60-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Jake Parker</a>
                          <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar61-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
                          <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>

                      <li className="chat-group">
                        <div className="author-thumb">
                          <img src="img/avatar11-sm.jpg" alt="author" />
                          <img src="img/avatar12-sm.jpg" alt="author" />
                          <img src="img/avatar13-sm.jpg" alt="author" />
                          <img src="img/avatar10-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                          <span className="last-message-author">Ed:</span>
                          <span className="chat-message-item">Yeah! Seems fine by me!</span>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="view-all bg-purple">View All Messages</a>
                </div>
              </div>

              <div className="control-icon more has-items">
                <svg className="olymp-thunder-icon"><use xlinkHref="icons/icons.svg#olymp-thunder-icon"></use></svg> 

                <div className="label-avatar bg-primary">8</div>

                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <a href="#">Mark all as read</a>
                    <a href="#">Settings</a>
                  </div>

                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list">
                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar62-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>

                      <li className="un-read">
                        <div className="author-thumb">
                          <img src="img/avatar68-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div>You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>

                      <li className="with-comment-photo">
                        <div className="author-thumb">
                          <img src="img/avatar64-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                        </span>

                        <div className="comment-photo">
                          <img src="img/comment-photo1.jpg" alt="photo" />
                          <span>“She looks incredible in that outfit! We should see each...”</span>
                        </div>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar65-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>

                      <li>
                        <div className="author-thumb">
                          <img src="img/avatar66-sm.jpg" alt="author" />
                        </div>
                        <div className="notification-event">
                          <div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                          <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        </span>

                        <div className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                          <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                        </div>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="view-all bg-primary">View All Notifications</a>
                </div>
              </div>

              <div className="author-page author vcard inline-items more">
                <div className="author-thumb">
                  <img alt="author" src="img/author-page.jpg" className="avatar" />
                  <span className="icon-status online"></span>
                  <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Your Account</h6>
                      </div>

                      <ul className="account-settings">
                        <li>
                          <Link to="/profile-settings">
                            <svg className="olymp-menu-icon"><use xlinkHref="icons/icons.svg#olymp-menu-icon"></use></svg> 
                            <span>Cài đặt tài khoản</span>
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            <svg className="olymp-logout-icon"><use xlinkHref="icons/icons.svg#olymp-logout-icon"></use></svg> 
                            <span>Đăng Xuất</span>
                          </a>
                        </li>
                      </ul>

                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">About Olympus</h6>
                      </div>

                      <ul>
                        <li>
                          <a href="#">
                            <span>Terms and Conditions</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>FAQs</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Careers</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <Link to="/profile" className="author-name fn">
                  <div className="author-title">
                    James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                  </div>
                  <span className="author-subtitle">SPACE COWBOY</span>
                </Link>
              </div>

            </div>
          </div>

        </header>

        {/* <!-- ... end Header -->
    
    
    <!-- Responsive Header -->  */}

        <header className="header header-responsive" id="site-header-responsive">

          <div className="header-content-wrapper">
            <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#request" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                    <div className="label-avatar bg-blue">6</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                    <div className="label-avatar bg-purple">2</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#notification" role="tab">
                  <div className="control-icon has-items">
                    <svg className="olymp-thunder-icon"><use xlinkHref="icons/icons.svg#olymp-thunder-icon"></use></svg> 
                    <div className="label-avatar bg-primary">8</div>
                  </div>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#search" role="tab">
                  <svg className="olymp-magnifying-glass-icon"><use xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon"></use></svg> 
                  <svg className="olymp-close-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Tab panes -->  */}
          <div className="tab-content tab-content-responsive">

            <div className="tab-pane " id="request" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FRIEND REQUESTS</h6>
                  <a href="#">Find Friends</a>
                  <a href="#">Settings</a>
                </div>
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar68-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Tamara Romanoff</a>
                      <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar56-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Tony Stevens</a>
                      <span className="chat-message-item">4 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>
                  <li className="accepted">
                    <div className="author-thumb">
                      <img src="img/avatar57-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      You and <a href="#" className="h6 notification-friend">Mary Jane Stark</a> just became friends. Write on <a href="#" className="notification-link">her wall</a>.
                </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar58-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Stagg Clothing</a>
                      <span className="chat-message-item">9 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                      <a href="#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>

                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>
                </ul>
                <a href="#" className="view-all bg-blue">Check all your Events</a>
              </div>

            </div>

            <div className="tab-pane " id="chat" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <ul className="notification-list chat-message">
                  <li className="message-unread">
                    <div className="author-thumb">
                      <img src="img/avatar68-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Diana Jameson</a>
                      <span className="chat-message-item">Hi James! It’s Diana, I just wanted to let you know that we have to reschedule...</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar60-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Jake Parker</a>
                      <span className="chat-message-item">Great, I’ll see you tomorrow!.</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar61-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Elaine Dreyfuss</a>
                      <span className="chat-message-item">We’ll have to check that at the office and see if the client is on board with...</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 9:56pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>

                  <li className="chat-group">
                    <div className="author-thumb">
                      <img src="img/avatar11-sm.jpg" alt="author" />
                      <img src="img/avatar12-sm.jpg" alt="author" />
                      <img src="img/avatar13-sm.jpg" alt="author" />
                      <img src="img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">You, Faye, Ed &amp; Jet +3</a>
                      <span className="last-message-author">Ed:</span>
                      <span className="chat-message-item">Yeah! Seems fine by me!</span>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 16th at 10:23am</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg> 
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </div>
                  </li>
                </ul>

                <a href="#" className="view-all bg-purple">View All Messages</a>
              </div>

            </div>

            <div className="tab-pane " id="notification" role="tabpanel">

              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>

                <ul className="notification-list">
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar62-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Mathilda Brinker</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>

                  <li className="un-read">
                    <div className="author-thumb">
                      <img src="img/avatar68-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div>You and <a href="#" className="h6 notification-friend">Nicholas Grissom</a> just became friends. Write on <a href="#" className="notification-link">his wall</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>

                  <li className="with-comment-photo">
                    <div className="author-thumb">
                      <img src="img/avatar64-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Sarah Hetfield</a> commented on your <a href="#" className="notification-link">photo</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">Yesterday at 5:32am</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                    </span>

                    <div className="comment-photo">
                      <img src="img/comment-photo1.jpg" alt="photo" />
                      <span>“She looks incredible in that outfit! We should see each...”</span>
                    </div>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar65-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">Green Goo Rock</a> invited you to attend to his event Goo in <a href="#" className="notification-link">Gotham Bar</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar66-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <div><a href="#" className="h6 notification-friend">James Summers</a> commented on your new <a href="#" className="notification-link">profile status</a>.</div>
                      <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                    </span>

                    <div className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                      <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg> 
                    </div>
                  </li>
                </ul>

                <a href="#" className="view-all bg-primary">View All Notifications</a>
              </div>

            </div>

            <div className="tab-pane " id="search" role="tabpanel">


              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input onChange={ this.handleChange.bind(this) } className="form-control js-user-search" placeholder="Search here people or pages..." type="text" />
                </div>
              </form>


            </div>

          </div>
          {/* <!-- ... end  Tab panes -->  */}

        </header>

        {/* <!-- ... end Responsive Header -->  */}

        <div className={ classNames("header-spacer", { "header-spacer-small": this.state.urlRoute === "/profile-settings" ? true : false })} ></div>

        <Switch>
          <Route exact path="/" component={Newsfeed} />
          <Route path="/profile-settings" component={ProfileSettings} />
          <Route path="/profile" component={Profile} />
        </Switch>
      
        {/* Route ở đây */}


        {/* <!-- Window-popup Update Header Photo -->  */}

        <div className="modal fade" id="update-header-photo">
          <div className="modal-dialog ui-block window-popup update-header-photo">
            <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
              <svg className="olymp-close-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
            </a>

            <div className="ui-block-title">
              <h6 className="title">Update Header Photo</h6>
            </div>

            <a href="#" className="upload-photo-item">
              <svg className="olymp-computer-icon"><use xlinkHref="icons/icons.svg#olymp-computer-icon"></use></svg> 

              <h6>Upload Photo</h6>
              <span>Browse your computer.</span>
            </a>

            <a href="#" className="upload-photo-item" data-toggle="modal" data-target="#choose-from-my-photo">

              <svg className="olymp-photos-icon"><use xlinkHref="icons/icons.svg#olymp-photos-icon"></use></svg> 

              <h6>Choose from My Photos</h6>
              <span>Choose from your uploaded photos</span>
            </a>
          </div>
        </div>


        {/* <!-- ... end Window-popup Update Header Photo -->  */}


        {/* <!-- Window-popup Choose from my Photo -->  */}
        <div className="modal fade" id="choose-from-my-photo">
          <div className="modal-dialog ui-block window-popup choose-from-my-photo">
            <a href="#" className="close icon-close" data-dismiss="modal" aria-label="Close">
              <svg className="olymp-close-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
            </a>

            <div className="ui-block-title">
              <h6 className="title">Choose from My Photos</h6>

              {/* <!-- Nav tabs -->  */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                    <svg className="olymp-photos-icon"><use xlinkHref="icons/icons.svg#olymp-photos-icon"></use></svg> 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                    <svg className="olymp-albums-icon"><use xlinkHref="icons/icons.svg#olymp-albums-icon"></use></svg> 
                  </a>
                </li>
              </ul>
            </div>


            <div className="ui-block-content">
              {/* <!-- Tab panes -->  */}
              <div className="tab-content">
                <div className="tab-pane active" id="home" role="tabpanel" aria-expanded="true">

                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo1.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo2.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo3.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>

                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo4.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo5.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo6.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>

                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo7.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo8.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <div className="radio">
                      <label className="custom-radio">
                        <img src="img/choose-photo9.jpg" alt="photo" />
                        <input onChange={ this.handleChange.bind(this) } type="radio" name="optionsRadios" />
                      </label>
                    </div>
                  </div>


                  <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                  <a href="#" className="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>

                </div>
                <div className="tab-pane" id="profile" role="tabpanel" aria-expanded="false">

                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo10.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">South America Vacations</a>
                        <span>Last Added: 2 hours ago</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo11.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">Photoshoot Summer 2016</a>
                        <span>Last Added: 5 weeks ago</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo12.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">Amazing Street Food</a>
                        <span>Last Added: 6 mins ago</span>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo13.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">Graffity & Street Art</a>
                        <span>Last Added: 16 hours ago</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo14.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">Amazing Landscapes</a>
                        <span>Last Added: 13 mins ago</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="choose-photo-item" data-mh="choose-item">
                    <figure>
                      <img src="img/choose-photo15.jpg" alt="photo" />
                      <figcaption>
                        <a href="#">The Majestic Canyon</a>
                        <span>Last Added: 57 mins ago</span>
                      </figcaption>
                    </figure>
                  </div>


                  <a href="#" className="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                  <a href="#" className="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- ... end Window-popup Choose from my Photo --> 

        <!-- Window-popup-CHAT for responsive min-width: 768px -->  */}

        <div className="ui-block popup-chat popup-chat-responsive">
          <div className="ui-block-title">
            <span className="icon-status online"></span>
            <h6 className="title" >Chat</h6>
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

export default App
