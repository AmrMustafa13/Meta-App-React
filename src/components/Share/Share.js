import './Share.css'
import { PermMedia } from '@mui/icons-material'

function Share() {
    return (
        <div className='share'>
            <div className='share-wrapper'>
                <div className='share-top'>
                    <img src='assets/person/1.jpeg' alt='share' className='share-profile-img' />
                    <input className='share-input' type="text" placeholder="What's in your mind ?" />
                </div>
                <hr className='share-hr' />
                <div className='share-bottom'>
                    <div className='share-options'>
                        <div className='share-option'>
                            <PermMedia className='share-icon' />
                            <span className='share-option-text'>Photo or Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share