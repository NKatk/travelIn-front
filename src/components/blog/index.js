import React from 'react';

import BlogArticle from './blogArticle';
import BlogList from './blogList';

class Blog extends React.Component{

    render() {
        return(
            this.props.match.params.id?
                <BlogArticle id={this.props.match.params.id}/>:
                <BlogList/>

        )
    }
}

export default Blog;