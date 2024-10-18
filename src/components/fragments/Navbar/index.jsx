import React from "react"; // Gunakan Link untuk routing
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <Image
            className="logo"
            src="/assets/icons/ic-logo.ico"
            alt="HIMAIF"
            width={80}
            height={80}
          />
          <span>HIMATIF</span>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/tentang">Tentang Kami</Link>
          </li>
          <li>
            <Link href="/divisi">Divisi</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/hubungi">Hubungi Kami</Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <Link href="/auth/register" className="btn btn-register">
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
