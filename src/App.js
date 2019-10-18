import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/header'
import Home from './components/home';
import Blog from './components/blog';
import Photo from './components/photo';
import AboutUs from './components/aboutus';
import NotFound from './components/notfound';
import Footer from './components/footer';


class App extends Component{
    constructor(){
        super();
        this.state = {
            stateMenu: false,
        }
    }

    menuOpen = () =>{
        this.setState({
            stateMenu: this.state.stateMenu?false:true
        })
    };

    render(){
        return(
            <div className='Site'>
                <Router>
                    <Header menuOpen={this.menuOpen} stateMenu={this.state.stateMenu}/>
                    <div className='Site-content'>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/blog/:id?' component={Blog}/>
                            <Route exact path='/photo' component={Photo}/>
                            <Route exact path='/about' component={AboutUs}/>
                            <Route exact path='/*' component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default App;