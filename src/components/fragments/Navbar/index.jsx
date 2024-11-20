import React from "react"; // Gunakan Link untuk routing
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ishamburgerOpen, setIshamburgerOpen] = useState(false);

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
          <span className="logo-text">HIMATIF</span>
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
                <Link href="/divisi#inti">Inti</Link>
                <Link href="/divisi#re">Research and Education</Link>
                <Link href="/divisi#community">Community and Business</Link>
                <Link href="/divisi#hr">
                  Human Resources Development and Organization
                </Link>
                <Link href="/divisi#public">Public Relations</Link>
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
        <div
          className="hamburger-menu"
          onClick={() => setIshamburgerOpen(!ishamburgerOpen)}
        >
          <Image
            alt="hamburger-menu"
            src="/assets/icons/menu.png"
            width={30}
            height={30}
          />
        </div>
        {ishamburgerOpen && (
          <div className="hamburger-menu-content">
            <Link href="/">Beranda</Link>
            <Link href="/tentang-kami">Tentang Kami</Link>
            <Link href="/divisi">Divisi</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/hubungi">Hubungi Kami</Link>
            <Link href="/auth/register">Daftar</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
