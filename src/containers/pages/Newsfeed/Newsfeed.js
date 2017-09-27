import React, { Component } from 'react'
import classNames from 'classnames'
import './css/calendar.css';
import './js/customs.js'
import './js/calendar.js'
import './css/customs.css'

class Newsfeed extends Component {
  constructor() {
    super();
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
    console.log(location)
    let isOpen = this.state.isOpen;
    location === "left" 
    ? isOpen.sidebarLeft = !isOpen.sidebarLeft
    : isOpen.sidebarRight = !isOpen.sidebarRight
    
    this.setState({isOpen})
  }
  render() {
    return (
      <div>
        <div className={ classNames("fixed-sidebar", { "open": this.state.isOpen.sidebarLeft ? true : false} ) }>
          <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
            <a href="02-ProfilePage.html" className="logo">
              <img src="img/logo.png" alt="Olympus" />
            </a>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                <li onClick={() => this.handleSidebar("left")}>
                  <a href="#" className="js-sidebar-open">
                    <svg className="olymp-menu-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="OPEN MENU">
                      <use xlinkHref="icons/icons.svg#olymp-menu-icon"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="03-Newsfeed.html">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="16-FavPagesFeed.html">
                    <svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="17-FriendGroups.html">
                    <svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="icons/icons.svg#olymp-happy-faces-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="18-MusicAndPlaylists.html">
                    <svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="icons/icons.svg#olymp-headphones-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="19-WeatherWidget.html">
                    <svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="icons/icons.svg#olymp-weather-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                    <svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="icons/icons.svg#olymp-calendar-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="icons/icons.svg#olymp-badge-icon"></use></svg>
                  </a>
                </li>
                <li>
                  <a href="25-FriendsBirthday.html">
                    <svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="icons/icons.svg#olymp-cupcake-icon"></use></svg> 
                  </a>
                </li>
                <li>
                  <a href="26-Statistics.html">
                    <svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="icons/icons.svg#olymp-stats-icon"></use></svg> 
                  </a>
                </li>
                <li>
                  <a href="27-ManageWidgets.html">
                    <svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="icons/icons.svg#olymp-manage-widgets-icon"></use></svg> 
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
            <a href="02-ProfilePage.html" className="logo">
              <img src="img/logo.png" alt="Olympus" />
              <h6 className="logo-title">olympus</h6>
            </a>

            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="left-menu">
                <li onClick={() => this.handleSidebar("left")}>
                  <a href="#" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
                    <span className="left-menu-title">Collapse Menu</span>
                  </a>
                </li>
                <li>
                  <a href="03-Newsfeed.html">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg> 
                    <span className="left-menu-title">Newsfeed</span>
                  </a>
                </li>
                <li>
                  <a href="16-FavPagesFeed.html">
                    <svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                    <span className="left-menu-title">Fav Pages Feed</span>
                  </a>
                </li>
                <li>
                  <a href="17-FriendGroups.html">
                    <svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="icons/icons.svg#olymp-happy-faces-icon"></use></svg> 
                    <span className="left-menu-title">Friend Groups</span>
                  </a>
                </li>
                <li>
                  <a href="18-MusicAndPlaylists.html">
                    <svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="icons/icons.svg#olymp-headphones-icon"></use></svg> 
                    <span className="left-menu-title">Music & Playlists</span>
                  </a>
                </li>
                <li>
                  <a href="19-WeatherWidget.html">
                    <svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="icons/icons.svg#olymp-weather-icon"></use></svg> 
                    <span className="left-menu-title">Weather App</span>
                  </a>
                </li>
                <li>
                  <a href="20-CalendarAndEvents-MonthlyCalendar.html">
                    <svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="icons/icons.svg#olymp-calendar-icon"></use></svg> 
                    <span className="left-menu-title">Calendar and Events</span>
                  </a>
                </li>
                <li>
                  <a href="24-CommunityBadges.html">
                    <svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="icons/icons.svg#olymp-badge-icon"></use></svg> 
                    <span className="left-menu-title">Community Badges</span>
                  </a>
                </li>
                <li>
                  <a href="25-FriendsBirthday.html">
                    <svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="icons/icons.svg#olymp-cupcake-icon"></use></svg> 
                    <span className="left-menu-title">Friends Birthdays</span>
                  </a>
                </li>
                <li>
                  <a href="26-Statistics.html">
                    <svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="icons/icons.svg#olymp-stats-icon"></use></svg> 
                    <span className="left-menu-title">Account Stats</span>
                  </a>
                </li>
                <li>
                  <a href="27-ManageWidgets.html">
                    <svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="icons/icons.svg#olymp-manage-widgets-icon"></use></svg> 
                    <span className="left-menu-title">Manage Widgets</span>
                  </a>
                </li>
              </ul>

              <div className="profile-completion">

                <div className="skills-item">
                  <div className="skills-item-info">
                    <span className="skills-item-title">Profile Completion</span>
                    <span className="skills-item-count"><span className="count-animate" data-speed="1000" data-refresh-interval="50" data-to="76" data-from="0"></span><span className="units">76%</span></span>
                  </div>
                  <div className="skills-item-meter">
                    <span className="skills-item-meter-active bg-primary" style={{width: '76%'}}></span>
                  </div>
                </div>

                <span>Complete <a href="#">your profile</a> so people can know more about you!</span>

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
                  <a href="02-ProfilePage.html" className="author-name fn">
                    <div className="author-title">
                      James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                    </div>
                    <span className="author-subtitle">SPACE COWBOY</span>
                  </a>
                </div>
              </div>

              <div className="ui-block-title ui-block-title-small">
                <h6 className="title">MAIN SECTIONS</h6>
              </div>

              <ul className="left-menu">
                <li>
                  <a href="#" className="js-sidebar-open">
                    <svg className="olymp-close-icon left-menu-icon"><use xlinkHref="icons/icons.svg#olymp-close-icon"></use></svg> 
                    <span className="left-menu-title">Collapse Menu</span>
                  </a>
                </li>
                <li>
                  <a href="mobile-index.html">
                    <svg className="olymp-newsfeed-icon left-menu-icon" data-toggle="tooltip" data-placement="right"   data-original-title="NEWSFEED"><use xlinkHref="icons/icons.svg#olymp-newsfeed-icon"></use></svg> 
                    <span className="left-menu-title">Newsfeed</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-28-YourAccount-PersonalInformation.html">
                    <svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                    <span className="left-menu-title">Fav Pages Feed</span>
                  </a>
                </li>
                <li>
                  <a href="mobile-29-YourAccount-AccountSettings.html">
                    <svg className="olymp-happy-faces-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FRIEND GROUPS"><use xlinkHref="icons/icons.svg#olymp-happy-faces-icon"></use></svg> 
                    <span className="left-menu-title">Friend Groups</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-30-YourAccount-ChangePassword.html">
                    <svg className="olymp-headphones-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="MUSIC&PLAYLISTS"><use xlinkHref="icons/icons.svg#olymp-headphones-icon"></use></svg> 
                    <span className="left-menu-title">Music & Playlists</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-31-YourAccount-HobbiesAndInterests.html">
                    <svg className="olymp-weather-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="WEATHER APP"><use xlinkHref="icons/icons.svg#olymp-weather-icon"></use></svg> 
                    <span className="left-menu-title">Weather App</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-32-YourAccount-EducationAndEmployement.html">
                    <svg className="olymp-calendar-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="CALENDAR AND EVENTS"><use xlinkHref="icons/icons.svg#olymp-calendar-icon"></use></svg> 
                    <span className="left-menu-title">Calendar and Events</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-33-YourAccount-Notifications.html">
                    <svg className="olymp-badge-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Community Badges"><use xlinkHref="icons/icons.svg#olymp-badge-icon"></use></svg> 
                    <span className="left-menu-title">Community Badges</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-34-YourAccount-ChatMessages.html">
                    <svg className="olymp-cupcake-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Friends Birthdays"><use xlinkHref="icons/icons.svg#olymp-cupcake-icon"></use></svg> 
                    <span className="left-menu-title">Friends Birthdays</span>
                  </a>
                </li>
                <li>
                  <a href="Mobile-35-YourAccount-FriendsRequests.html">
                    <svg className="olymp-stats-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Account Stats"><use xlinkHref="icons/icons.svg#olymp-stats-icon"></use></svg> 
                    <span className="left-menu-title">Account Stats</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="olymp-manage-widgets-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="Manage Widgets"><use xlinkHref="icons/icons.svg#olymp-manage-widgets-icon"></use></svg> 
                    <span className="left-menu-title">Manage Widgets</span>
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

                    <span>Profile Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 

                    <span>Create Fav Page</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg className="olymp-logout-icon"><use xlinkHref="icons/icons.svg#olymp-logout-icon"></use></svg> 

                    <span>Log Out</span>
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

            <div onClick={ () => this.handleSidebar("right") } className="search-friend inline-items">
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

              <a onClick={ () => this.handleSidebar("right") } href="#" className="js-sidebar-open" >
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
                          <a href="29-YourAccount-AccountSettings.html">

                            <svg className="olymp-menu-icon"><use xlinkHref="icons/icons.svg#olymp-menu-icon"></use></svg> 

                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="36-FavPage-SettingsAndCreatePopup.html">
                            <svg className="olymp-star-icon left-menu-icon"  data-toggle="tooltip" data-placement="right"   data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 

                            <span>Create Fav Page</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg className="olymp-logout-icon"><use xlinkHref="icons/icons.svg#olymp-logout-icon"></use></svg> 

                            <span>Log Out</span>
                          </a>
                        </li>
                      </ul>

                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Chat Settings</h6>
                      </div>

                      <ul className="chat-settings">
                        <li>
                          <a href="#">
                            <span className="icon-status online"></span>
                            <span>Online</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-status away"></span>
                            <span>Away</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="icon-status disconected"></span>
                            <span>Disconnected</span>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <span className="icon-status status-invisible"></span>
                            <span>Invisible</span>
                          </a>
                        </li>
                      </ul>

                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Custom Status</h6>
                      </div>

                      <form className="form-group with-button custom-status">
                        <input onChange={ this.handleChange.bind(this) } className="form-control" placeholder="" type="text" value="Space Cowboy" />

                        <button className="bg-purple">
                          <svg className="olymp-check-icon"><use xlinkHref="icons/icons.svg#olymp-check-icon"></use></svg> 
                        </button>
                      </form>

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
                <a href="02-ProfilePage.html" className="author-name fn">
                  <div className="author-title">
                    James Spiegel <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                  </div>
                  <span className="author-subtitle">SPACE COWBOY</span>
                </a>
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

        <div className="header-spacer"></div>


        <div className="container">
          <div className="row">

            {/* <!-- Main Content -->  */}

            <main className="col-xl-6 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">

              <div className="ui-block">
                <div className="news-feed-form">
                  {/* <!-- Nav tabs -->  */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">

                        <svg className="olymp-status-icon"><use xlinkHref="icons/icons.svg#olymp-status-icon"></use></svg> 

                        <span>Status</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link inline-items" data-toggle="tab" href="#profile-1" role="tab" aria-expanded="false">

                        <svg className="olymp-multimedia-icon"><use xlinkHref="icons/icons.svg#olymp-multimedia-icon"></use></svg> 

                        <span>Multimedia</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link inline-items" data-toggle="tab" href="#blog" role="tab" aria-expanded="false">
                        <svg className="olymp-blog-icon"><use xlinkHref="icons/icons.svg#olymp-blog-icon"></use></svg> 

                        <span>Blog Post</span>
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Tab panes -->  */}
                  <div className="tab-content">
                    <div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
                      <form>
                        <div className="author-thumb">
                          <img src="img/author-page.jpg" alt="author" />
                        </div>
                        <div className="form-group with-icon label-floating is-empty">
                          <textarea className="form-control" placeholder=""></textarea>
                          <label className="control-label">Chia sẻ những gì bạn đang nghĩ !!!</label>
                        </div>
                        <div className="add-options-message">
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="icons/icons.svg#olymp-camera-icon"></use></svg> 
                          </a>
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="icons/icons.svg#olymp-computer-icon"></use></svg> 
                          </a>

                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="icons/icons.svg#olymp-small-pin-icon"></use></svg> 
                          </a>

                          <button className="btn btn-primary btn-md-2">Post Status</button>
                          <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>

                        </div>

                      </form>
                    </div>

                    <div className="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
                      <form>
                        <div className="author-thumb">
                          <img src="img/author-page.jpg" alt="author" />
                        </div>
                        <div className="form-group with-icon label-floating is-empty">
                          <label className="control-label">Chia sẻ những gì bạn đang nghĩ !!!</label>
                          <textarea className="form-control" placeholder=""  ></textarea>
                        </div>
                        <div className="add-options-message">
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="icons/icons.svg#olymp-camera-icon"></use></svg> 
                          </a>
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="icons/icons.svg#olymp-computer-icon"></use></svg> 
                          </a>

                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="icons/icons.svg#olymp-small-pin-icon"></use></svg> 
                          </a>

                          <button className="btn btn-primary btn-md-2">Post Status</button>
                          <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>

                        </div>

                      </form>
                    </div>

                    <div className="tab-pane" id="blog" role="tabpanel" aria-expanded="true">
                      <form>
                        <div className="author-thumb">
                          <img src="img/author-page.jpg" alt="author" />
                        </div>
                        <div className="form-group with-icon label-floating is-empty">
                          <label className="control-label">Chia sẻ những gì bạn đang nghĩ !!!</label>
                          <textarea className="form-control" placeholder=""  ></textarea>
                        </div>
                        <div className="add-options-message">
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD PHOTOS">
                            <svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="icons/icons.svg#olymp-camera-icon"></use></svg> 
                          </a>
                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="TAG YOUR FRIENDS">
                            <svg className="olymp-computer-icon"><use xlinkHref="icons/icons.svg#olymp-computer-icon"></use></svg> 
                          </a>

                          <a href="#" className="options-message" data-toggle="tooltip" data-placement="top" data-original-title="ADD LOCATION">
                            <svg className="olymp-small-pin-icon"><use xlinkHref="icons/icons.svg#olymp-small-pin-icon"></use></svg> 
                          </a>

                          <button className="btn btn-primary btn-md-2">Post Status</button>
                          <button className="btn btn-md-2 btn-border-think btn-transparent c-grey">Preview</button>

                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div id="newsfeed-items-grid">

                <div className="ui-block">
                  <article className="hentry post video">

                    <div className="post__author author vcard inline-items">
                      <img src="img/avatar7-sm.jpg" alt="author" />

                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Marina Valentine</a> shared a <a href="#">link</a>
                        <div className="post__date">
                          <time className="published" dateTime="2004-07-24T18:18">
                            March 4 at 2:05pm
                      </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <p>Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!</p>

                    <div className="post-video">
                      <div className="video-thumb">
                        <img src="img/video-youtube1.jpg" alt="photo" />
                        <a href="https://youtube.com/watch?v=excVFQ2TWig" className="play-video">
                          <svg className="olymp-play-icon"><use xlinkHref="icons/icons.svg#olymp-play-icon"></use></svg> 
                        </a>
                      </div>

                      <div className="video-content">
                        <a href="#" className="h4 title">Iron Maid - ChillGroves</a>
                        <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua...
                    </p>
                        <a href="#" className="link-site">YOUTUBE.COM</a>
                      </div>
                    </div>

                    <div className="post-additional-info inline-items">

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>18</span>
                      </a>

                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>

                      <div className="names-people-likes">
                        <a href="#">Jenny</a>, <a href="#">Robert</a> and
                    <br />18 more liked this
                  </div>

                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg> 

                          <span>0</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 

                          <span>16</span>
                        </a>
                      </div>


                    </div>

                    <div className="control-block-button post-control-button">

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon"><use xlinkHref="icons/icons.svg#olymp-like-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                      </a>

                    </div>

                  </article>
                </div>

                <div className="ui-block">
                  <article className="hentry post">

                    <div className="post__author author vcard inline-items">
                      <img src="img/avatar10-sm.jpg" alt="author" />

                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                        <div className="post__date">
                          <time className="published" dateTime="2004-07-24T18:18">
                            9 hours ago
                      </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
                </p>

                    <div className="post-additional-info inline-items">

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>24</span>
                      </a>

                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>

                      <div className="names-people-likes">
                        <a href="#">You</a>, <a href="#">Elaine</a> and
                    <br />22 more liked this
                  </div>


                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg> 
                          <span>17</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                          <span>24</span>
                        </a>
                      </div>


                    </div>

                    <div className="control-block-button post-control-button">

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon"><use xlinkHref="icons/icons.svg#olymp-like-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                      </a>

                    </div>

                  </article>

                  <ul className="comments-list">
                    <li>
                      <div className="post__author author vcard inline-items">
                        <img src="img/author-page.jpg" alt="author" />

                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                          <div className="post__date">
                            <time className="published" dateTime="2004-07-24T18:18">
                              38 mins ago
                        </time>
                          </div>
                        </div>

                        <a href="#" className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </a>

                      </div>

                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>3</span>
                      </a>
                      <a href="#" className="reply">Reply</a>
                    </li>
                    <li>
                      <div className="post__author author vcard inline-items">
                        <img src="img/avatar1-sm.jpg" alt="author" />

                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="#">Mathilda Brinker</a>
                          <div className="post__date">
                            <time className="published" dateTime="2004-07-24T18:18">
                              1 hour ago
                        </time>
                          </div>
                        </div>

                        <a href="#" className="more">
                          <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        </a>

                      </div>

                      <p>Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  </p>

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>8</span>
                      </a>
                      <a href="#" className="reply">Reply</a>
                    </li>
                  </ul>

                  <a href="#" className="more-comments">View more comments <span>+</span></a>

                  <form className="comment-form inline-items">

                    <div className="post__author author vcard inline-items">
                      <img src="img/author-page.jpg" alt="author" />
                    </div>

                    <div className="form-group with-icon-right ">
                      <textarea className="form-control" placeholder=""  ></textarea>
                      <div className="add-options-message">
                        <a href="#" className="options-message" data-toggle="modal" data-target="#update-header-photo">
                          <svg className="olymp-camera-icon"><use xlinkHref="icons/icons.svg#olymp-camera-icon"></use></svg> 
                        </a>
                      </div>

                      <span className="material-input"></span><span className="material-input"></span></div>

                  </form>

                </div>

                <div className="ui-block">
                  <article className="hentry post has-post-thumbnail">

                    <div className="post__author author vcard inline-items">
                      <img src="img/avatar5-sm.jpg" alt="author" />

                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Green Goo Rock</a>
                        <div className="post__date">
                          <time className="published" dateTime="2004-07-24T18:18">
                            March 8 at 6:42pm
                      </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <p>Hey guys! We are gona be playing this Saturday of <a href="#">The Marina Bar</a> for their new Mystic Deer Party.
                  If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!
                </p>

                    <div className="post-thumb">
                      <img src="img/post__thumb1.jpg" alt="photo" />
                    </div>

                    <div className="post-additional-info inline-items">

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>49</span>
                      </a>

                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>

                      <div className="names-people-likes">
                        <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br />47 more liked this
                  </div>


                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg> 
                          <span>264</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                          <span>37</span>
                        </a>
                      </div>


                    </div>

                    <div className="control-block-button post-control-button">

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon"><use xlinkHref="icons/icons.svg#olymp-like-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                      </a>

                    </div>

                  </article>
                </div>

                <div className="ui-block">
                  <article className="hentry post has-post-thumbnail">

                    <div className="post__author author vcard inline-items">
                      <img src="img/avatar10-sm.jpg" alt="author" />

                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Sarah Hetfield</a>
                        <div className="post__date">
                          <time className="published" dateTime="2004-07-24T18:18">
                            March 2 at 9:06am
                      </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                </p>

                    <div className="post-additional-info inline-items">

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>0 Likes</span>
                      </a>

                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg> 
                          <span>0 Comments</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                          <span>2 Shares</span>
                        </a>
                      </div>


                    </div>

                    <div className="control-block-button post-control-button">

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon"><use xlinkHref="icons/icons.svg#olymp-like-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                      </a>

                    </div>

                  </article>
                </div>

                <div className="ui-block">
                  <article className="hentry post has-post-thumbnail">

                    <div className="post__author author vcard inline-items">
                      <img src="img/avatar5-sm.jpg" alt="author" />

                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="#">Nicholas Grissom</a>
                        <div className="post__date">
                          <time className="published" dateTime="2004-07-24T18:18">
                            March 2 at 8:34am
                      </time>
                        </div>
                      </div>

                      <div className="more">
                        <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                        <ul className="more-dropdown">
                          <li>
                            <a href="#">Edit Post</a>
                          </li>
                          <li>
                            <a href="#">Delete Post</a>
                          </li>
                          <li>
                            <a href="#">Turn Off Notifications</a>
                          </li>
                          <li>
                            <a href="#">Select as Featured</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque.
                </p>

                    <div className="post-additional-info inline-items">

                      <a href="#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg> 
                        <span>22</span>
                      </a>

                      <ul className="friends-harmonic">
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend" />
                          </a>
                        </li>
                      </ul>

                      <div className="names-people-likes">
                        <a href="#">Jimmy</a>, <a href="#">Andrea</a> and
                    <br />47 more liked this
                  </div>


                      <div className="comments-shared">
                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg> 
                          <span>0</span>
                        </a>

                        <a href="#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                          <span>2</span>
                        </a>
                      </div>


                    </div>

                    <div className="control-block-button post-control-button">

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-like-post-icon"><use xlinkHref="icons/icons.svg#olymp-like-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg> 
                      </a>

                      <a href="#" className="btn btn-control">
                        <svg className="olymp-share-icon"><use xlinkHref="icons/icons.svg#olymp-share-icon"></use></svg> 
                      </a>

                    </div>

                  </article>
                </div>

              </div>


              <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
              </a>


            </main>

            {/* <!-- ... end Main Content -->
    
    
        <!-- Left Sidebar -->  */}

            <aside className="col-xl-3 pull-xl-6 col-lg-6 pull-lg-0 col-md-6 col-sm-12 col-xs-12">
              <div className="ui-block">
                <div className="widget w-wethear">
                  <a href="#" className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                  </a>

                  <div className="wethear-now inline-items">
                    <div className="temperature-sensor">64°</div>
                    <div className="max-min-temperature">
                      <span>58°</span>
                      <span>76°</span>
                    </div>

                    <svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg> 
                  </div>

                  <div className="wethear-now-description">
                    <div className="climate">Partly Sunny</div>
                    <span>Real Feel: <span>67°</span></span>
                    <span>Chance of Rain: <span>49%</span></span>
                  </div>

                  <ul className="weekly-forecast">

                    <li>
                      <div className="day">sun</div>
                      <svg className="olymp-weather-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-sunny-icon"></use></svg> 

                      <div className="temperature-sensor-day">60°</div>
                    </li>

                    <li>
                      <div className="day">mon</div>
                      <svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg> 
                      <div className="temperature-sensor-day">58°</div>
                    </li>

                    <li>
                      <div className="day">tue</div>
                      <svg className="olymp-weather-cloudy-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-cloudy-icon"></use></svg> 

                      <div className="temperature-sensor-day">67°</div>
                    </li>

                    <li>
                      <div className="day">wed</div>
                      <svg className="olymp-weather-rain-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-rain-icon"></use></svg> 

                      <div className="temperature-sensor-day">70°</div>
                    </li>

                    <li>
                      <div className="day">thu</div>
                      <svg className="olymp-weather-storm-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-storm-icon"></use></svg> 

                      <div className="temperature-sensor-day">58°</div>
                    </li>

                    <li>
                      <div className="day">fri</div>
                      <svg className="olymp-weather-snow-icon"><use xlinkHref="icons/icons-weather.svg#olymp-weather-snow-icon"></use></svg> 

                      <div className="temperature-sensor-day">68°</div>
                    </li>

                    <li>
                      <div className="day">sat</div>

                      <svg className="olymp-weather-wind-icon-header"><use xlinkHref="icons/icons-weather.svg#olymp-weather-wind-icon-header"></use></svg> 

                      <div className="temperature-sensor-day">65°</div>
                    </li>

                  </ul>

                  <div className="date-and-place">
                    <h5 className="date">Saturday, March 26th</h5>
                    <div className="place">San Francisco, CA</div>
                  </div>

                </div>
              </div>


              <div className="ui-block">
                <div className="calendar-container">
                  <div className="calendar">
                    <header>
                      <h6 className="month">March 2017</h6>
                      <a className="calendar-btn-prev fontawesome-angle-left" href="#"></a>
                      <a className="calendar-btn-next fontawesome-angle-right" href="#"></a>
                    </header>
                    <table>
                      <thead>
                        <tr><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>San</td></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="event-uncomplited event-complited">
                            2
                    </td>
                          <td>3</td>
                          <td>4</td>
                          <td>5</td>
                          <td>6</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>9</td>
                          <td className="event-complited">10</td>
                          <td>11</td>
                          <td>12</td>
                          <td>13</td>
                          <td>14</td>
                        </tr>
                        <tr>
                          <td className="event-complited-2">15</td>
                          <td>16</td>
                          <td>17</td>
                          <td>18</td>
                          <td>19</td>
                          <td>20</td>
                          <td>21</td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>23</td>
                          <td>24</td>
                          <td>25</td>
                          <td>26</td>
                          <td>27</td>
                          <td className="event-uncomplited">28</td>
                        </tr>
                        <tr>
                          <td>29</td>
                          <td>30</td>
                          <td>31</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="list">


                      <div id="accordion-1" role="tablist" aria-multiselectable="true" className="day-event">
                        <div className="ui-block-title ui-block-title-small">
                          <h6 className="title">TODAY’S EVENTS</h6>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingOne-1">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">9:00am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1" aria-expanded="true" aria-controls="collapseOne-1">
                                Breakfast at the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseOne-1" className="collapse" role="tabpanel" >
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>
                            <div className="place inline-items">
                              <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                              <span>Daydreamz Agency</span>
                            </div>

                            <ul className="friends-harmonic inline-items">
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic5.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic10.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic7.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic8.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic2.jpg" alt="friend" />
                                </a>
                              </li>
                              <li className="with-text">
                                Will Assist
                          </li>
                            </ul>
                          </div>


                        </div>

                        <div className="card">
                          <div className="card-header" role="tab" id="headingTwo-1">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">9:00am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo-1" aria-expanded="true" aria-controls="collapseTwo-1">
                                Send the new “Olympus” project files to the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseTwo-1" className="collapse" role="tabpanel">
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>
                          </div>

                        </div>

                        <div className="card">
                          <div className="card-header" role="tab" id="headingThree-1">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">6:30am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="false">
                                Take Querty to the Veterinarian
                          </a>
                            </h5>
                          </div>
                          <div className="place inline-items">
                            <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                            <span>Daydreamz Agency</span>
                          </div>
                        </div>

                        <a href="#" className="check-all">Check all your Events</a>
                      </div>

                      <div id="accordion-2" role="tablist" aria-multiselectable="true" className="day-event">
                        <div className="ui-block-title ui-block-title-small">
                          <h6 className="title">TODAY’S EVENTS</h6>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingOne-2">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">9:00am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-2" aria-expanded="true" aria-controls="collapseOne-2">
                                Breakfast at the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseOne-2" className="collapse" role="tabpanel">
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>
                            <div className="place inline-items">
                              <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                              <span>Daydreamz Agency</span>
                            </div>

                            <ul className="friends-harmonic inline-items">
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic5.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic10.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic7.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic8.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic2.jpg" alt="friend" />
                                </a>
                              </li>
                              <li className="with-text">
                                Will Assist
                          </li>
                            </ul>
                          </div>

                        </div>

                        <a href="#" className="check-all">Check all your Events</a>
                      </div>

                      <div id="accordion-3" role="tablist" aria-multiselectable="true" className="day-event">
                        <div className="ui-block-title ui-block-title-small">
                          <h6 className="title">TODAY’S EVENTS</h6>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingOne-3">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">9:00am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-3" aria-expanded="true" aria-controls="collapseOne-3">
                                Breakfast at the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseOne-3" className="collapse" role="tabpanel">
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>

                            <div className="place inline-items">
                              <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                              <span>Daydreamz Agency</span>
                            </div>

                            <ul className="friends-harmonic inline-items">
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic5.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic10.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic7.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic8.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic2.jpg" alt="friend" />
                                </a>
                              </li>
                              <li className="with-text">
                                Will Assist
                          </li>
                            </ul>
                          </div>

                        </div>

                        <div className="card">
                          <div className="card-header" role="tab" id="headingTwo-3">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">12:00pm</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo-3" aria-expanded="true" aria-controls="collapseTwo-3">
                                Send the new “Olympus” project files to the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseTwo-3" className="collapse" role="tabpanel" >
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>
                          </div>

                        </div>

                        <div className="card">
                          <div className="card-header" role="tab" id="headingThree-3">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">6:30pm</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="false">
                                Take Querty to the Veterinarian
                          </a>
                            </h5>
                          </div>
                          <div className="place inline-items">
                            <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                            <span>Daydreamz Agency</span>
                          </div>
                        </div>

                        <a href="#" className="check-all">Check all your Events</a>
                      </div>

                      <div id="accordion-4" role="tablist" aria-multiselectable="true" className="day-event">
                        <div className="ui-block-title ui-block-title-small">
                          <h6 className="title">TODAY’S EVENTS</h6>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="headingOne-4">
                            <div className="event-time">
                              <span className="circle"></span>
                              <time dateTime="2004-07-24T18:18">9:00am</time>
                              <a href="#" className="more">
                                <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                              </a>
                            </div>
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-4" aria-expanded="true" aria-controls="collapseOne-4">
                                Breakfast at the Agency
                            <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg> 
                              </a>
                            </h5>
                          </div>

                          <div id="collapseOne-4" className="collapse" role="tabpanel" aria-labelledby="headingOne-4">
                            <div className="card-block">
                              Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!
                        </div>
                            <div className="place inline-items">
                              <svg className="olymp-add-a-place-icon"><use xlinkHref="icons/icons.svg#olymp-add-a-place-icon"></use></svg> 
                              <span>Daydreamz Agency</span>
                            </div>

                            <ul className="friends-harmonic inline-items">
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic5.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic10.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic7.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic8.jpg" alt="friend" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <img src="img/friend-harmonic2.jpg" alt="friend" />
                                </a>
                              </li>
                              <li className="with-text">
                                Will Assist
                          </li>
                            </ul>
                          </div>

                        </div>

                        <a href="#" className="check-all">Check all your Events</a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Pages You May Like</h6>
                  <a href="#" className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                  </a>
                </div>

                <ul className="widget w-friend-pages-added notification-list friend-requests">
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar41-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">The Marina Bar</a>
                      <span className="chat-message-item">Restaurant / Bar</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>

                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar42-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Tapronus Rock</a>
                      <span className="chat-message-item">Rock Band</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>
                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar43-sm.jpg" alt="author" /> 
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Pixel Digital Design</a>
                      <span className="chat-message-item">Company</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>
                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar44-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                      <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>
                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar45-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Crimson Agency</a>
                      <span className="chat-message-item">Company</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>
                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar46-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Mannequin Angel</a>
                      <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span className="notification-icon" data-toggle="tooltip" data-placement="top" title="ADD TO YOUR FAVS">
                      <a href="#">
                        <svg className="olymp-star-icon"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg> 
                      </a>
                    </span>
                  </li>

                </ul>

              </div>
            </aside>

            {/* <!-- ... end Left Sidebar -->  */}


            {/* <!-- Right Sidebar -->  */}

            <aside className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div className="ui-block">
                <div className="widget w-birthday-alert">
                  <div className="icons-block">
                    <svg className="olymp-cupcake-icon"><use xlinkHref="icons/icons.svg#olymp-cupcake-icon"></use></svg> 
                    <a href="#" className="more">
                      <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                    </a>
                  </div>

                  <div className="content">
                    <div className="author-thumb">
                      <img src="img/avatar48-sm.jpg" alt="author" />
                    </div>
                    <span>Today is</span>
                    <a href="#" className="h4 title">Marina Valentine’s Birthday!</a>
                    <p>Leave her a message with your best wishes on her profile page!</p>
                  </div>
                </div>
              </div>


              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Friend Suggestions</h6>
                  <a href="#" className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                  </a>
                </div>

                <ul className="widget w-friend-pages-added notification-list friend-requests">
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar38-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Francine Smith</a>
                      <span className="chat-message-item">8 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>
                    </span>

                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar39-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Hugh Wilson</a>
                      <span className="chat-message-item">6 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>
                    </span>

                  </li>

                  <li className="inline-items">
                    <div className="author-thumb">
                      <img src="img/avatar40-sm.jpg" alt="author" /> 
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Karen Masters</a>
                      <span className="chat-message-item">6 Friends in Common</span>
                    </div>
                    <span className="notification-icon">
                      <a href="#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg> 
                        </span>
                      </a>
                    </span>

                  </li>

                </ul>

              </div>

              <div className="ui-block">

                <div className="ui-block-title">
                  <h6 className="title">Activity Feed</h6>
                  <a href="#" className="more">
                    <svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg> 
                  </a>
                </div>

                <ul className="widget w-activity-feed notification-list">
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar49-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Marina Polson</a> commented on Jason Mark’s <a href="#" className="notification-link">photo.</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 mins ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar9-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Jake Parker </a> liked Nicholas Grissom’s <a href="#" className="notification-link">status update.</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">5 mins ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar50-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Mary Jane Stark </a> added 20 new photos to her <a href="#" className="notification-link">gallery album.</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">12 mins ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar51-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Nicholas Grissom </a> updated his profile <a href="#" className="notification-link">photo</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hour ago</time></span>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar48-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Marina Valentine </a> commented on Chris Greyson’s <a href="#" className="notification-link">status update</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hour ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar52-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Green Goo Rock </a> posted a <a href="#" className="notification-link">status update</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">1 hour ago</time></span>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Elaine Dreyfuss  </a> liked your <a href="#" className="notification-link">blog post</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 hours ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar10-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Elaine Dreyfuss  </a> commented on your <a href="#" className="notification-link">blog post</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">2 hours ago</time></span>
                    </div>
                  </li>

                  <li>
                    <div className="author-thumb">
                      <img src="img/avatar53-sm.jpg" alt="author" />
                    </div>
                    <div className="notification-event">
                      <a href="#" className="h6 notification-friend">Bruce Peterson </a> changed his <a href="#" className="notification-link">profile picture</a>.
                  <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">15 hours ago</time></span>
                    </div>
                  </li>

                </ul>
              </div>


              <div className="ui-block">
                <div className="widget w-action">

                  <img src="img/logo.png" alt="Olympus" />
                  <div className="content">
                    <h4 className="title">OLYMPUS</h4>
                    <span>THE BEST SOCIAL NETWORK THEME IS HERE!</span>
                    <a href="01-LandingPage.html" className="btn btn-bg-secondary btn-md">Register Now!</a>
                  </div>
                </div>
              </div>

            </aside>

            {/* <!-- ... end Right Sidebar -->  */}

          </div>
        </div>


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

export default Newsfeed