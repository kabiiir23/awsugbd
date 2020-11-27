import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';

import MainLayout from '../layouts/MainLayout';
import BlogCard from '../components/BlogCard';

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
];
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(apiUrl);
  const data = await res.json();
  const posts = await data.items;
  return {
    props: { posts },
    revalidate: 1800,
  };
};
const blog = ({ posts }) => {
  return (
    <MainLayout
      pageTitle='Blog'
      description='AWS User Group Bangladesh blog posts'
    >
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
    </MainLayout>
  );
};
export default blog;
