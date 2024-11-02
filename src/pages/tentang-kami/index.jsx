import Footer from "@/components/fragments/Footer";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="container-about">
        <div className="title">
          <h1>
            Mars <span className="highlight">Informatika</span>
          </h1>
          <h3>Mars Prodi Informatika USB</h3>
        </div>
      </div>

      <div className="youtube-video-container">
        <iframe
          className="youtube-video"
          width="560"
          height="315"
          src="https://youtu.be/b65ZB35oYMY?si=XJ9zLMYuAJM0EY8Y"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container-about">
        <div className="title">
          <h1>
            Sejarah <span className="highlight">HIMATIF</span>
          </h1>
          <h3>Sejarah Himpunan Mahasiswa Teknik Informatika USB</h3>
          <div className="paragraph">
            <p>
              HIMPUNAN MAHASISWA TEKNIK INFORMATIKA USB YPKP Bandung Himpunan
              Mahasiswa Teknik Informatika USB YPKP Bandung adalah suatu wadah
              organisasi dari mahasiswa Fakultas Teknik Universitas Sangga Buana
              YPKP Bandung sebagai lembaga aspiratif
            </p>
            <p>
              Himpunan Mahasiswa Teknik Informatika USB YPKP Bandung berdiri (
              21 Juli 2022 ). Himpunan Mahasiswa Teknik Informatika USB YPKP
              Bandung Berkedudukan di Universitas Sangga Buana YPKP Bandung.
              Himpunan Mahasiswa Teknik Informatika USB YPKP Bandung didirikan
              berdasarkan landasan pancasila serta berasaskan pada Tri Dharma
              Perguruan Tinggi.
            </p>
          </div>
        </div>

        <div className="container-about">
          <div className="title">
            <h1>
              Ketua <span className="highlight">HIMATIF 2024</span>
            </h1>
            <h3>Ketua Himpunan Mahasiswa Teknik Informatika USB</h3>
          </div>
        </div>
      </div>

      <div className="container-ketua">
        <div className="ketua-image">
          <Image
            src="/assets/images/ASTA.jpeg"
            width={400}
            height={600}
            alt="ketua"
          ></Image>
        </div>

        <div className="ketua-info">
          <div className="ketua-profile">
            <div className="ketua-description">Visi :</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore qui recusandae consequuntur quibusdam in reiciendis at
              voluptatibus delectus porro, voluptates reprehenderit unde
              consequatur obcaecati dolor quaerat. Voluptatum et aperiam illum?
            </p>
            <br />
            <div className="ketua-description">Misi :</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              reiciendis ab distinctio doloribus, cupiditate rem nam! Totam
              adipisci sequi natus atque vitae, beatae quae ullam unde earum
              incidunt consequatur! Temporibus nobis cupiditate, vitae ad itaque
              delectus distinctio mollitia inventore, nulla quis ipsam modi,
              error possimus pariatur accusamus neque. Nostrum, unde.
            </p>
          </div>
          <div>
            <span className="ketua-name">Rizky Surya</span> |{" "}
            <span>Ketua Himpunan Mahasiswa Informatika Periode 2024</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
