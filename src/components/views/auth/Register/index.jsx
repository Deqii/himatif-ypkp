import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

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
      <h1 className={styles.register__title}>Register</h1>
      {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label htmlFor="npm">NPM</label>
            <input
              type="text"
              name="npm"
              id="npm"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              name="nama"
              id="nama"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name="jenis_kelamin"
              id="jenis_kelamin"
              className={styles.register__form__item__input}
            >
              <option value="" disabled></option>
              <option value="Laki-Laki">Laki-Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="kelas">Kelas</label>
            <input
              type="text"
              name="kelas"
              id="kelas"
              className={styles.register__form__item__input}
            />
          </div>
          <button type="submit" className={styles.register__form__button}>
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account? Sign in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
