import React, { Component } from 'react';

export default class MemeGeneratorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => {
        const { memes } = res.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      return { [name]: value };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  generateRandomImg() {
    const rndNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const rndMemeImg = this.state.allMemeImgs[rndNumber].url;
    this.setState({ randomImage: rndMemeImg });
  }

  render() {
    return (
      <div className="">
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />

          <button onClick={() => this.generateRandomImg()}>Gen!</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
