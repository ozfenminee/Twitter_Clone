import BookmarkIcon from '@mui/icons-material/Bookmark';

import EmailIcon from '@mui/icons-material/Email';

import HomeIcon from '@mui/icons-material/Home';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import NotificationsIcon from '@mui/icons-material/Notifications';

import Person2Icon from '@mui/icons-material/Person2';

import SearchIcon from '@mui/icons-material/Search';

import TwitterIcon from "@mui/icons-material/Twitter";

import SideBarOptions from "../SideBarOptions/SideBarOption";

import "./SideBar.css";
// ... (diğer importlar)

import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <div className="SideBar">
        <TwitterIcon className="TwitterIcon_SideBar"/>
        <Link to="/home">
          <SideBarOptions Icon={HomeIcon} Text="Home" />
        </Link>
        <Link to="/explore">
          <SideBarOptions Icon={SearchIcon} Text="Explore" />
        </Link>
        <Link to="/notifications">
          <SideBarOptions Icon={NotificationsIcon} Text="Notifications" />
        </Link>
        <Link to="/messages">
          <SideBarOptions Icon={EmailIcon} Text="Message" />
        </Link>
        <Link to="/bookmarks">
          <SideBarOptions Icon={BookmarkIcon} Text="Bookmarks" />
        </Link>
        <Link to="/profile">
          <SideBarOptions Icon={Person2Icon} Text="Profile" />
        </Link>
        <Link to="/more">
          <SideBarOptions Icon={MoreHorizIcon} Text="More" />
        </Link>
      </div>
    </>
  );
};

export default SideBar;
