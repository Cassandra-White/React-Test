import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
// npm install semantic-ui-css



class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            errorMessage: "",
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (location) => { this.setState({latitude: location.coords.latitude})},
            (error) => { this.setState({errorMessage: error.message});}
        );
    }
    
    render(){
        

        return(
            <div>

                {
                    this.state.errorMessage !== "" ? `Error : ${this.state.errorMessage}` 
                    : this.state.latitude !== null   ? `Latitude : ${this.state.latitude}` 
                    : `Latitude : Loading...`
                }
               
                <br/>
                
                <SeasonDisplay latitude={this.state.latitude}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));