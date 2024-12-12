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

  const anggotaCnB = [
    {
      name: "Ilham Nurfaridzal",
      role: "Ketua CnB Periode 2024",
      image: "/assets/images/CnB/Ilham Nurfaridzal.png",
    },
    {
      name: "Ajeng Olipia Putri",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Ajeng Olipia Putri.png",
    },
    {
      name: "Destriana Aulia Saepudin",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Destriana Aulia Saepudin.png",
    },
    {
      name: "Firdi Shaumi Destiawan",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Firdi Shaumi Destiawan.png",
    },
    {
      name: "Gemintang Dwina Septiani",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Gemintang Dwina Septiani.png",
    },
    {
      name: "Marsha Amelinda",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Marsha Amelinda.png",
    },
    {
      name: "Muhammad Sahal Akira Ghirazdha",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Muhammad Sahal Akira Ghirazdha.png",
    },
    {
      name: "Reza Pangestu Sukarno Putra",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Reza Pangestu Sukarno Putra.png",
    },
    {
      name: "Roihan Sundafa",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Roihan Sundafa.png",
    },
    {
      name: "Yusuf Arif Fauzi",
      role: "Staff CnB Periode 2024",
      image: "/assets/images/CnB/Yusuf Arif Fauzi.png",
    },
  ];

  const anggotaHRDO = [
    {
      name: "Fahmi Ramadhan Hidayat",
      role: "Ketua HRDO Periode 2024",
      image: "/assets/images/HRDO/Fahmi Ramadhan Hidayat.png",
    },
    {
      name: "Adrian Nuryana",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Adrian Nuryana.png",
    },
    {
      name: "Alizka Rizka Nur'aini Rahman",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Alizka Rizka Nuraini Rahman.png",
    },
    {
      name: "Dedi Kurniawan Fatmona",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Dedi Kurniawan Fatmona.png",
    },

    {
      name: "Fahriza Nur Ramdan",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Fahriza Nur Ramdan.png",
    },
    {
      name: "Hilda Sarah Nurapipah",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Hilda Sarah Nurapipah.png",
    },
    {
      name: "Kanaya Tabitha Putri",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Kanaya Tabitha Putri.png",
    },
    {
      name: "Nurjanah Asyari",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Nurjanah Asyari.png",
    },
    {
      name: "Nurjanah Asyari",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Nurjanah Asyari.png",
    },
    {
      name: "Putri Septiani",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Putri Septiani.png",
    },
    {
      name: "Raihan Daffa Fauzan",
      role: "Staff HRDO Periode 2024",
      image: "/assets/images/HRDO/Raihan Daffa Fauzan.png",
    },
  ];

  const anggotaPR = [
    {
      name: "Andre Rizky Saputra",
      role: "Ketua PR Periode 2024",
      image: "/assets/images/PR/Andre Rizky Saputra.png",
    },
    {
      name: "Agung Surya Wijaya",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Agung Surya Wijaya.png",
    },
    {
      name: "Alvin Daniel Makmur",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Alvin Daniel Makmur.png",
    },
    {
      name: "Chesta Jaka Adabi",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Chesta Jaka Adabi.png",
    },
    {
      name: "Danis Lesmana",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Danis Lesmana.png",
    },
    {
      name: "Fauzan Nur Ilham",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Fauzan Nur Ilham.png",
    },
    {
      name: "Naja Fahri Nafsan",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Naja Fahri Nafsan.png",
    },
    {
      name: "Shula Khalid Mauliawan",
      role: "Staff PR Periode 2024",
      image: "/assets/images/PR/Shula Khalid Mauliawan.png",
    },
  ];

  const anggotaRE = [
    {
      name: "Rizky Surya Alfarizy",
      role: "Ketua RE Periode 2024",
      image: "/assets/images/RE/Rizky Surya Alfarizy.png",
    },
    {
      name: "Adhitya Senjaya Putra",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Adhitya Senjaya Putra.png",
    },
    {
      name: "Arrahman",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Arrahman.png",
    },
    {
      name: "Della Rosmawati Ningsih",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Della Rosmawati Ningsih.png",
    },
    {
      name: "Dicky Dilfa Rhizkya",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Dicky Dilfa Rhizkya.png",
    },
    {
      name: "Erlangga Yuda Pratama",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Erlangga Yuda Pratama.png",
    },
    {
      name: "Farhan Syahputra",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Farhan Syahputra.png",
    },
    {
      name: "Iqbal Muhammad Yanuar",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Iqbal Muhammad Yanuar.png",
    },
    {
      name: "Mochamad Syukur",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Mochamad Syukur.png",
    },
    {
      name: "Wildan Septian",
      role: "Staff RE Periode 2024",
      image: "/assets/images/RE/Wildan Septian.png",
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
        </div>

        <div className="re" id="re">
          <div className="divisi-top">
            <h1 className="highlight">Research and Education</h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            {anggotaRE.map((re, index) => (
              <div key={index} className="divisi-anggota">
                <Image
                  className="divisi-anggota-img"
                  width={130}
                  height={200}
                  alt="anggota"
                  src={re.image}
                ></Image>
                <h4>{re.name}</h4>
                <p>{re.role}</p>
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
          <br />
          <div className="divisi-top">
            <h1>
              JOBDESC <span className="highlight">Research and Education</span>
            </h1>
            <h3>Pembagian Jobdesc RE HIMATIF Periode 2024</h3>
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
        </div>

        <div className="cnb" id="cnb">
          <div className="divisi-top">
            <h1 className="highlight">Community and Business</h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            {anggotaCnB.map((cb, index) => (
              <div key={index} className="divisi-anggota">
                <Image
                  className="divisi-anggota-img"
                  width={130}
                  height={200}
                  alt="anggota"
                  src={cb.image}
                ></Image>
                <h4>{cb.name}</h4>
                <p>{cb.role}</p>
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
          <br />
          <div className="divisi-top">
            <h1>
              JOBDESC <span className="highlight">Community and Business</span>
            </h1>
            <h3>Pembagian Jobdesc CnB HIMATIF Periode 2024</h3>
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
        </div>

        <div className="hrdo" id="hrdo">
          <div className="divisi-top">
            <h1 className="highlight">
              Human Resources Development and Organization
            </h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            {anggotaHRDO.map((hrdo, index) => (
              <div key={index} className="divisi-anggota">
                <Image
                  className="divisi-anggota-img"
                  width={130}
                  height={200}
                  alt="anggota"
                  src={hrdo.image}
                ></Image>
                <h4>{hrdo.name}</h4>
                <p>{hrdo.role}</p>
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
          <br />
          <div className="divisi-top">
            <h1>
              JOBDESC{" "}
              <span className="highlight">
                Human Resources Development and Organization
              </span>
            </h1>
            <h3>Pembagian Jobdesc HRDO HIMATIF Periode 2024</h3>
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
        </div>

        <div className="pr" id="pr">
          <div className="divisi-top">
            <h1 className="highlight">Public Relations</h1>
            <h3>Himpunan Mahasiswa Informatika Periode 2024</h3>
          </div>
          <div className="divisi-content">
            {anggotaPR.map((pr, index) => (
              <div key={index} className="divisi-anggota">
                <Image
                  className="divisi-anggota-img"
                  width={130}
                  height={200}
                  alt="anggota"
                  src={pr.image}
                ></Image>
                <h4>{pr.name}</h4>
                <p>{pr.role}</p>
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
          <br />
          <div className="divisi-top">
            <h1>
              JOBDESC <span className="highlight">Public Relations</span>
            </h1>
            <h3>Pembagian Jobdesc PR HIMATIF Periode 2024</h3>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnggotaDivisi;
