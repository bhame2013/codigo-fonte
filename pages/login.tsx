import { ButtonComponent } from "components/data/button";
import {
  Form,
  FormHandles,
  InputComponent,
  YupValidation,
} from "components/inputs/core";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import nookies from "nookies";
import { RefObject, useEffect, useRef, useState } from "react";
import { api } from "src/api";
import { useAuth } from "src/contexts/Auth/authContext";

import * as S from "styles/pages/login";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();
  const { signIn } = useAuth();

  async function HandleSubmit(data) {
    const Yup = await import("yup");

    const { email, password } = data;

    try {
      setLoading(true);
      setError("");

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Please enter a email"),
        password: Yup.string().required("Please enter a password."),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

      await signIn({ email, password });

      router.push("/");
    } catch (err: any) {
      setLoading(false);

      const yupError = err instanceof Yup.ValidationError;

      if (err.message && !yupError) {
        setError(err.message);
      }

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <S.Login>
      <h3 className="title-6-light">Codie Code</h3>

      <div className="socials">
        <Form ref={formRef} onSubmit={HandleSubmit}>
          {error.length > 0 && (
            <p className="error paragraph-3-regular error-message">{error}</p>
          )}

          <InputComponent
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          />

          <InputComponent
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <ButtonComponent
            type="submit"
            text="Sign in"
            backgroundColor="#238636"
            loading={loading}
          />
        </Form>
      </div>
    </S.Login>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: { destination: "/" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
