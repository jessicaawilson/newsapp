import React, { Component } from 'react';

export class newsitem extends Component {
  render() {

    let {title, discription, imageUrl, newsurl, publishedAt, name, mode, cardstyle} = this.props;

    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" style={cardstyle}>
              <h5 className={`card-title text-${mode ? 'light' : 'dark'}`}>{title}...</h5>
              <p className={`card-text text-${mode ? 'light' : 'dark'}`}>{discription}...</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className={`list-group-item text-${mode ? 'light' : 'dark'}`} style={cardstyle}>Published At(yyyy-mm-dd): {publishedAt}</li>
              <li className={`list-group-item text-${mode ? 'light' : 'dark'}`} style={cardstyle}>{name}</li>
            </ul>
            <div className="card-body" style={cardstyle}>
            <a href={newsurl} className={`btn btn-${mode ? 'light' : 'dark'} btn-sm`}>Read More</a>
            </div>
        </div>
      </div>
    );
  }
}

export default newsitem;
