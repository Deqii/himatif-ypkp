import React, { useState } from "react";

const FeedbackForm = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Kritik dan Saran</h1>
        <p>Punya kritik dan saran? Yuk langsung diisi ya . . .</p>
        <div className="form-container">
          <input placeholder="Masukan Saranmu" type="text" />
          <button>Kirim</button>
        </div>
      </div>
      <div className="image-container">
        <img
          alt="An illustration of an open envelope with an '@' symbol on a letter inside"
          height="200"
          src="https://storage.googleapis.com/a1aa/image/4fa3ENqTZ7TsKiTa9zmYoFeImBfJ8kI9tHaGPgrvedzEM8xOB.jpg"
          width="200"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;
