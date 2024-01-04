'use client'
import checkUser from '@/Appwrite/check_user';
import { useLoginContext } from '@/app/LoginContext';
import React from 'react'
export interface ContextType{
    status : boolean,
    name : string,
    setName : Function,
}

const Greetings = () => {

    const {status,name,setName} = useLoginContext() as ContextType;

  async function getName() {
    try {
      //trying to fetch the name
      const userData = await checkUser();
      const NewName = userData?.name
      setName(NewName);
    } catch (error) {
      throw error
    }
    
  }
  if(status && name.length === 0){
     getName();
  }
  else{
    // console.log(name);
  }

    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "Morning 🌄";
    else if (hours >= 12 && hours <= 17)
        greet = "Afternoon ☀️";
    else if (hours >= 17 && hours <= 24)
       greet = "Evening 🌃";
    
    return <span>Good {greet} {name}</span>
}
export default Greetings 