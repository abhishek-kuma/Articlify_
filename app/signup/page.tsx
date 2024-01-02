'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMail } from "react-icons/io5"
import { useState} from "react"
import Link from "next/link"

const handleSubmit = () => {
  console.log("submit")
}
export default function SignUpForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden mx-3 px-1">
      <div className="w-full m-auto lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Create an account
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign up
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="" value={name} onChange={(event) => setName(event.target.value)} />

            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Forget password ?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">
              <IoMail className="mr-2 h-4 w-4" /> Sign Up with Email
            </Button>
            <p className="mt-2 text-xs text-center text-gray-700 dark:text-white">
              {" "}
              Already have an account?{" "}
              <span className=" text-blue-600 hover:underline">
                <Link href="/signin">Sign In</Link>
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}