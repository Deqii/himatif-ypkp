import Link from "next/link";

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
              <Link href="/divisi#inti">Inti</Link>
            </li>
            <li>
              <Link href="/divisi#re">Research and Education</Link>
            </li>
            <li>
              <Link href="/divisi#cnb">Community and Business</Link>
            </li>
            <li>
              <Link href="/divisi#hrdo">
                Human Resources Development and Organization
              </Link>
            </li>
            <li>
              <Link href="/divisi#pr">Public Relations</Link>
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
