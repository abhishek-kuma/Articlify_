"use client"
import Greetings from '@/components/Greetings'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'
import { useRouter } from "next/navigation"
import { createPost } from '@/Appwrite/crateDocument'
import { useLoginContext } from '@/app/LoginContext'

export interface ContextType {
  name: string
  userid: string
}

const WritePage = () => {
  const [title, setTitle] = useState('')
  const [imageLink, setimageLink] = useState('')
  const [article, setArtcle] = useState('')
  const { push } = useRouter();
  const { name, userid } = useLoginContext() as ContextType;


  async function handleSubmit() {
    try {
      await createPost({ title , imageLink , article , userid , name });
      toast.success("Succesfully Posted Artcile ✅");
      push('/');
    } catch (error) {
      toast.error("Error in Posting the Article 🚫")
      throw error
    }
  }


  return (
    <div className='m-3 p-3'>
      <h2 className='text-lg'>
        <Greetings />
      </h2>
      <Card className='my-3'>
        <CardHeader>
          <CardTitle>Write the Article Here !</CardTitle>
          <CardDescription>
            Narrow your topic to a specific angle.<br />
            Start with a captivating hook, use clear language, and involve the reader.<br />
            Keep it brief, structured, and impactful within a limited word count.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor='Title' className='my-2'>Title Of the Article</Label>
          <Input type="text" placeholder="Title" className='my-2' onChange={(e) => setTitle(e.target.value)} />

          <Label htmlFor='Link of the Cover Image'>Cover Image Link</Label>
          <Input type="link" placeholder="Image Link" className='my-2' onChange={(e) => setimageLink(e.target.value)} />

          <Label htmlFor='Write the article Here'>Your Article</Label>
          <Textarea placeholder='Type your article here.' id='article' onChange={(e) => setArtcle(e.target.value)} />


        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default WritePage

