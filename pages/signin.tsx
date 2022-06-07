import { SignInGreeting } from "@element/SigninGreeting/SigninGreeting";
import { AuthLayout } from "@layout/AuthLayout";
import { SignInForm } from "@module/SignInForm/SignInForm";
import { NextPage } from "next";
import Head from "next/head";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <main>
        <AuthLayout>
          <SignInGreeting />
          <SignInForm />
        </AuthLayout>
      </main>
    </>
  );
};

export default SignIn;
