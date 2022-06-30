import { useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "src/contexts/Auth/authContext";

import { ButtonComponent } from "components/data/components";
import { Form, FormHandles, InputComponent, YupValidation } from "components/inputs/core";

export default function SignInComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

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

      router.push("/profile");
    } catch (err: any) {
      setLoading(false);

      const yupError = err instanceof Yup.ValidationError;

      if (err && !yupError) {
        setError(err);
      }

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <Form ref={formRef} onSubmit={HandleSubmit}>
      <h3 className="title-6-bold-graphie">Sign in</h3>

      {error.length > 0 && (
        <p className="error paragraph-2-bold-graphie error-message">{error}</p>
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

      <Link href="/reset-password" passHref>
        <a href="replaced" className="link-2-bold-graphie forgot-password-link">
          Forgot your password?
        </a>
      </Link>

      {router.pathname === "/login" && (
        <Link href="/create-account" passHref>
          <a
            href="replaced"
            className="link-2-bold-graphie forgot-password-link"
          >
            Create account
          </a>
        </Link>
      )}

      <ButtonComponent type="submit" text="Sign in" loading={loading} />
    </Form>
  );
}
