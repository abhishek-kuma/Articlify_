'use client'
import { getArticles } from '@/Appwrite/getArticle';
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Article = {
  userid: string;
  name: string;
  imgurl: string;
  Title: string;
  article: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
};
type ArticleDataInterface = {
  documents: Article[];
};



const ArticleList: React.FC = () => {
  const [data, setData] = useState<{ documents: ArticleDataInterface }>({ documents: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await getArticles();
        if (articlesData != null) {
          setData(articlesData);
        }
      } catch (error) {
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <ul className='p-5 flex flex-wrap items-center '>
        {data.documents.length > 0 ? (
          data.documents.map((art: Article) => (
            
                <li key={art.$id} className='w-full md:w-1/2 lg:w-1/3'>
                  <ArticleCard
                    title={art.Title}
                    imgurl={art.imgurl}
                    name={art.name}
                    description={art.article} 
                    />

                </li>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </ul>
    </div>
  );
};
export default ArticleList;