'use client'
import checkUser from "@/Appwrite/check_user";
import { useLoginContext } from "./LoginContext";
import { string } from "zod";
import Greetings from "@/components/Greetings";
export interface ContextType{
  status : boolean,
  name : string,
  setName : Function,
}

export default function Home() {
  // const {status,name,setName} = useLoginContext() as ContextType;
  return (
    <main className="m-3 p-3">
      <h2 className="flex text-lg">
      <Greetings/>
      </h2>
    </main>
  );
}
