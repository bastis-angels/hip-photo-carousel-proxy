import React from 'react';
import HelpfulBtn from './helpfulBtn.jsx';


const Card = (props) => {
  return (
    <div id={`card-${props.index}`} className="card">

      <div class="counter">{props.index + 1} / 30</div>

      <div className="close" onClick={() => {props.toggleOverlay()}}>
        <i class="fas fa-times" />
      </div>

      <div className="userInfo">
        <div className="userAvatar">
          <i class="fas fa-campground"></i>
        </div>
        <div className="userName">Eliana L.</div>
        <div className="datePosted">Posted on <span id="date">{props.date}</span></div>
      </div>

      <HelpfulBtn 
        votes={props.upVotes}
        incrementUpVotes={props.incrementUpVotes}
        decrementUpVotes={props.decrementUpVotes}
      />

      <div className="location">
          <span><i class="fas fa-map-marker-alt"></i></span> <span id="locale">{props.location}</span>
      </div>

      <div className="socialMediaIcons">
        <i className="fab fa-pinterest icon"></i>
        <i className="fab fa-facebook icon"></i>
        <i className="fab fa-twitter icon"></i>
        <i className="fas fa-link icon"></i>
      </div>

      <div className="report">
        <span><i class="far fa-flag" /> </span> <span>Report</span>
      </div>

      <img src={props.image} alt={props.location} />
    </div>
  )
}

export default Card;