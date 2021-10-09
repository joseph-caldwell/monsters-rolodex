import React from 'react';
import { Card } from '../card/Card';
import './Card_List.styles.css';
import '../card/Card.styles.css';


export const CardList= props => (
    <div className="card-list ">
    {props.monster.map(monster=>( 
        <Card key={monster.id} monster={monster} />
        ))}
    </div>
  );
