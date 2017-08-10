import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './index.scss';
import App from './App';
import Resource from './Resource';
import Practice from './Practice';
import Related from './Related';
import registerServiceWorker from './registerServiceWorker';

const MOUNT_NODE = document.getElementById('root')

/*ReactDOM.render((
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/resource' component={Resource} />
			<Route exact path='/practice' component={Practice} />
			<Route exact path='/related' component={Related} />
		</Switch>
	</HashRouter>
), MOUNT_NODE);
*/

registerServiceWorker();
let render = () => {
	ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/resource' component={Resource} />
			<Route exact path='/practice' component={Practice} />
			<Route exact path='/related' component={Related} />
		</Switch>
	</HashRouter>,
		MOUNT_NODE
	);
}

// Development Tools
// ------------------------------------
if (__DEV__) {
	if (module.hot) {
		const renderApp = render
		const renderError = (error) => {
			const RedBox = require('redbox-react').default

			ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
		}

		render = () => {
			try {
				renderApp()
			} catch (e) {
				console.error(e)
				renderError(e)
			}
		}

		// Setup hot module replacement
		module.hot.accept([
			'./components/App'
		], () =>
				setImmediate(() => {
					ReactDOM.unmountComponentAtNode(MOUNT_NODE)
					render()
				})
		)
	}
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()