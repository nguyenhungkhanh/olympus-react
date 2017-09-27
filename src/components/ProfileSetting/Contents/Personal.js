import React from 'react'

function Personal() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Thông tin cá nhân</h6>
      </div>
      <div className="ui-block-content">
        <form>
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating">
                <input className="form-control" placeholder="" type="text" value="James" />
                <label className="control-label">Họ</label>
              </div>

              <div className="form-group label-floating">
                <label className="control-label">Email</label>
                <input className="form-control" placeholder="" type="email" value="jspiegel@yourmail.com" />
              </div>

              <div className="form-group date-time-picker label-floating">
                <label className="control-label">Ngày sinh</label>
                <input name="datetimepicker" value="10/24/1984" />
                <span className="input-group-addon">
                  <svg className="olymp-month-calendar-icon icon"><use xlinkHref="icons/icons.svg#olymp-month-calendar-icon"></use></svg>
                </span>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating">
                <label className="control-label">Tên</label>
                <input className="form-control" placeholder="" type="text" value="Spiegel" />
              </div>

              <div className="form-group label-floating">
                <label className="control-label">Website</label>
                <input className="form-control" placeholder="" type="email" value="daydreamzagency.com" />
              </div>


              <div className="form-group label-floating is-empty">
                <input className="form-control" placeholder="" type="text" />
                <label className="control-label">Điện thoại</label>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div>
                </div>
                <span className="material-input"></span>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div>
                </div>
                <span className="material-input"></span>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div>
                </div>
                <span className="material-input"></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating">
                <label className="control-label">Write a little description about you</label>
                <textarea className="form-control" placeholder="">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56</textarea>
              </div>

              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div>
                </div>
                <span className="material-input"></span>
              </div>

              <div className="form-group label-floating is-empty">
                <input className="form-control" placeholder="" type="text" />
                <label className="control-label">Religious Belifs</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-empty">
                <input className="form-control" placeholder="" type="text" />
                <label className="control-label">Your Birthplace</label>
              </div>

              <div className="form-group label-floating">
                <label className="control-label">Your Occupation</label>
                <input className="form-control" placeholder="" type="text" value="UI/UX Designer" />
              </div>

              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div>
                </div>
                <span className="material-input"></span>
              </div>

              <div className="form-group label-floating">
                <label className="control-label">Political Incline</label>
                <input className="form-control" placeholder="" type="text" value="Democrat" />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group with-icon label-floating">
                <label className="control-label">Your Facebook Account</label>
                <input className="form-control" type="text" value="www.facebook.com/james-spiegel95321" />
                <i className="fa fa-facebook c-facebook" aria-hidden="true"></i>
              </div>
              <div className="form-group with-icon label-floating">
                <label className="control-label">Your Twitter Account</label>
                <input className="form-control" type="text" value="www.twitter.com/james_spiegelOK" />
                <i className="fa fa-twitter c-twitter" aria-hidden="true"></i>
              </div>
              <div className="form-group with-icon label-floating is-empty">
                <label className="control-label">Your RSS Feed Account</label>
                <input className="form-control" type="text" />
                <i className="fa fa-rss c-rss" aria-hidden="true"></i>
              </div>
              <div className="form-group with-icon label-floating">
                <label className="control-label">Your Dribbble Account</label>
                <input className="form-control" type="text" value="www.dribbble.com/thecowboydesigner" />
                <i className="fa fa-dribbble c-dribbble" aria-hidden="true"></i>
              </div>
              <div className="form-group with-icon label-floating is-empty">
                <label className="control-label">Your Spotify Account</label>
                <input className="form-control" type="text" />
                <i className="fa fa-spotify c-spotify" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <button className="btn btn-secondary btn-lg full-width">Restore all Attributes</button>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Personal