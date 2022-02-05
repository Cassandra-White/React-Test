import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            errorMessage: null,
        }

        window.navigator.geolocation.getCurrentPosition(
            (location) => { this.setState({latitude: location.coords.latitude})},
            (error) => { this.setState({errorMessage: error.message});}
        );
    }
    
    render(){
        

        return(
            <div>

                {
                    this.state.errorMessage !== null ? `Error : ${this.state.errorMessage}` 
                    : this.state.latitude !== null   ? `Latitude : ${this.state.latitude}` 
                    : `Latitude : Loading...`
                }
               
                <br/>
                
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));