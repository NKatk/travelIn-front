import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import {SortButtons, ArticlesList, PageButtons} from './components';
import {LoadingContent, LoadingRender} from '../../loaders';


class BlogList extends Component{
    constructor(){
        super();
        this.state= {
            content: null,
            finishContent: null,
            showContent: true,
            page: 0,
            sortType: 'date',
            sortTop: 'top'
        }
    }

    componentDidMount(){
        this.blogList()
    }

    separationByPages = (arr) =>{
        let newArr = [];
        const array_size = 8;

        for (let i = 0; i <arr.length; i += array_size) {
            newArr.push(arr.slice(i, i + array_size));
        }
        return newArr;
    };

    sortList = (type)=>{
        this.setState({
            showContent: false
        });
        setTimeout(()=>{
            if(type === this.state.sortType){
                this.setState({
                    finishContent: this.separationByPages(this.sortFuncList(type, this.state.sortTop === 'top' ? 'down' : 'top')),
                    sortTop: this.state.sortTop === 'top' ? 'down' : 'top',
                    showContent: true,
                    page: 0
                })
            }else{
                this.setState({
                    finishContent: this.separationByPages(this.sortFuncList(type, 'top')),
                    sortType: type,
                    sortTop: 'top',
                    showContent: true,
                    page: 0
                })
            }
        }, 500)
    };

    sortFuncList = (type, top, arr) =>{
        const newArr = arr || this.state.content.map(a => Object.assign({}, a));
        if(type === 'date'){
            return (
                newArr.sort((itemA, itemB)=>{
                    let timeTypeA = new Date(itemA[type]);
                    let timeTypeB = new Date(itemB[type]);
                    if(top !== 'top') return timeTypeA.getTime() - timeTypeB.getTime();
                    return timeTypeB.getTime() - timeTypeA.getTime();
                })
            )
        }

        return (
            newArr.sort((itemA, itemB)=>{
                if(top !== 'top') return itemA[type] - itemB[type];
                return itemB[type] - itemA[type];
            })
        )
    };

    choicePage = (i) =>{
        this.setState({
            showContent: false
        });
        setTimeout(()=> {
            window.scrollTo(0, 0);
            this.setState({
                page: i,
                showContent: true
            })
        }, 500)
    };

    blogList = () =>{
        fetch('/api/takebloglist',
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
                    content: this.sortFuncList('date', 'top', value),
                    finishContent: this.separationByPages(value)
                })
            })
            .catch(error=>{
                console.log(error);
            });
    };

    render() {
        const {finishContent, page, sortTop, sortType, showContent} = this.state;
        if (finishContent) {
            return (
                <div style={{marginLeft: '6%',marginRight: '6%'}}>
                    <SortButtons sortList={this.sortList} sortType={sortType} sortTop={sortTop}/>
                    {
                    showContent?
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <ArticlesList finishContent={finishContent} page={page}/>
                            <PageButtons finishContent={finishContent} page={page} choicePage={this.choicePage}/>
                        </ScrollAnimation>
                    :
                        <LoadingRender/>
                    }
                </div>
            );
        }
        return <LoadingContent/>
    }
}

export default BlogList;