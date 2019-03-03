import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { //pure function or pure components
    console.log('CardList')
    const cardArray = robots.map((user, i) => {
        // if(true){
        //     throw new Error('NO');
        // }
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
    });

    return(
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;