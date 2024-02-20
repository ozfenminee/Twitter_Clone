import React from 'react';
import MainPost from '../MainPost/MainPost';
import TweetInput from '../TweetInput/TweetInput';
import "./Feed.css";
const Feed = () => {
  return (
    <>
      <div className="Feed">
        <div className="FeedHeader">
            <h3>Home</h3>
        </div>
        <TweetInput/>
        <MainPost/>
        </div>
    </>
  );
};

export default Feed;
