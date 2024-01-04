import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const ArticleCard = ({ title, imgurl, description, name }: { title: string, imgurl: string, description: string, name: string }) => {
  const truncatedContent = description.length > 20 ? `${description.substring(0, 10)}...` : description;

  return (
    <div className='hover:transform hover:scale-105 transition m-2 p-2 w-80 md:w-96'>
      <Dialog>
        <DialogTrigger>
          <Card className='h-full'>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{truncatedContent}</p>
            </CardContent>
            <CardFooter>
              <p>Written by: {name}</p>
            </CardFooter>
          </Card>
        </DialogTrigger>

        <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen">
          <DialogHeader>
            <DialogTitle className='md-3'>{title}</DialogTitle>
            <DialogDescription>
              <div className='flex items-center justify-center my-3'>
                <img src={imgurl} alt={title} className="w-50 h-50" />
              </div>
              <p>{description}</p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <p>Written By: {name}</p>
            <hr className='my-3'/>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArticleCard;