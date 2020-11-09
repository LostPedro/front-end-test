import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import * as serviceWorker from './serviceWorker'
import ManagerPg from './pages/ManagerPg'
import './styles/globalStyle.less'
import 'moment/locale/pt-br'

moment.locale('pt-br')

ReactDOM.render(
  <React.StrictMode>
    <ManagerPg />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
