import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {titles, description, imageUrl,newsUrl,author,dates,source} = this.props;
    return (
      <div>
        <div className="card">
        <small><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source}</span></small> 
        <img src={!imageUrl?"https://c.ndtvimg.com/2023-04/ejv5grm8_amit-shah-pti-650-_650x400_10_April_23.jpg":imageUrl} style={{height:"200px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{titles}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {!author || author.includes("https://")? "Unknown" : author} on {new Date(dates).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
