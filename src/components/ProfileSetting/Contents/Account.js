import React from 'react'

function Account() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Account Settings</h6>
      </div>
      <div className="ui-block-content">
        <form>
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select className="selectpicker form-control" size="0" tabIndex="-98">
                    <option value="EO">Everyone</option>
                    <option value="NO">No One</option>
                  </select></div>
                <span className="material-input"></span>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-select">
                <label className="control-label">Who Can Friend You?</label>
                <div className="btn-group bootstrap-select form-control">
                  <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" role="button" title="Everyone">
                    <span className="filter-option pull-left">Everyone</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span><div className="ripple-container"></div></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="selected"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">Everyone</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className=" dropdown-item" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">No One</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select className="selectpicker form-control" size="0" tabIndex="-98">
                    <option value="EO">Everyone</option>
                    <option value="NO">No One</option>
                  </select></div>
                <span className="material-input"></span>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="description-toggle">
                <div className="description-toggle-content">
                  <div className="h6">Notifications Sound</div>
                  <p>A sound will be played each time you receive a new activity notification</p>
                </div>

                <div className="togglebutton">
                  <label>
                    <input type="checkbox" defaultChecked />
                    <span className="toggle"></span>
                  </label>
                </div>
              </div>
              <div className="description-toggle">
                <div className="description-toggle-content">
                  <div className="h6">Notifications Email</div>
                  <p>We’ll send you an email to your account each time you receive a new activity notification</p>
                </div>

                <div className="togglebutton">
                  <label>
                    <input type="checkbox" />
                    <span className="toggle"></span>
                  </label>
                </div>
              </div>
              <div className="description-toggle">
                <div className="description-toggle-content">
                  <div className="h6">Friend’s Birthdays</div>
                  <p>Choose wheather or not receive notifications about your friend’s birthdays on your newsfeed</p>
                </div>

                <div className="togglebutton">
                  <label>
                    <input type="checkbox" />
                    <span className="toggle"></span>
                  </label>
                </div>
              </div>
              <div className="description-toggle">
                <div className="description-toggle-content">
                  <div className="h6">Chat Message Sound</div>
                  <p>A sound will be played each time you receive a new message on an inactive chat window</p>
                </div>

                <div className="togglebutton">
                  <label>
                    <input type="checkbox" />
                    <span className="toggle"></span>
                  </label>
                </div>
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

export default Account