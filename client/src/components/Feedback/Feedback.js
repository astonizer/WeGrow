import React from 'react';

// import './Feedback.css';

function Feedback() {
  return (
    <div className="card" style="width: 18rem;">
      <div className="row">
        <div className="col">
          <h5 className="card-title">Give Us Your Valuable Feedback</h5>
        </div>
        <div className="col">
          <div className="card-body">
            <form>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" for="inlineRadio2">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" for="inlineRadio3">3</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
                <label className="form-check-label" for="inlineRadi4">4</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5" />
                <label className="form-check-label" for="inlineRadio5">5</label>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>           
          </div>
        </div>
      </div>
  </div>
  );
}

export default Feedback;