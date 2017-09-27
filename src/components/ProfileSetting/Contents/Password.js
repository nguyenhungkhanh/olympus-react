import React from 'react'

function Password() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Đổi mật khẩu</h6>
      </div>
      <div className="ui-block-content">
        <form>
          <div className="row">

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="form-group label-floating">
                <input className="form-control" placeholder="" type="password" value="Olympus-2017" />
                <label className="control-label">Mật khẩu hiện tại</label>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-empty">
                <input className="form-control" placeholder="" type="password" />
                <label className="control-label">Mật khẩu mới</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="form-group label-floating is-empty">
                <input className="form-control" placeholder="" type="password" />
                <label className="control-label">Nhập lại mật khẩu</label>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
              <div className="remember">

                <div className="checkbox">
                  <label>
                    <input name="optionsCheckboxes" type="checkbox" />
                    <span className="checkbox-material"><span className="check"></span></span>
                    Nhớ tài khoản
                </label>
                </div>

                <a href="#" className="forgot">Quên mật khẩu</a>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <button className="btn btn-primary btn-lg full-width">Đổi mật khẩu</button>
            </div>

          </div>
        </form>
      </div>
    </div>

  )
}

export default Password