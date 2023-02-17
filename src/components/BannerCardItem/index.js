// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardList} = props
  const {headerText, description, className} = cardList
  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
