import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="logo">
        <Image alt="HIMAIF Logo" height="40" src="" width="40" />
      </div>
      <div class="nav-links">
        <a href="#">Beranda</a>
        <a href="#">Tentang Kami</a>
        <a href="#">Divisi</a>
        <a href="#">FAQ</a>
        <a href="#">Hubungi Kami</a>
      </div>
      <div class="auth-buttons">
        <a class="register" href="#">
          Daftar
        </a>
        <a class="login" href="#">
          Masuk
        </a>
      </div>
    </div>
  );
};

export default Navbar;
