import React from 'react'

export default class GifList extends React.Component{

//data.images.original.url
    render (){
        return (
        <ul>
          {this.props.gifs.map(gif => {
              return  <li key={gif.id} ><img src={gif.images.original.url} alt={gif.title}/></li>
            })
          }
        </ul>
        )
    }


}


