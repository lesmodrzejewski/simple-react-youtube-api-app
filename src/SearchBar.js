import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onSubmitHit = (e) => {

        e.preventDefault();

        this.props.onHitSubmit(this.state.term);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHit}>
                    <label htmlFor="term-input">What video would you like to watch...?</label>
                    <br/>
                    <input onChange={this.onInputChange} value={this.state.term} type="text"/>
                </form>
            </div>
        )
    }
}



export default SearchBar;