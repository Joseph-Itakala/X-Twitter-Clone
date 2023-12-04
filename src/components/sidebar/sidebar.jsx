import { NavLink } from 'react-router-dom';
// import twitterLogo from '../../assets/images/logoX.png';
import twitterLogo from '../../assets/icons/Twitter.svg';
import homeIcon from '../../assets/icons/Home-Fill.svg';
import exploreIcon from '../../assets/icons/Explore.svg';
import notifIcon from '../../assets/icons/Notifications.svg';
import messagesIcon from '../../assets/icons/Messages.svg';
import bookmarksIcon from '../../assets/icons/Bookmarks.svg';
import listIcon from '../../assets/icons/Lists.svg';
import profilIcon from '../../assets/icons/Profile.svg';
import moreIcon from '../../assets/icons/More.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="nav-links">
        <li>
          <div className="sidebar-btn-container">
            <img src={twitterLogo} />
          </div>
        </li>
        <li>
          <a href="#">
            <img src={homeIcon} />
            <span className="link-name">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={exploreIcon} />
            <span className="link-name">Explore</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={notifIcon} />
            <span className="link-name">Notification</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={messagesIcon} />
            <span className="link-name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={bookmarksIcon} />
            <span className="link-name">Bookmarks</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={listIcon} />
            <span className="link-name">Lists</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={profilIcon} />
            <span className="link-name">Profil</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={moreIcon} />
            <span className="link-name">More</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;