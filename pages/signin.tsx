import { AuthLayout } from "@layout/AuthLayout";
import { SignInTemplate } from "@template/SignInTemplate";
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
          <SignInTemplate />
        </AuthLayout>
      </main>
    </>
  );
};

export default SignIn;
