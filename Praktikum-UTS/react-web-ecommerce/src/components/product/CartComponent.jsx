import React from 'react'

const CartComponent = (props) => {
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
          <p className="isi-artikel">Jumlah : {props.qty}</p>
          <p className="isi-artikel">Subtotal : {props.qty * props.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => props.hapusKeranjang(props.id)}
          >
            Hapus dari Kerajang
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
