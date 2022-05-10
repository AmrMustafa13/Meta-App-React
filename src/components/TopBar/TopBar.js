import './TopBar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material';


function TopBar() {
    return (
        <div className='topbar-container'>
            <div className='topbar-left'>
                <span className='logo'>Multiverse</span>
            </div>
            <div className='topbar-center'>
                <div className='search-bar'>
                    <Search sx={{ fontSize: 24 }} />
                    <input placeholder='Search for friend, post or video' className='search-input' />
                </div>
            </div>
            <div className='topbar-right'>
                <div className='topbar-links'>
                    <span className='topbar-link'>Homepage</span>
                    <span className='topbar-link'>Timeline</span>
                </div>
                <div className='topbar-icons'>
                    <div className='topbar-icon-item'>
                        <Person />
                        <span className='topbar-icon-badge'>1</span>
                    </div>
                    <div className='topbar-icon-item'>
                        <Chat />
                        <span className='topbar-icon-badge'>1</span>
                    </div>
                    <div className='topbar-icon-item'>
                        <Notifications />
                        <span className='topbar-icon-badge'>1</span>
                    </div>
                </div>
                <img className='topbar-img' src='assets/person/1.jpeg' alt='profile-pic' />
            </div>
        </div>
    )
}

export default TopBar