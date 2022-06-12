import { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            searchTerm: ""
        }
    }

    updateSearchTerm = event => {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder={this.props.placeholder} onChange={this.updateSearchTerm}/>
                <button onClick={(event) => this.props.onSearchHandler(event, this.state.searchTerm)}>Search</button>
            </div>
        )
    }
}

export default SearchBar;