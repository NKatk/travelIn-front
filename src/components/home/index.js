import React, {Component} from 'react';

import {LastNew, TopNews, TopPhoto, Subscribe} from "./components";
import {LoadingContent} from '../loaders';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Home extends Component{
    constructor(){
        super();
        this.state= {
            content: null
        }
    }

    componentDidMount(){
        this.homePage()
    }

    homePage = () =>{
        fetch('/api/takehomepage',
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(value=>{
                this.setState({
                    content: value
                })
            })
            .catch(error=>{
                console.log(error);
            });
    };

    render() {
        const content = this.state.content;

        if (content) return (
            <div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <LastNew article={content.lastNew}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <TopNews articles={content.topNews}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <Subscribe/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <TopPhoto photo={content.topPhoto}/>
                </ScrollAnimation>
            </div>
        );
        return <LoadingContent/>

    }
}

export default Home;