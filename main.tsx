import React from 'react';
import ReactDOM from 'react-dom';
import { Slide } from '@progress/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = { show: false };

      this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const { show } = this.state;

        const children = show ?
          (React.createElement('div', {className: "wrapper"}, null)) : null;

        return React.createElement('div', {}, [
            React.createElement('dl', {key: 1},
              React.createElement('dt', {},
                React.createElement('button', {onClick: this.onClick}, 'Animate')),
            ),
            React.createElement(Slide, {key: 2}, children)
        ]);
    }
};

ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('root')
);