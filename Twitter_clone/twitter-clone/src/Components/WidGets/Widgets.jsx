import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="WidGets">
        <div className="WidgetsInput">
            <SearchIcon className="WidgetsSearchIcon"/>
            <input type="text" placeholder="Search On Twitter" className="" />
        </div>

        <div className="WidgetsMainContainer">
            <h3>What's Happing</h3>
            <TwitterTweetEmbed tweetId="1743676890378801541"/>

            <TwitterTimelineEmbed
            screenName="beyzamontanaa"
            sourceType="profile"
            options={{height: 450}}
            />
        </div>
    </div>
  );
};

export default Widgets;
