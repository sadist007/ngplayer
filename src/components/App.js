import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  NavLink
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <div className='row'>
      <div className='col-6 card'>
        <img className='card-img' src='...' alt='Card image' />
        <div className='card-img-overlay'>
          <h4 className='card-title'>Learning Objectives</h4>
          <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className='col-3'>

      </div>
    </div>
    <div className='row'></div>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Resources = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <NavLink to={`${match.url}/all`} className='nav-link' activeClassName='active'>
          All
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={`${match.url}/etext`} className='nav-link' activeClassName='active'>
          ETEXT
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={`${match.url}/interactivity`} className='nav-link' activeClassName='active'>
          INTERACTIVITY
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to={`${match.url}/video`} className='nav-link' activeClassName='active'>
          VIDEO
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const App = () => (
  <Router>
    <div className='container-fluid'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'><NavLink to='/home' className='nav-link' activeClassName='active'>Home</NavLink></li>
        <li className='nav-item'><NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink></li>
        <li className='nav-item'><NavLink to='/topics' className='nav-link' activeClassName='active'>Topics</NavLink></li>
      </ul>
      <Redirect from='/' to='home' />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Resources} />
    </div>
  </Router>
)
export default App