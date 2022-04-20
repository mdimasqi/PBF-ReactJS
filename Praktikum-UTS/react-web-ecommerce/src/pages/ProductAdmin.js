import React, { Component } from 'react'
import './Product.css'
import Post from '../components/product/PostAdmin'

export default class ProductAdmin extends Component {
  state = {
    listProduct: [],
    insertProduct: {
      id: 1,
      name: '',
      price: '',
      stock: '',
      image: '',
    },
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

  handleHapusProduct = (data) => {
    fetch(`http://localhost:3001/products/${data}`, { method: 'DELETE' }).then(
      (res) => this.ambilDataDariServerAPI()
    )
  }

  handleTambahKeranjang = (event) => {
    let formInsertProduct = { ...this.state.insertProduct }
    let timestamp = new Date().getTime()
    formInsertProduct['id'] = timestamp
    formInsertProduct[event.target.name] = event.target.value
    this.setState({
      insertProduct: formInsertProduct,
    })
  }

  handleTombolSimpan = () => {
    fetch(`http://localhost:3001/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.insertProduct),
    }).then((res) => this.ambilDataDariServerAPI())
  }

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleTambahKeranjang}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Harga
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                onChange={this.handleTambahKeranjang}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stock" className="col-sm-2 col-form-label">
              Stok
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="stock"
                name="stock"
                onChange={this.handleTambahKeranjang}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="image" className="col-sm-2 col-form-label">
              Gambar Online
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                onChange={this.handleTambahKeranjang}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
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
              hapusProduct={this.handleHapusProduct}
            />
          )
        })}
      </div>
    )
  }
}
