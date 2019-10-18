import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import {PostArticle, ShareArticleAndStatistic, RecommendNextArticles, CommentsArticle} from "./components";
import {LoadingContent, LoadingRender} from "../../loaders";
import NotFound from '../../notfound';

class BlogArticle extends Component{
    constructor(){
        super();
        this.state = {
            content: false,
            idArticle: null
        }
    }

    componentDidMount(){
        this.blogArticle()
    }


    blogArticle = () =>{
        fetch(`/api/takearticle`,
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: this.props.id})
            })
            .then(res=>res.json())
            .then(value=>{
                this.setState({
                    content: value,
                    idArticle: this.props.id
                })
            })
            .catch(error=>{
                console.log(error);
            });
    };


    render() {
        const {content, idArticle} = this.state;
        if(idArticle !== this.props.id && content){
            this.blogArticle();
            window.scrollTo(0, 0);
            return <LoadingRender/>
        }
        if(content){
            return(
                <div key={idArticle}>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <PostArticle image={content.image} title={content.title} body={content.body}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <ShareArticleAndStatistic date={content.date} views={content.views}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <RecommendNextArticles recommendArticles={content.recommendArticles}/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <CommentsArticle comments={content.comments}/>
                    </ScrollAnimation>
                </div>
            )
        }
        if(content === null){
            return <NotFound/>
        }

        this.blogArticle();
        return <LoadingContent/>

    }
}

export default BlogArticle;