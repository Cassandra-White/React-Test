import React from "react";

class SearchBar extends React.Component {
    state = {
        term : ''
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Rechercher des Images</label>
                        <input type="text" onChange={(event) => {this.setState({term: event.target.value})}}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;