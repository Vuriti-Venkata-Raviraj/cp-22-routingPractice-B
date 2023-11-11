// Write your JS code here
import './index.css'

const UserInfo = () => {
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'
  return (
    <div className="userInfo-container">
      <img src={imgUrl} alt="profile" className="profile-img" />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-description">software developer at UK</p>
    </div>
  )
}

export default UserInfo
