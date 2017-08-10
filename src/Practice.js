import React, { Component } from 'react';

class Practice extends Component {
  render() {
    return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'><h2><span className='label label-default'>1.1</span> Measuring Things, Including Lengths</h2></div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation'><a href='/#/' aria-controls='home' role='tab' data-toggle='tab'>Home</a></li>
            <li role='presentation'><a href='/#/resources' aria-controls='resources' role='tab' data-toggle='tab'>Resources</a></li>
            <li role='presentation' className='active'><a href='/#/practice' aria-controls='practice' role='tab' data-toggle='tab'>Practice</a></li>
            <li role='presentation'><a href='/#/related' aria-controls='related' role='tab' data-toggle='tab'>Related</a></li>
            <li role='presentation' className='pull-right'>
              <input id='search' type='text' placeholder='search for...' />
              <button type='button' className='btn btn-default btn-sm'>
                <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
              </button>
              <button type='button' className='btn btn-default btn-sm'>
                <span className='glyphicon glyphicon-fullscreen' aria-hidden='true'></span>
              </button>
            </li>
          </ul>

          <div className='tab-content'>
            <div role='tabpanel' className='tab-pane' id='practice'>
              <div>Cu magna omnis accusamus usu, est at dico stet intellegebat. Quis errem vel et, ei mediocrem definiebas nam. Per decore epicurei suscipiantur ad, detracto forensibus ei pri, quo ad latine discere definitiones. Pro voluptua persecuti ne, sed te repudiare assueverit. Ea mel harum oratio, vix ne consul putant singulis.</div>
              <div>Soleat tibique in has, cu appellantur accommodare mea, omnesque noluisse inimicus ne ius. Ex tritani vocibus duo, magna perfecto te vel. Sed cu perpetua tincidunt, epicurei convenire molestiae qui in, qui ea stet luptatum electram. Quo option ornatus mentitum et, ex omnis patrioque delicatissimi vel.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Practice;
