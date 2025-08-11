"use client";

import { login } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await login(formData);
      console.log(res);
      if (!!res.error) {
        setError(res.error.message);
      } else {
        setError(null);
        router.push("/bookings");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
