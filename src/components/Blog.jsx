import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.post(
          '/v1/databases/10658881be0f80fc9733c1932deaf96e/query',
          {},
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_NOTION_TOKEN}`,
              'Notion-Version': '2022-06-28',
            },
          }
        );
        
        

        const fetchedPosts = response.data.results.map(post => ({
          id: post.id,
          title: post.properties.Title.title[0]?.text.content,
          content: post.properties.Content.rich_text[0]?.text.content,
          image: post.properties.Image.files[0]?.file.url,
        }));

        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className='mt-96'>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="mb-6">
            {post.image && <img src={post.image} alt={post.title} className="mb-2" />}
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
           
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )} 
    </section>
  );
};

export default Blog;
