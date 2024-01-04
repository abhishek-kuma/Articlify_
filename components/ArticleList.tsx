'use client'
import { getArticles } from '@/Appwrite/getArticle';
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard';

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


// {
//   "total": 4,
//   "documents": [
//       {
//           "userid": "83jfa988iadjads",
//           "name": "Abhishek Kumar",
//           "imgurl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png",
//           "Title": "India",
//           "article": "India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.\n\nModern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[27][28][29] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[30] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago, evolving gradually into the Indus Valley Civilisation of the third millennium BCE.",
//           "$id": "65955ecc61c3c8b21f07",
//           "$createdAt": "2024-01-03T13:19:08.435+00:00",
//           "$updatedAt": "2024-01-03T13:19:08.435+00:00",
//           "$permissions": [],
//           "$databaseId": "65955d65da57cfbeaccb",
//           "$collectionId": "65955d8587b3194c8397"
//       },
//       {
//           "userid": "",
//           "name": "ABHISHEK KUMAR",
//           "imgurl": "the url ",
//           "Title": "The titile",
//           "article": "your articcle",
//           "$id": "6595cf47560b612dcfe3",
//           "$createdAt": "2024-01-03T21:19:03.355+00:00",
//           "$updatedAt": "2024-01-03T21:19:03.355+00:00",
//           "$permissions": [
//               "read(\"user:659453fa6897e9fca664\")",
//               "update(\"user:659453fa6897e9fca664\")",
//               "delete(\"user:659453fa6897e9fca664\")"
//           ],
//           "$databaseId": "65955d65da57cfbeaccb",
//           "$collectionId": "65955d8587b3194c8397"
//       },
//       {
//           "userid": "",
//           "name": "ABHISHEK KUMAR",
//           "imgurl": "the link",
//           "Title": "The testing",
//           "article": "The article",
//           "$id": "6595d07c51e6f1a1b43f",
//           "$createdAt": "2024-01-03T21:24:12.336+00:00",
//           "$updatedAt": "2024-01-03T21:24:12.336+00:00",
//           "$permissions": [
//               "read(\"user:659453fa6897e9fca664\")",
//               "update(\"user:659453fa6897e9fca664\")",
//               "delete(\"user:659453fa6897e9fca664\")"
//           ],
//           "$databaseId": "65955d65da57cfbeaccb",
//           "$collectionId": "65955d8587b3194c8397"
//       },
//       {
//           "userid": "",
//           "name": "ABHISHEK KUMAR",
//           "imgurl": "thing",
//           "Title": "thing",
//           "article": "thing is the thing",
//           "$id": "6595d09b1f708b4fff1e",
//           "$createdAt": "2024-01-03T21:24:43.129+00:00",
//           "$updatedAt": "2024-01-03T21:24:43.129+00:00",
//           "$permissions": [
//               "read(\"user:659453fa6897e9fca664\")",
//               "update(\"user:659453fa6897e9fca664\")",
//               "delete(\"user:659453fa6897e9fca664\")"
//           ],
//           "$databaseId": "65955d65da57cfbeaccb",
//           "$collectionId": "65955d8587b3194c8397"
//       }
//   ]
// }
const ArticleList: React.FC = () => {
  const [data, setData] = useState<{ documents: Article[] }>({ documents: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await getArticles();
        console.log('articlesData', articlesData); // Log the fetched data
        if (articlesData != null) {
          setData(articlesData);
        }
      } catch (error) {
        console.error('Error fetching articles:', error); // Log any errors
      }
    }
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <div>
      <ul className='p-5'>
        {data.documents.length > 0 ? (
          data.documents.map((art: Article) => (
            <li key={art.$id}>
              <ArticleCard
                title={art.Title}
                imgurl={art.imgurl}
                name={art.name}
                description={art.article} />
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