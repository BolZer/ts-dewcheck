import 'animate.css/animate.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './assets/scss/app.scss';
import {BottomMenu} from './components/menu/menu_bottom';
import {TopMenu} from './components/menu/menu_top';
import {Boiler} from './components/step/boiler';
import {Bulletin} from './components/step/bulletin';
import {Craft} from './components/step/craft';
import {Overview} from './components/step/overview';
import {Pantry} from './components/step/pantry';
import {FishTank} from './components/step/tank';
import {Vault} from './components/step/vault';
import store from './store/store';

const AppImage: string = require('./assets/img/background.jpg');

export class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <Router>
            <div className='app-container'>
                <div className='app-mask'/>
                <div className='app-background' style={{
                    backgroundImage: 'url(' + AppImage + ')'
                }}/>
                <TopMenu/>
                <div className='row h-100'>
                    <div className='col-12 d-flex flex-column justify-content-center align-items-center'
                         style={{paddingTop: '60px', paddingBottom: '60px'}}
                    >
                        <Provider store={store}>
                            <Route exact path='/' component={Overview}/>
                            <Route path='/pantry' component={Pantry}/>
                            <Route path='/vault' component={Vault}/>
                            <Route path='/craft' component={Craft}/>
                            <Route path='/boiler' component={Boiler}/>
                            <Route path='/fishtank' component={FishTank}/>
                            <Route path='/bulletin' component={Bulletin}/>
                        </Provider>
                    </div>
                </div>
                <BottomMenu/>
            </div>
        </Router>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
