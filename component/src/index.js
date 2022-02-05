import React from 'react';
import ReactDOM  from 'react-dom';
import faker from '@faker-js/faker';
import CommmentDetail from './CommentDetail';
import ApprouvalCard from './ApprouvalCard';

const App = () => {
    return (
        <>
        <ApprouvalCard>
            <CommmentDetail author="sam" timeAgo="Ajourd'hui à 13:00" image={faker.image.avatar()}/> 
        </ApprouvalCard> 
        <ApprouvalCard>      
            <CommmentDetail author="Alex" timeAgo="Ajourd'hui à 13:56" image={faker.image.avatar()}/>   
        </ApprouvalCard>
        <ApprouvalCard>
            <CommmentDetail author="Chloé" timeAgo="Ajourd'hui à 14h09" image={faker.image.avatar()}/>  
        </ApprouvalCard> 
        </>     
    );
} 

ReactDOM.render(<App/>, document.querySelector('#root'));