import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }
    componentDidMount(query){
        console.log(query)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=RjKiEW4mmYzlDW602cuPiRQ0TIUGjv2X&rating=g`)
            .then (resp => resp.json())
                .then (json => this.setState({gifs: json.data.slice(0,3)}))
    }

    handleSubmit = (event) => {
        this.componentDidMount(event)
    }

    render (){
        return(
        <div>
            <GifSearch handleSubmit={this.handleSubmit}/><br></br>
            <GifList gifs={this.state.gifs}/>
        </div>
        )
    }
}