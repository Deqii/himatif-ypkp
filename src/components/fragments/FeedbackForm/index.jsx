import Image from "next/image";

const FeedbackForm = () => {
  return (
    <div className="container" id="feedback">
      <div className="content">
        <h1>Kritik dan Saran</h1>
        <p>Punya kritik dan saran? Yuk langsung diisi ya . . .</p>
        <div className="form-container">
          <input placeholder="Masukan Saranmu" type="text" />
          <button>Kirim</button>
        </div>
      </div>
      <div className="image-container">
        <Image
          alt="email-icon"
          height="200"
          src="/assets/icons/email.png"
          width="200"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
