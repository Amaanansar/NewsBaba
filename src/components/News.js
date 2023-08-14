import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import loader from './Spinner'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: "",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalData: 0,
    }
    document.title = this.props.category === "general" ? "NewsBaba" : `${this.capitalizeFirstLetter(this.props.category)} - NewsBaba`
  }
   async componentDidMount() { 
     this.updateNews()
     this.setState({ page: this.state.page + 1 })
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e87ea980601441b5908e425f2f7a1a81&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles,
      totalData: parseData.totalResults,
      loading: false,
    });
  } 

   handlePrevclick = async () => {
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e87ea980601441b5908e425f2f7a1a81&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;

     this.setState({ loading: true });

     let data = await fetch(url);
     let parseData = await data.json();
       this.setState({ loading: false });
     this.setState({
       page: this.state.page - 1,
       articles: parseData.articles,
       loading: false,
     });
   };

   handleNextclick = async () => {
     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))
     ) {
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e87ea980601441b5908e425f2f7a1a81&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

       this.setState({ loading: true });

       let data = await fetch(url);
       let parseddata = await data.json();
       this.setState({ loading: false})
       this.setState({
         page: this.state.page + 1,
         articles: parseddata.articles,
         loading: false,
       });
     }
   };

  render() {

    return (
      <>
        <h2 className='text-center my-4'>NewsBaba - Top News Headlines{this.props.category === "general" ? "" : ` from ${this.capitalizeFirstLetter(this.props.category)}`}</h2>
         
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                <Spinner />
                return <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem titles={element.title.length > 45 || element.title != null ? `${element.title.slice(0, 45).trim()}...` : element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} dates={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
          <div className="container d-flex justify-content-between ">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
               this.props.pageSize
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
        {/* </InfiniteScroll> */}
      </>
    )
  }
}

export default News
