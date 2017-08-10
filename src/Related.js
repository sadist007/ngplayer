import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Related extends Component {
  render() {
    return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'><h2><span className='label label-default'>1.1</span> Measuring Things, Including Lengths</h2></div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation'>
              <NavLink to={'/'} className='nav-link'>Home</NavLink>
            </li>
            <li role='presentation'>
              <NavLink to={'/resource'} className='nav-link'>Resources</NavLink>
            </li>
            <li role='presentation'>
              <NavLink to={'/practice'} className='nav-link'>Practice</NavLink>
            </li>
            <li role='presentation' className='active'>
              <NavLink to={'/related'} className='nav-link'>Related</NavLink>
            </li>
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
            <div role='tabpanel' className='tab-pane active'>
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
