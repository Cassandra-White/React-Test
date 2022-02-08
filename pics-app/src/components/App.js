import React from "react";
import SearchBar from './SearchBar'

class App extends React.Component{
    searchBarOnFormSubmit(term) {
        console.log(term);
    }

    render() {

    
        return (
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmitForm={ this.searchBarOnFormSubmit }/>
            </div>
        )
    }
}

export default App;