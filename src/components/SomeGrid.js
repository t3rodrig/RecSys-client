import React, { Component } from 'react';
import ProductService from '../services/product-service';

class SomeGrid extends Component {
    constructor() {
      super();
      this.state = { listOfProducts: [] };
      this.service = new ProductService();
    }
  
    fetchProducts = () => {
      if (this.state.listOfProducts.length === 0) {
        this.service.getAllProducts()
        .then(response => {
          if (response){
            this.setState({listOfProducts: response});
          } else {
            console.log('Something wrong with the request'); 
            this.setState({listOfProducts: []})
          }
        })
        .catch(err => this.setState({listOfProducts: []}));
      }
    }
  
    render = () => {
    //   const listOfProducts = this.state.listOfProducts;
      return (
        <div className="album py-5 bg-light">
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height={225}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        View
                        </button>
                        <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        >
                        Edit
                        </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
      );
    }
  }
  
  export default SomeGrid;