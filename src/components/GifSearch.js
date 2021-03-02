import React from 'react'


export default class GifSearch extends React.Component {

    state = {
        query: "",
        handleSubmit: this.props.handleSubmit
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Search For Gifs</label><br/>
                <input type="text" id="query" name="query" value={this.state.query} onChange={this.handleChange} />
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value 

        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
    }
}