import React, { Component } from 'react';

interface WatchState {
    time: string;
}

class Watch extends Component<{}, WatchState> {

    private intervalID: NodeJS.Timeout | number | undefined;

    constructor(props: {}) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
          }
    }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Watch;