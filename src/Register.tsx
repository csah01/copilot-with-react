/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0tL1z1Gp3h0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [ukMobile, setUkMobile] = useState("");
  const [ukMobileError, setUkMobileError] = useState("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    const usernameRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!usernameRegex.test(value)) {
      setUsernameError("Invalid username");
    } else {
      setUsernameError("");
    }
  };
  const handleUkMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUkMobile(value);
    const ukMobileRegex = /^07\d{9}$/;
    if (!ukMobileRegex.test(value)) {
      setUkMobileError("Invalid mobile number");
    } else {
      setUkMobileError("");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="mb-8 text-4xl font-bold">Register</h1>
      <form className="flex space-x-4">
        <div className="flex flex-col">
          <Label htmlFor="username" className="mb-2">
            Username
          </Label>
          <Input
            id="username"
            placeholder="Username"
            className="bg-gray-800 text-white border border-gray-600"
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && (
            <div className="text-red-500 mt-2">{usernameError}</div>
          )}
        </div>
        <div className="flex flex-col">
          <Label htmlFor="uk-mobile" className="mb-2">
            UK Mobile Number
          </Label>
          <Input
            id="uk-mobile"
            placeholder="UK Mobile Number"
            className="bg-gray-800 text-white border border-gray-600"
            value={ukMobile}
            onChange={handleUkMobileChange}
          />
          {ukMobileError && (
            <div className="text-red-500 mt-2">{ukMobileError}</div>
          )}
        </div>
        <Button
          type="submit"
          className="self-end bg-pink-500 text-white border border-gray-600"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
