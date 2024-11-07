import React from "react"; // Gunakan Link untuk routing
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            <Link href="/tentang-kami">Tentang Kami</Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <Link href="">Divisi</Link>
            <Image
              alt="dropdown-icon"
              src="/assets/icons/drop-down.png"
              width={10}
              height={10}
              className="dropdown-icon"
            ></Image>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="/divisi#inti">Inti</a>
                <a href="/divisi#re">Research and Education</a>
                <a href="/divisi#community">Community and Business</a>
                <a href="/divisi#hr">
                  Human Resources Development and Organization
                </a>
                <a href="/divisi#public">Public Relations</a>
              </div>
            )}
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
