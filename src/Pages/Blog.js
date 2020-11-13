import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogCard from '../Components/BlogCard';

import styles from './Blog.module.scss';

const apiUrl =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@farzanaafrintisha';

const postsArr = [
  {
    thumbnail: 'https://source.unsplash.com/random/500x300',
    link: 'https://medium.com/',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, veniam.',
    author: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero tenetur pariatur aperiam in nemo deleniti placeat, at delectus blanditiis iusto temporibus hic provident fugit?',
    date: '26 December, 2020',
  },
  {
    thumbnail: 'https://source.unsplash.com/random/500x300',
    link: 'https://medium.com/',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, veniam.',
    author: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero tenetur pariatur aperiam in nemo deleniti placeat, at delectus blanditiis iusto temporibus hic provident fugit?',
    date: '26 December, 2020',
  },
  {
    thumbnail: 'https://source.unsplash.com/random/500x300',
    link: 'https://medium.com/',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, veniam.',
    author: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero tenetur pariatur aperiam in nemo deleniti placeat, at delectus blanditiis iusto temporibus hic provident fugit?',
    date: '26 December, 2020',
  },
  {
    thumbnail: 'https://source.unsplash.com/random/500x300',
    link: 'https://medium.com/',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, veniam.',
    author: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero tenetur pariatur aperiam in nemo deleniti placeat, at delectus blanditiis iusto temporibus hic provident fugit?',
    date: '26 December, 2020',
  },
];
const Blog = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPosts((posts) => [...posts, ...data.items]));
  }, [setPosts]);
  return (
    <div className={styles.Blog}>
      <div className={styles.Blog_container}>
        {posts.map((post, key) => (
          <BlogCard
            key={key}
            thumbnail={post.thumbnail}
            link={post.link}
            title={post.title}
            author={post.author}
            //description={post.description}
            date={post.pubDate}
          />
        ))}
      </div>
    </div>
  );
};
export default Blog;
