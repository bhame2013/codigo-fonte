import { useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { ButtonComponent } from "components/data/components";
import { Form, FormHandles, YupValidation, InputComponent, RadioInput } from "components/inputs/core";

import { genderOptions } from "src/utils/genderOptions";
import { useAuth } from "src/contexts/Auth/authContext";
import { CreateAccountProps, AccountCreate } from "src/services/account";

export default function CreateAccountComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const { signIn } = useAuth();
  const formRef = useRef<FormHandles>(null);

  async function HandleSubmitCreateAccount({
    name,
    surname,
    email,
    phone,
    password,
    birthday,
    passwordConfirmation,
    gender,
  }: CreateAccountProps) {
    const Yup = await import("yup");

    try {
      setLoading(true);

      let phoneOnlyNumbers = phone?.replace(/[^0-9]/g, "");

      const schema = Yup.object().shape({
        name: Yup.string().required("Please enter a name"),
        surname: Yup.string().required("Please enter a surname"),
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Please enter a email"),
        phone: Yup.string()
          .required("Please enter a phone")
          .min(11, "Please enter a valid phone"),
        birthday: Yup.string()
          .required("Please enter a valid birthday")
          .nullable(false),
        password: Yup.string().required("Please enter a password."),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
        gender: Yup.string().required("Please enter a gender."),
      });

      await schema.validate(
        {
          name,
          surname,
          email,
          phone: phoneOnlyNumbers,
          birthday,
          password,
          passwordConfirmation,
          gender,
        },
        {
          abortEarly: false,
        }
      );

      formRef.current?.setErrors({});

       await AccountCreate(
        {
          name,
          surname,
          email,
          phone: phoneOnlyNumbers,
          birthday,
          password,
          passwordConfirmation,
          gender,
        }
      );

      await signIn({ email, password });

      if (router.pathname === "/create-account") {
        router.push("/profile");
        return;
      }

      router.push("/checkout");

      setLoading(false);
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
    <Form ref={formRef} onSubmit={HandleSubmitCreateAccount}>
      <h3 className="title-6-bold-graphie">Create account</h3>

      {error.length > 0 && (
        <p className="error paragraph-2-bold-graphie error-message">{error}</p>
      )}

      <InputComponent
        id="firstName"
        name="name"
        type="text"
        placeholder="First name"
      />

      <InputComponent
        id="surname"
        name="surname"
        type="text"
        placeholder="Surname"
      />

      <InputComponent name="email" type="email" placeholder="Email" />

      <InputComponent
        mask="(99) 99999-9999"
        name="phone"
        type="text"
        placeholder="Phone"
      />

      <InputComponent
        id="birthday"
        name="birthday"
        label="Birthday"
        type="date"
        max={new Date().toISOString().split("T")[0]}
      />

      <RadioInput name="gender" options={genderOptions} />

      <InputComponent
        id="passwordCreateAccount"
        name="password"
        type="password"
        placeholder="Password"
        passwordBar={true}
      />

      <InputComponent
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        placeholder="Confirm Password"
      />

      <ButtonComponent type="submit" text="Sign up" loading={loading} />

      {router.pathname === "/create-account" && (
        <Link href="/login" passHref>
          <a
            href="replaced"
            className="link-2-bold-graphie forgot-password-link back-to-login"
          >
            Back to login
          </a>
        </Link>
      )}
    </Form>
  );
}
