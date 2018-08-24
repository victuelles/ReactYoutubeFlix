import React,{Component} from 'react'



class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={term:''}
    }

    onInputChange(event){
      //  console.log(event.target.value)
       
    }


    render(){

        return (
            <div>
                <input onChange={event=>{ this.setState({term:event.target.value})}}/>
                Value of input: {this.state.term}

            </div>
        )
    }
}

export default SearchBar 
