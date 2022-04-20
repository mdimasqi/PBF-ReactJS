import React from 'react'

const Profile = () => {
  return (
    <>
      <h3 className="text-center">Profile Mahasiswa</h3>
      <div class="row">
        <div class="col-lg-8">
          <table class="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
            <tbody>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>MOCHAMMAD DIMASQI ALIFFUDIN FAIZ</td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td>Laki-Laki</td>
              </tr>
              <tr>
                <td>Perguruan Tinggi</td>
                <td>:</td>
                <td>Politeknik Negeri Malang</td>
              </tr>
              <tr>
                <td>Program Studi</td>
                <td>:</td>
                <td>Teknik Informatika</td>
              </tr>
              <tr>
                <td>Jenjang</td>
                <td>:</td>
                <td>D4</td>
              </tr>
              <tr>
                <td>Kelas</td>
                <td>:</td>
                <td>TI-3D</td>
              </tr>
              <tr>
                <td>NIM</td>
                <td>:</td>
                <td>1941720165</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <img src="https://avatars.githubusercontent.com/u/55468763?v=4" />
        </div>
      </div>
    </>
  )
}

export default Profile
