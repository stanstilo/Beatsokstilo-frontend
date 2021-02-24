import React from 'react'
import {FaCamera} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import './UpdateProfile.css'

 const UpdateProfile = () =>  {
    return (
       <>
       <div className='update-profile-body'>
        <div className='edit-profile'>
        <aside className='profile-aside'>
         <p>
         <FaUserPlus className='Fauser-plus'/>
         </p>
         <button className='view-profile-btn'>view profile</button>
         </aside>    

         <div className='profile-image-upload-container'>
         <div className='profile-image-upload'>
           <FaCamera className='camera-centre'/>
           <h4 className='banner-text'>Add a banner image</h4>    
           <button className='banner-btn'><FaCamera className='camera-aside' />Add banner</button>
        </div>
        </div>
        </div>
        <div className='update-profile-table-container'>

        </div>
        </div>
        </>
    )
}

export default UpdateProfile