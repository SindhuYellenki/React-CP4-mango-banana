import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevstate => ({mango: prevstate.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevstate => ({banana: prevstate.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="images-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="picture"
              />
              <button
                className="button"
                type="button"
                onClick={this.mangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="picture"
              />
              <button
                className="button"
                type="button"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
