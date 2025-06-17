import React, { Component } from 'react';
import NewsItem from './newsitem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {

  static defaultProps ={
    country: 'in'
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  } 

  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      moreResultsAvailable: 0
    }
    document.title = "NewsMonkey - " + this.props.category
   }

  async componentDidMount(){
    this.props.setProgress(10);
    // let url = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=da235584d2672143387b7e3886b4cb31&page=1`;
    let url = `https://api.webz.io/newsApiLite?token=7af08aa9-3fd2-4c08-bdf7-1c75e2e95bce&q=${this.props.category}&country=${this.props.country}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData)
    console.log(this.articles + "this is the response")
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.posts,
      loading: false,
      totalResults: parsedData.moreResultsAvailable
    })
    this.props.setProgress(100);
  }

  // previous = async()=>{
  //   let url = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=da235584d2672143387b7e3886b4cb31&page=${this.state.page - 1}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData)
  //   this.setState({articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //     totalResults: parsedData.totalResults
  //   })
  // }
  // next = async() =>{
  //   let url = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&country=${this.props.country}&max=10&apikey=da235584d2672143387b7e3886b4cb31&page=${this.state.page + 1}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData)
  //   this.setState({articles: parsedData.articles,
  //     page: this.state.page + 1,
  //     loading: false,
  //     totalResults: parsedData.totalResults
  //   })
  // }

  fetchMoreData = async() => {
    let url = `https://api.webz.io/newsApiLite?token=7af08aa9-3fd2-4c08-bdf7-1c75e2e95bce&q=${this.props.category}&country=${this.props.country}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.posts),
      page: this.state.page + 1,
      loading: false,
      totalResults: parsedData.moreResultsAvailable
    })
  }

  render() {

    let {mode, mystyle, cardstyle} = this.props;
    return (
        <>
            <div className='container my-3' style={mystyle}>
              <h3 className={`my-5 text-center text-${mode ? 'light' : 'dark'}`}>NewsMonkey - Top News</h3>
              {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.moreResultsAvailable}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.thread.title} discription={element.thread.highlightText} imageUrl={element.thread.main_image} newsurl={element.thread.url} publishedAt={element.thread.published} name={element.thread.site} mode={mode} mystyle={mystyle} cardstyle={cardstyle} />
                </div>
              })}
            </div>
            </div>
          </InfiniteScroll>
            </div>
            {/* <div className="container d-flex justify-content-evenly">
            <button disabled ={this.state.page <= 1} type="button" className={`btn btn-${mode ? 'light' : 'dark'}`} onClick={this.previous}> &larr; Previous</button>
            <button type="button" className={`btn btn-${mode ? 'light' : 'dark'}`} onClick={this.next}>Next &rarr;</button>
            </div> */}
        </>
    );
  }
}

export default news;
