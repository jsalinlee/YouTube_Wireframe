import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            searchResults: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    getSearchResults(event) {
        Axios({
            method: 'post',
            url: '/search',
            data: {
                input: this.state.input,
            },
        }).then((response) => {
            console.log("IT'S LIT");
            window.reload();
        }).catch((err) => {
            console.log(err);
        })
        // buildAPIRequest('GET',
        //                 '/youtube/v3/search/',
        //                 {
        //                     'maxResults': '25',
        //                     'part': 'snippet',
        //                     'q': 'surfing',
        //                     'type': ''
        //                 }
        // );

    }
    render() {
        return(
            <form onSubmit={this.getSearchResults}>
                <input type='text' onChange={this.handleChange} value={this.state.input} placeholder='Search' />
                <button>Go</button>
            </form>
        )
    }
}

export default SearchBar;
