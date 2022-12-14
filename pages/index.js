import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/homePage/FeaturedPosts';
import Hero from '../components/homePage/Hero';
import { getFeaturedPosts } from '../lib/postsUtil';
import {animateNav} from '../lib/handleNavAnimation';

const HomePage = props => {
  if(process.browser){
    window.onscroll = function () {
      animateNav(document);
    }
  }
  return (
    <Fragment>
      <Head>
        <title>Our Startup </title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
};

export default HomePage;
