import React from 'react'
import { render } from 'react-dom'
import Pref from 'react-addons-perf'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import RoutMap from './routComponent'
import { hashHistory } from 'react-router-dom'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'

const store = configureStore()

if(__DEV__){
	window.Pref=Pref
}

render(
	<Provider store={ store }>
		<RoutMap history={hashHistory}/>
	</Provider>
    ,
    document.getElementById('root')
)
