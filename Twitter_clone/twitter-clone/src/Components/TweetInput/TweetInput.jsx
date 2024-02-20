import { Avatar, Button } from '@mui/material';
import React from 'react';
import "./TweetInput.css";
const TweetInput = () => {
  return (
    <div className="TweetBox">
        <form>
            <div className="TweetInputBox">
                <Avatar src="https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F316%2F835%2F6391cf35483ff%2Ejpg%3Fv%3D201910111530"/>
                <input type="text" placeholder="Whats Happening?"/>
            </div>
            <input type="text" className="TweetInput_ForImgURL" placeholder="Optional: Enter Img URL"/>
            <Button type="submit" className="TweetBoxBtn">
              Tweet
            </Button>
        </form>
    </div>
  );
};

export default TweetInput;
