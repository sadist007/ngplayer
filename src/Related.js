import React, { Component } from 'react';

class Related extends Component {
  render() {
    return (
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-12'><h2><span class='label label-default'>1.1</span> Measuring Things, Including Lengths</h2></div>
      </div>
      <div class='row'>
        <div class='col-md-12'>
          <ul class='nav nav-tabs' role='tablist'>
            <li role='presentation'><a href='/#/' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
            <li role='presentation' class='active'><a href='/#/resources' aria-controls='resources' role='tab' data-toggle='tab'>Resources</a></li>
            <li role='presentation'><a href='/#/practice' aria-controls='practice' role='tab' data-toggle='tab'>Practice</a></li>
            <li role='presentation'><a href='/#/related' aria-controls='related' role='tab' data-toggle='tab'>Related</a></li>
            <li role='presentation' class='pull-right'>
              <input id='search' type='text' placeholder='search for...' />
              <button type='button' class='btn btn-default btn-sm'>
                <span class='glyphicon glyphicon-search' aria-hidden='true'></span>
              </button>
              <button type='button' class='btn btn-default btn-sm'>
                <span class='glyphicon glyphicon-fullscreen' aria-hidden='true'></span>
              </button>
            </li>
          </ul>

          <div class='tab-content'>
            <div role='tabpanel' class='tab-pane' id='resources'>
              <div>Lorem ipsum dolor sit amet, et illum prompta mentitum his, ei modo munere nam. Te alia sale mei, eu accusam mandamus ullamcorper mei, liber nominavi pericula qui ad. An eius splendide mea, eos dolore maiorum efficiendi ad, ex nec ludus option posidonium. Nobis tacimates ex nec.</div>
              <div>Brute quaestio vis eu, vim dicit putant voluptaria id. Has et aperiam pericula, ut dissentiet adversarium conclusionemque quo. Sed ne verear perfecto, nam cu postea omnesque, vel illum omittam similique et. Nisl delicata ne est, sale equidem disputando id vix, verterem detraxit ne sed. Vix elitr scripta epicuri ex, nam putent graecis ut. Facilisi intellegam eos ut, primis docendi ne per. Quo error admodum ne, nam duis ancillae te.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Related;
