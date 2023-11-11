// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="list-item">
      <div className="text-container">
        <div>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <p className="date">{publishedDate}</p>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem
