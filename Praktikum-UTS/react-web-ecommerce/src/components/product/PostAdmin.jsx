import React from 'react'

const Post = (props) => {
  return (
    <div className="artikel">
      <div className="gambar-artikel">
        <img src={props.image} alt="Gambar Thumbnail Artikel" />
      </div>
      <div className="konten-artikel row">
        <div className="col-lg-8">
          <div className="judul-artikel">{props.name}</div>
          <p className="isi-artikel">ID : {props.id}</p>
          <p className="isi-artikel">Nama : {props.name}</p>
          <p className="isi-artikel">Harga : {props.price}</p>
        </div>
        <div className="col-lg-4">
          <p className="isi-artikel">Stok : {props.stock}</p>
          <button
            className="btn btn-danger"
            onClick={() => props.hapusProduct(props.id)}
          >
            Hapus Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post
