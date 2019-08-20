import React, { Component } from 'react';
import { setState } from 'expect/build/jestMatchersObject';

export default class MemeGeneratorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => {
        const { memes } = res.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return (
      <div className="">
        <img src="" alt="" />
      </div>
    );
  }
}
