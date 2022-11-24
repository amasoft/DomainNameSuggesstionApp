import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
const name = require('@rstacruz/startup-name-generator');
class App extends React.Component {
    state = {
        headtext: 'Name It',
        headerExpanded: true,
        suggestedNames: [],
    };
    handleInputChange = (inputtext) => {
        console.log('input text' + inputtext);
        this.setState({
            headerExpanded: !inputtext,
            suggestedNames: inputtext ? name(inputtext) : [],
        });
    };
    render() {
        console.log(name('cloud'));
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headtitle={this.state.headtext}
                />
                <SearchBox onInputchange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}
//
export default App;
{
    /* <h3> {this.state.headtext}</h3>
                <button
                    onClick={() => {
                        this.setState({
                            headtext: 'wawooo it is sa new headertext',
                        });
                    }}
                >
                    Maic hppens{' '}
                </button> */
}
