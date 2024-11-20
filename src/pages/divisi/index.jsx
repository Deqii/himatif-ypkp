import Footer from "@/components/fragments/Footer";
import Image from "next/image";
import React from "react";

const AnggotaDivisi = () => {
  const anggotaInti = [
    {
      name: "M Alief Alfiansyah",
      role: "Ketua HIMATIF Periode 2024",
      image: "/assets/images/Inti/Muhammad Alief Alfiansyah Ramadhan.png",
    },
    {
      name: "Anissa Luthfyantie",
      role: "Staff HIMATIF Periode 2024",
      image: "/assets/images/Inti/Anissa Luthfyantie Suyitno.png",
    },
    {
      name: "Nelis Virda",
      role: "Staff HIMATIF Periode 2024",
      image: "/assets/images/Inti/Nelis Virda Ferdiana.png",
    },
    {
      name: "Ratnawati",
      role: "Staff HIMATIF Periode 2024",
      image: "/assets/images/Inti/Ratnawati.png",
    },
  ];

  return (
    <>
      <div className="divisi-anggota-container">
        <div className="inti" id="inti">
          <div className="divisi-top">
            <h1 className="highlight">INTI</h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            {anggotaInti.map((inti, index) => (
              <div key={index} className="divisi-inti">
                <Image
                  className="divisi-inti-img"
                  width={130}
                  height={200}
                  alt="anggota"
                  src={inti.image}
                ></Image>
                <h4>{inti.name}</h4>
                <p>{inti.role}</p>
              </div>
            ))}
          </div>
          <p className="divisi-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            nesciunt, iusto quas illum ea vitae quibusdam magnam quo. Eius
            laborum suscipit libero error, quasi sequi hic? Necessitatibus illo
            quia enim repellat in at velit sit eveniet amet! Tenetur blanditiis
            veniam ipsam placeat dignissimos laborum aliquid. Reprehenderit
            repellat pariatur architecto consequatur?
          </p>
        </div>
        <br />
        <div className="divisi-top">
          <h1>
            JOBDESC <span className="highlight">INTI</span>
          </h1>
          <h3>Pembagian Jobdesc INTI HIMATIF Periode 2024</h3>
        </div>
        <div className="inti-carousel">
          <h1 className="highlight">Contoh1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in
            rerum reiciendis ipsam officia molestiae nobis, vel magnam numquam
            odit culpa, incidunt exercitationem blanditiis facilis at maxime
            dolor, quidem aspernatur maiores minus est. Quam, ratione sunt.
            Obcaecati cum dolore odit minima! Maxime, dolores?
          </p>
        </div>
        <div className="re-carousel" id="re">
          <div className="divisi-top">
            <h1>
              Divisi <span className="highlight">RESEARCH AND EDUCATION</span>
            </h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
            <div className="divisi-anggota">
              <Image
                className="divisi-anggota-img"
                width={130}
                height={200}
                alt="anggota"
                src="/assets/images/ASTA.jpeg"
              ></Image>
              <h4>Rizky Surya</h4>
              <p>Ketua Himpunan Informatika Periode 2024</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnggotaDivisi;
