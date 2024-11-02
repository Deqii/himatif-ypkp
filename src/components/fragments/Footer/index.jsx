const Footer = () => {
  return (
    <div className="container-footer">
      <div className="wrapper">
        <div className="left">
          <h1>
            <div>
              HIMATIF <span className="highlight">USB</span>
            </div>
          </h1>
          <p>
            Himpunan Mahasiswa Informatika atau HIMAIF adalah salah satu Lembaga
            Mahasiswa yang berada di lingkungan Fakultas Matematika dan Ilmu
            Pengetahuan Alam Universitas Udayana
          </p>
        </div>
        <div className="middle">
          <h2>Divisi Kami</h2>
          <ul>
            <li>
              <a href="">Inti</a>
            </li>
            <li>
              <a href="">Pendidikan</a>
            </li>
            <li>
              <a href="">Minat dan Bakat</a>
            </li>
            <li>
              <a href="">Kesejahteraan Mahasiswa</a>
            </li>
            <li>
              <a href="">Hubungan Masyarakat</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <h2>Lainnya</h2>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
