import React from "react";

const post = (props) => {
    return (
        <div class="artikel">
                <h2>Daftar Artikel</h2>
                <div class="artikel">
                        <div class="gambar-artikel">
                            <img src="http://placeimg.com/640/480/any" alt="Gambar Tumbnail Artikel" />   
                        </div>
                        <div class="konten-artikel">
                            <div class="judul-artikel">Judul Artikel</div>
                            <p class="isi-artikel">Isi Artikel</p>    
                        </div>    
                </div>    
        </div>
    )
}