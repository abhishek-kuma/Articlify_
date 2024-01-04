'use client'
import Head from 'next/head';
import { RiArrowGoBackFill } from 'react-icons/ri';

const ArticlePage = ({
  title = 'Title',
  imgurl = 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1699300360/picture_url_main/picture_url_main-gif?_i=AA',
  content = 'Content',
  name = 'Name',
}: {
  title: string;
  imgurl: string;
  content: string;
  name: string;
}) => {
    function handleClick() {
        console.log('Click happened');
      }
      const truncatedcontent = content.length > 200 ? `${content.substring(0, 200)}...` : content;
  return (
    <div className="max-w-3xl mx-auto px-2 py-1">
      <div className="flex items-center mb-3">
        <RiArrowGoBackFill className="text-blue-500 text-2xl mr-2" />
        <span
          onClick={handleClick}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Back
        </span>
      </div>
      <Head>
        <title>{title}</title>
      </Head>
      <img src={imgurl} alt={title} className="w-full mb-4" />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <hr className="mb-4" />

      <p className="mb-4">{truncatedcontent}</p>
      <p>Written By: {name}</p>
    </div>
  );
};

export default ArticlePage;
