import React from 'react';
import ReactDOM from 'react-dom';
import { Expand, Fade } from '@progress/kendo-react-animation';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Fade:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <Fade>
                    <div className="content" key={index}>{index}</div>
                </Fade>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('root')
);
