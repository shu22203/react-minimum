import * as React from 'react';
import { Provider } from 'react-redux'
import HomeContainer from '../containers/Home'
// import logo from '../logo.svg';
import { store } from '../store'
import './App.css';

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                {/*<div className="App">*/}
                    {/*<header className="App-header">*/}
                        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                        {/*<h1 className="App-title">Welcome to React App.</h1>*/}
                    {/*</header>*/}
                    {/*<p className="App-intro">*/}
                        {/*To get started, edit <code>src/App.tsx</code> and save to reload.*/}
                    {/*</p>*/}
                {/*</div>*/}
                <HomeContainer/>
            </Provider>
        );
    }
}

export default App;
