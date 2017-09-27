import React, { Component } from 'react'

class Newsfeed extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          {/* <!-- Main Content -->  */}

          <main className="col-xl-6 push-xl-3 col-lg-12 push-lg-0 col-md-12 col-sm-12 col-xs-12">

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
    )
  }
}

export default Newsfeed