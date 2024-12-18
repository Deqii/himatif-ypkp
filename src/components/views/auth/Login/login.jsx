import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.target;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        username: form.username.value,
        password: form.password.value,
        callbackUrl,
      });

      console.log("Response:", res);

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push("/admin");
      } else {
        setIsLoading(false);
        setError(res.error);
      }
    } catch (error) {
      setError("Username atau password salah");
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__container__form}>
          {error && (
            <p className={styles.login__container__form__error}>{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <h1 className={styles.login__container__title}>Login</h1>
            <p>Masuk ke akun HIMATIF 2024!</p>
            <div className={styles.login__container__form__item}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className={styles.login__container__form__item__input}
              />
            </div>
            <div className={styles.login__container__form__item}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={styles.login__container__form__item__input}
              />
            </div>
            <button
              type="submit"
              className={styles.login__container__form__button}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
            <p>
              Belum Punya Akun?{" "}
              <Link
                className={styles.login__container__form__link}
                href="/auth/register"
              >
                <span>Register Disini</span>
              </Link>
            </p>
          </form>
        </div>
        <div className={styles.login__container__image}>
          <Image
            src="/assets/images/signup.png"
            alt="login"
            width={300}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
