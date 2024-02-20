import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Avatar } from '@mui/material';
import React from 'react';
import './MainPost.css';
const MainPost = () => {
    return (
  <div className="MainPost">
        <div className="PostAvatar">
            <Avatar src="https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F316%2F835%2F6391cf35483ff%2Ejpg%3Fv%3D201910111530"/>
        </div>

        <div className="PostBody">
            <div className="PostHeader">
                <div className="PostHeaderText">
                    <h4>
                        Papatya{""}
                        <span className="PostHeaderUserName">
                            <VerifiedUserIcon className="VerifiedIconPost"/>
                        @sari_papatya
                        </span>{""}
                    </h4>
                </div>
                <div className="PostHeaderDescription">
                    <p>
                        Herkese mutlu günler!
                    </p>
                </div>
            </div>

            <img src="https://media.giphy.com/media/l41Ynr3zDG5MW8g4E/giphy-downsized-large.gif" 
            alt="" />
            <div className="PostFooter">
                <ChatBubbleOutlineIcon/>
                <RepeatIcon/>
                <FavoriteBorderIcon/>
                <PublishIcon/>
            </div>
        </div>
    </div>
    );
};

export default MainPost;
