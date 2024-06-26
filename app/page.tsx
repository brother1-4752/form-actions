"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { handleSubmit } from "./login/action";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, action] = useFormState(handleSubmit, null);

  return (
    <main style={{ width: "70%" }} className="flex flex-col items-center">
      <header className="flex justify-center py-3 w-full">
        <div className=" text-5xl">🔥</div>
      </header>
      <section className=" w-full flex flex-col items-center justify-around gap-3 py-5 ">
        <form action={action} className="flex flex-col w-full gap-3">
          <FormInput
            type="email"
            name="email"
            placeholder="✉️  Email"
            required={true}
            errors={state?.errors ?? {}}
          />
          <FormInput
            type="username"
            name="username"
            placeholder="🧑‍💻  Username"
            required={true}
            errors={state?.errors ?? {}}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="🗝️  Password"
            required={true}
            errors={state?.errors ?? {}}
          />
          <FormButton text="Log in" />
        </form>
      </section>
    </main>
  );
}
