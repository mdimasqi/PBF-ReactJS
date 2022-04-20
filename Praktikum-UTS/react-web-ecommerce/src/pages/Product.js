import React, { Component } from 'react'
import './Product.css'
import Post from '../components/product/Post'

export default class Product extends Component {
  state = {
    listProduct: [],
  }

  ambilDataDariServerAPI = () => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          listProduct: result,
        })
      })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  handleTambahKeranjang = (id, name, price, stock, image) => {
    let timestamp = new Date().getTime()
    const data = {
      id: timestamp,
      id_product: id,
      name: name,
      price: price,
      image: image,
      qty: 1,
    }
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.stock > 0) {
          fetch(`http://localhost:3002/carts?id_product=${id}`)
            .then((res) => res.json())
            .then((result) => {
              if (result.length > 0) {
                const dataAdd = {
                  id: timestamp,
                  id_product: id,
                  name: name,
                  price: price,
                  image: image,
                  qty: result[0].qty + 1,
                }
                fetch(`http://localhost:3002/carts/${result[0].id}`, {
                  method: 'PUT',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(dataAdd),
                }).then((res) => {
                  const dataProduct = {
                    stock: stock - 1,
                    name: name,
                    price: price,
                    image: image,
                  }
                  fetch(`http://localhost:3001/products/${id}`, {
                    method: 'PUT',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataProduct),
                  }).then((res) => this.ambilDataDariServerAPI())
                })
              } else {
                fetch(`http://localhost:3002/carts`, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                }).then((res) => {
                  const dataProduct = {
                    stock: stock - 1,
                    name: name,
                    price: price,
                    image: image,
                  }
                  fetch(`http://localhost:3001/products/${id}`, {
                    method: 'PUT',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataProduct),
                  }).then((res) => this.ambilDataDariServerAPI())
                })
              }
            })
        } else {
          alert('stock habis')
        }
      })
  }

  render() {
    return (
      <div className="post-artikel">
        <h2>Daftar Produk</h2>
        {this.state.listProduct.map((product, key) => {
          return (
            <Post
              key={key}
              name={product.name}
              id={product.id}
              price={product.price}
              stock={product.stock}
              image={product.image}
              tambahKeranjang={this.handleTambahKeranjang}
            />
          )
        })}
      </div>
    )
  }
}
