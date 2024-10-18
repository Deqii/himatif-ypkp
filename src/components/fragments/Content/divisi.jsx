import Image from "next/image";

const Divisi = () => {
  const divisiData = [
    {
      name: "RE",
      title: "Research and Education",
      members: [
        { name: "John Doe", role: "Ketua Divisi" },
        { name: "Jane Doe", role: "Wakil Ketua" },
      ],
      description:
        "Divisi yang bertanggung jawab atas penelitian dan edukasi anggota.",
    },
    {
      name: "CNB",
      title: "Community and Business",
      members: [
        { name: "Alice Smith", role: "Ketua Divisi" },
        { name: "Bob Johnson", role: "Wakil Ketua" },
      ],
      description:
        "Divisi yang bertugas membangun hubungan dengan komunitas dan bisnis.",
    },
    {
      name: "HRDO",
      title: "Human Resources Development and Organization",
      members: [
        { name: "Sarah Brown", role: "Ketua Divisi" },
        { name: "Michael White", role: "Wakil Ketua" },
      ],
      description:
        "Divisi yang mengembangkan sumber daya manusia dan organisasi.",
    },
    {
      name: "PR",
      title: "Public Relations",
      members: [
        { name: "Emily Green", role: "Ketua Divisi" },
        { name: "David Blue", role: "Wakil Ketua" },
      ],
      description: "Divisi yang bertanggung jawab atas hubungan masyarakat.",
    },
  ];

  return (
    <>
      <div className="divisi-container">
        <h2>Divisi Himpunan</h2>
        {divisiData.map((divisi, index) => (
          <div key={index} className="divisi-item">
            <h3>{divisi.title}</h3>
            <p>{divisi.description}</p>
            <div className="divisi-members">
              {divisi.members.map((member, index) => (
                <div key={index} className="member">
                  <p>
                    <strong>{member.name}</strong>
                  </p>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="program-kerja-section">
        <h2>Program Kerja Kami</h2>
        <div className="program-kerja-container">
          <div className="program-item">
            <Image
              href=""
              src="/assets/images/1.jpg"
              alt="Invention 2023"
              width={400}
              height={300}
            />
            <h3>INVENTION 2023</h3>
            <p>Program inovasi...</p>
          </div>
          <div className="program-item">
            <Image
              href=""
              src="/assets/images/1.jpg"
              alt="Optimus 2023"
              width={400}
              height={300}
            />
            <h3>OPTIMUS 2023</h3>
            <p>Program optimalisasi...</p>
          </div>
          <div className="program-item">
            <Image
              href=""
              src="/assets/images/2.jpg"
              alt="Supremasi XVI"
              width={400}
              height={300}
            />
            <h3>SUPREMASI XVI</h3>
            <p>Supremasi adalah...</p>
          </div>
        </div>
      </section>

      <div className="tentang-kami">
        {/* Bagian Header Video */}
        <section className="header-section">
          <h1>
            Mars <span className="highlight">Informatika</span>
          </h1>
          <p>Mars Himpunan Mahasiswa Teknik Informatika</p>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/watch?v=UC0bEkEYH8A"
              title="Mars Informatika usb"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Bagian Sejarah HIMAIF */}
        <section className="sejarah-section">
          <h2>
            Sejarah <span className="highlight">HIMATIF</span>
          </h2>
          <p>Sejarah Himpunan Mahasiswa Teknik Informatika Fakultas Teknik</p>
        </section>

        {/* Bagian Ketua HIMAIF */}
        <section className="ketua-section">
          <h2>
            Ketua <span className="highlight">HIMATIF 2024</span>
          </h2>
          <div className="ketua-info">
            <div className="ketua-image">
              <Image
                src="/assets/images/1.jpg"
                href=""
                alt="Ketua HIMAIF"
                width={200}
                height={200}
              />
            </div>
            <div className="ketua-description">
              <h3>
                thisiskisur | Ketua Himpunan Mahasiswa Informatika Periode 2024
              </h3>
              <h4>Visi:</h4>
              <p>
                Mewujudkan kepengurusan Himpunan Mahasiswa Ilmu Komputer Udayana
                sebagai lembaga kemahasiswaan yang loyal, inovatif, dan
                berdedikasi.
              </p>
              <h4>Misi:</h4>
              <ul>
                <li>
                  Meningkatkan internal yang mendukung profesionalitas kinerja
                  organisasi.
                </li>
                <li>Mengembangkan program kerja yang inovatif.</li>
                <li>Meningkatkan relasi dengan lembaga mahasiswa lainnya.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Divisi;
