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
      icon: "/assets/icons/research.png",
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
      icon: "/assets/icons/community.png",
    },
    {
      name: "Inti",
      title: "Inti",
      members: [
        { name: "John Doe", role: "Ketua Divisi" },
        { name: "Jane Doe", role: "Wakil Ketua" },
      ],
      description:
        "Inti bertanggung jawab untuk mengawasi dan mengarahkan seluruh aspek yang ada dalam Himpunan Mahasiswa Informatika",
      icon: "/assets/icons/inti.png",
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
      icon: "/assets/icons/human-resources.png",
    },
    {
      name: "PR",
      title: "Public Relations",
      members: [
        { name: "Emily Green", role: "Ketua Divisi" },
        { name: "David Blue", role: "Wakil Ketua" },
      ],
      description: "Divisi yang bertanggung jawab atas hubungan masyarakat.",
      icon: "/assets/icons/public-relations.png",
    },
  ];

  return (
    <>
      <div className="divisi-container">
        <div className="divisi-top">
          <h1>
            Divisi <span className="highlight">Kami</span>
          </h1>
          <h3>Divisi di Himpunan Mahasiswa Universitas Sangga Buana</h3>
        </div>
        <div className="divisi-bottom">
          {divisiData.map((divisi, index) => (
            <div key={index} className="divisi-item">
              <Image src={divisi.icon} width={60} height={60}></Image>
              <h3>{divisi.title}</h3>
              <p>{divisi.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="program-kerja-section">
        <h1>
          Program Kerja <span className="highlight">Kami</span>
        </h1>
        <h3>Program Kerja di Himpunan Mahasiswa Informatika</h3>
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
    </>
  );
};

export default Divisi;
