import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: "",

    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //TODO: Make sure we call a callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} type="text" onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;