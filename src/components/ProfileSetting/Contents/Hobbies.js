import React from 'react'

function Hobies() {
  const styleLabel = {
    fontSize: "11px",
    top: "10px"
  }
  return(
    <div className="ui-block">
    <div className="ui-block-title">
      <h6 className="title">Hobbies and Interests</h6>
    </div>
    <div className="ui-block-content">
      <form>
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Hobbies</label>
            <textarea className="form-control" placeholder="">I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.
            </textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite TV Shows</label>
              <textarea className="form-control" placeholder=""  >Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite Movies</label>
              <textarea className="form-control" placeholder=""  >Idiocratic, The Scarred Wizard and the Fire Crown,  Crime Squad, Ferrum Man. </textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite Games</label>
              <textarea className="form-control" placeholder=""  >The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto. </textarea>
            </div>

            <button className="btn btn-secondary btn-lg full-width">Cancel</button>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite Music Bands / Artists</label>
              <textarea className="form-control" placeholder=""  >Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite Books</label>
              <textarea className="form-control" placeholder=""  >The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Favourite Writers</label>
              <textarea className="form-control" placeholder=""  >Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </textarea>
            </div>
            <div className="form-group label-floating is-empty">
              <label style={ styleLabel } className="control-label">Other Interests</label>
              <textarea className="form-control" placeholder=""  >Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</textarea>
            </div>

            <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
          </div>

        </div>
      </form>
    </div>
  </div>

  )
}

export default Hobies