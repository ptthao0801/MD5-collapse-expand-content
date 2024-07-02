import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    handleExpand = () => {
        const { isExpand } = this.state;
        this.setState(
            {isExpand: !isExpand}
        )
    }

    render() {
        const { isExpand } = this.state;
        return (
            <div>
                <h2>Conditional Rendering</h2>
                <button onClick={this.handleExpand}>{isExpand ? 'Collapse' : 'Expand'}</button>

                {isExpand && (
                    <div>
                        CONTENT TO EXPAND
                    </div>
                )
                }
            </div>
        );
    }
}

export default App;
