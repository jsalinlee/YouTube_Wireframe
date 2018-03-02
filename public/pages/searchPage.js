import React from 'react';
import SearchBar from '../components/searchBar';
import SearchResults from '../components/searchResults';

class SearchPage extends React.Component {
    render() {
        const props = this.props
        return (
            <div>
                <div>This is a server side rendering!</div>
                    <SearchBar />
                <div>
                    <SearchResults />
                </div>
            </div>
        );
    }
}

export default SearchPage
