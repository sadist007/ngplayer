import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './App';
import Resource from './Resource';
import Practice from './Practice';
import Related from './Related';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/resource' component={Resource} />
			<Route exact path='/practice' component={Practice} />
			<Route exact path='/related' component={Related} />
		</Switch>
	</HashRouter>
), document.getElementById('root'));
registerServiceWorker();