// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  buttonclicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    let subscribeButton
    if (isSubscribed === true) {
      subscribeButton = (
        <button type="button" className="button" onClick={this.buttonclicked}>
          Subscribe
        </button>
      )
    } else {
      subscribeButton = (
        <button type="button" className="button" onClick={this.buttonclicked}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {subscribeButton}
      </div>
    )
  }
}

export default Welcome
