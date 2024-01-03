'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMail } from "react-icons/io5";
import AuthService from "@/Appwrite/auth"
import { useState } from "react"
import { toast } from "sonner"

import { useLoginContext } from "../LoginContext"
import { useRouter } from "next/navigation"

export interface ContextType {
  status: boolean
  setStatus: Function
}

export default function LoginAccount() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status, setStatus } = useLoginContext() as ContextType;


  const { push } = useRouter();
  
  async function handleLogin() {
    try {
      await AuthService.login({ email, password });
      toast.success("Login success ✅");
      setStatus(true);
      push('/');
    } catch (error) {
      toast.error("Error in Login 🚫")
      console.error(error)
    }
  }
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden mx-3 px-1">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to login
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={handleLogin}>
              <IoMail className="mr-2 h-4 w-4" /> Sign In with Email
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700 dark:text-white">
              {" "}
              Don't have an account?{" "}
              <span className=" text-blue-600 hover:underline"><Link href="/signup">Sign Up</Link></span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}