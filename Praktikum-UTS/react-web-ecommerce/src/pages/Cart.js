import React, { Component } from 'react'
import './Product.css'
import Post from '../components/product/Post'
import CartComponent from '../components/product/CartComponent'

export default class Cart extends Component {
  state = {
    listProduct: [],
    total: 0,
  }

  ambilDataDariServerAPI = () => {
    fetch('http://localhost:3002/carts')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listProduct: result,
        })
        this.state.listProduct.map((product, key) => {
          this.setState({
            total: this.state.total + product.price * product.qty,
          })
        })
      })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  handleHapusKeranjang = (data) => {
    fetch(`http://localhost:3002/carts/${data}`, { method: 'DELETE' }).then(
      (res) => this.ambilDataDariServerAPI()
    )
  }

  render() {
    return (
      <div className="post-artikel">
        <h2>Daftar Keranjang</h2>
        {this.state.listProduct.map((product, key) => {
          return (
            <CartComponent
              key={key}
              name={product.name}
              id={product.id}
              price={product.price}
              qty={product.qty}
              image={product.image}
              hapusKeranjang={this.handleHapusKeranjang}
            />
          )
        })}
        <div className="artikel">
          <div className="konten-artikel row">
            <div class="col-lg-8"></div>
            <div class="col-lg-4">
              <p className="isi-artikel">Total : {this.state.total}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
