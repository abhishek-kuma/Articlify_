'use client'
import checkUser from "@/Appwrite/check_user";
import { useLoginContext } from "./LoginContext";
import Greetings from "@/components/Greetings";

import ArticleList from "@/components/ArticleList";

interface ContextType {
  status: boolean;
  setStatus: (status: boolean) => void;
  name: string;
  setName: (name: string) => void;
}

export default function Home() {
  const { status, setStatus, name, setName } = useLoginContext() as ContextType;
  async function checkUserAvailablity() {
    try {
      const userData = await checkUser();
      if (userData) {
        setStatus(true);
        setName(userData.name)
      }

    } catch (error) {
      console.log("User Not Found")
    }
  }
  if (!status) {
    checkUserAvailablity();
  }

  return (
    <main className="m-3 p-3">
      <h2 className=" text-lg">
        <div>
        <Greetings />
        </div>
      </h2>
        <div>
        <ArticleList/>
        </div>
    </main>
  );
}
