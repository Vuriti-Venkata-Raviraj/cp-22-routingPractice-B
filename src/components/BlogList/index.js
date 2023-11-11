// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </ul>
  )
}

export default BlogList
