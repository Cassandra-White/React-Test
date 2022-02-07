import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';



class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            latitude: null,
            errorMessage: "",
            loadingMessage:'Activez votre localisation afin d\'afficher le contenu',
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (location) => { this.setState({latitude: location.coords.latitude})},
            (error) => { this.setState({errorMessage: error.message});}
        );
    }

    renderContent = () => {
        return (
            this.state.errorMessage !== "" ? `Error : ${this.state.errorMessage}` 
            : this.state.latitude !== null   ? <SeasonDisplay latitude={this.state.latitude}/>
            : <LoadingSpinner loadingMessage={this.state.loadingMessage}/>
        )
    }
    
    render(){
        

        return(
            <div>{this.renderContent()}</div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));