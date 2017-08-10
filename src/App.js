import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'><h2><span className='label label-default'>1.1</span> Measuring Things, Including Lengths</h2></div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='nav nav-tabs' role='tablist'>
              <li role='presentation' className='active'>
                <NavLink to={'/'} className='nav-link'>Home</NavLink>
              </li>
              <li role='presentation'>
                <NavLink to={'/resource'} className='nav-link'>Resources</NavLink>
              </li>
              <li role='presentation'>
                <NavLink to={'/practice'} className='nav-link'>Practice</NavLink>
              </li>
              <li role='presentation'>
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
                <div className='row'>
                  <div>&#xa0;</div>
                  <div className='col-xs-12 col-md-8'>
                    <div className='panel panel-default'>
                      <div className='panel-body'>
                        <h3>Learning Objectives</h3>
                        <p className='lead'>After reading this module, you should be able to …</p>
                        <ul>
                          <li>Identify the base quantities in the SI system.</li>
                          <li>Name the most frequently used prefixes for SI units.</li>
                          <li>Change units (here for length, area, and volume) by using chain‐link conversions.</li>
                          <li>Explain that the meter is defined in terms of the speed of light in vacuum.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-md-4 hidden-sm hidden-xs'>
                    <div className='media panel panel-default'>
                      <div className='panel-body'>
                        <div className='media-left'>
                          <img className='media-object' src='https://dummyimage.com/120x155/c7d4f5/000' alt='...' />
                        </div>
                        <div className='media-body'>
                          <h4 className='media-heading'>Funancial Accounting<small> Tools for Business Decision Making</small> <span className='label label-default'>etext</span></h4>
                        </div>
                      </div>
                    </div>

                    <table className='table table-responsive borderless'>
                      <tr>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/c7d4f5/000' alt='...' />
                          <div>1 etext</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/c7d4f5/000' alt='...' />
                          <div>3 audio</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/c7d4f5/000' alt='...' />
                          <div>1 interactivity</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/c7d4f5/000' alt='...' />
                          <div>2 Animation</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/fff/000' alt='...' />
                          <div>&#xa0;</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/80x80/fff/000' alt='...' />
                          <div>&#xa0;</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12 col-md-12'>
                    <div className='panel panel-default'>
                      <div className='panel-body'>
                        <h3>Summary</h3>
                        <ul>
                          <li>Physics is based on measurement of physical quantities. Certain physical quantities have been chosen as base quantities (such as length, time, and mass); each has been defined in terms of a standard and given a unit of measure (such as meter, second, and kilogram). Other physical quantities are defined in terms of the base quantities and their standards and units.</li>
                          <li>The unit system emphasized in this book is the International System of Units (SI). The three physical quantities displayed in Table 1.1 are used in the early chapters. Standards, which must be both accessible and invariable, have been established for these base quantities by international agreement. These standards are used in all physical measurement, for both the base quantities and the quantities derived from them. Scientific notation and the prefixes of Table 1.2 are used to simplify measurement notation.</li>
                          <li>Conversion of units may be performed by using chain‐link conversions in which the original data are multiplied successively by conversion factors written as unity and the units are manipulated like algebraic quantities until only the desired units remain.</li>
                          <li>The meter is defined as the distance traveled by light during a precisely specified time interval.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row hidden-lg hidden-md'>
                  <div className='col-xs-12 col-sm-12'>
                    <div className='media panel panel-default'>
                      <div className='panel-body'>
                        <div className='media-left'>
                          <img className='media-object' src='https://dummyimage.com/60x78/c7d4f5/000' alt='...' />
                        </div>
                        <div className='media-body'>
                          <h4 className='media-heading'>Funancial Accounting<small> Tools for Business Decision Making</small> <span className='label label-default'>etext</span></h4>
                        </div>
                      </div>
                    </div>

                    <table className='table table-responsive borderless'>
                      <tr>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/c7d4f5/000' alt='...' />
                          <div>1 etext</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/c7d4f5/000' alt='...' />
                          <div>3 audio</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/c7d4f5/000' alt='...' />
                          <div>1 interactivity</div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/c7d4f5/000' alt='...' />
                          <div>2 Animation</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/fff/000' alt='...' />
                          <div>&#xa0;</div>
                        </td>
                        <td className='text-center'>
                          <img src='https://dummyimage.com/44x44/fff/000' alt='...' />
                          <div>&#xa0;</div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
