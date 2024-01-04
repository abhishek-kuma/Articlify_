import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const ArticleCard = ({title , imgurl , description , name}:{title:string , imgurl:string, description:string , name:string}) => {
  return (
    <div className=' hover:trasform hover:scale-105 transition m-2 p-2'>
    <Card className=''>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{name}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
  <CardFooter>
    <p>Written by :{name}</p>
  </CardFooter>
</Card>

    </div>
  )
}

export default ArticleCard
