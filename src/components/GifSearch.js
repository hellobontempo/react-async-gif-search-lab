import React from 'react'


export default class GifSearch extends React.Component {

    state = {
        query: ""
    }

    render(){
        return(
            <form>
                <label>Search For Gifs</label><br/>
                <input type="text" id="query" name="query" value={this.state.query} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </form>
        )
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value 
        })
        this.props.handleSubmit(this.state.query)
    }

    handleSubmit = event => {
        this.props.handleSubmit(this.state.query)
    }
}