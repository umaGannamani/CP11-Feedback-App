// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: true}

  onChangeResponse = () => {
    this.setState({isEmojiClicked: false})
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-item-container"
              onClick={this.onChangeResponse}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-title">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We will use your feedback to improve our customer suppoer performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
