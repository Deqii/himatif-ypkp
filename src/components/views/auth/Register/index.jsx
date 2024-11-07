import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Image from "next/image";

const RegisterView = () => {
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.target;
    const data = {
      npm: form.npm.value,
      nama: form.nama.value,
      jenis_kelamin: gender,
      kelas: form.kelas.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);

      push("/");
    } else {
      setIsLoading(false);
      setError("NPM sudah ada");
    }
  };

  return (
    <div className={styles.register}>
      {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__container}>
        <div className={styles.register__container__form}>
          <form onSubmit={handleSubmit}>
            <h1 className={styles.register__container__title}>Daftar</h1>
            <p>Ayo daftarkan diri anda dan jadilah bagian dari HIMATIF 2024!</p>
            <div className={styles.register__container__form__item}>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Nama Lengkap"
                className={styles.register__container__form__item__input}
              />
            </div>
            <div className={styles.register__container__form__item}>
              <input
                type="text"
                name="npm"
                id="npm"
                placeholder="NPM"
                className={styles.register__container__form__item__input}
              />
            </div>
            <div className={styles.register__container__form__item}>
              <input
                type="text"
                name="kelas"
                id="kelas"
                placeholder="Kelas"
                className={styles.register__container__form__item__input}
              />
            </div>
            <div className={styles.register__container__form__item}>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="jenis_kelamin"
                id="jenis_kelamin"
                className={styles.register__container__form__item__input}
              >
                <option
                  className={
                    styles.register__container__form__item__input__placeholder
                  }
                  value=""
                  disabled
                  selected
                >
                  Pilih Jenis Kelamin
                </option>
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <button
              type="submit"
              className={styles.register__container__form__button}
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
            <p>
              Anda Sudah Punya Akun?{" "}
              <Link
                className={styles.register__container__form__link}
                href="/auth/login"
              >
                <span>Masuk Disini</span>
              </Link>
            </p>
          </form>
        </div>
        <div className={styles.register__container__image}>
          <Image
            src="/assets/images/signup.png"
            alt="register"
            width={300}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
