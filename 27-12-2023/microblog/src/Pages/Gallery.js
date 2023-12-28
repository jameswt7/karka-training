import React from 'react'
import { getImageUrl } from './Utils';
// import Avatar from './Avatar.js';

const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
const description = 'Gregorio Y. Zara';
// const name1 ='Amazing Scientists - Gregorio Y. Zara To Do List'
const today = new Date();
const baseUrl = 'https://i.imgur.com/QIrZWGIs.jpg';
const person ={
    name : 'James',
    imageId: 'QIrZWGIs',
        imageSize: 's',
    theme :{

        backgroundColor:'black',
        color:'yellow'
    }
    };

export function Profile() {

    return (
        <img src={avatar} alt={description} />
        )
}
export function Avatar({ persontwo, size })
{
    return(
        <img className='avatar' src={getImageUrl(persontwo)} alt={persontwo.name} width={size} height={size}/>
    );
}

export function formatDate(date)
{

    return new Intl.DateTimeFormat('en-US',{ weekday: 'long'}).format(date);
    
}
function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }
export default function Gallery() {

    return (
        <section style={person.theme}>
            <h1>{person.name} "{formatDate(today)}"</h1>
            <img className="avatar" src={baseUrl}{...person.imageId}{...person.imageSize} alt={person.name} />
            <Profile />
            <Profile />
            <Profile />
            <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
            
            <ul style={{backgroundColor:'black',color:'red'}}>
                <li>invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>improve the spectrum technology</li>
            </ul>
            <p class="summary">
                You can find my thoughts here.
              
                    <b>And <i>pictures</i> </b>of scientists!
            </p>
            <div>
            <Card>
            <Avatar size={100}
                    persontwo={{ 
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp2'
                    }}
                />
             <Avatar
        size={80}
        persontwo={{
            name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        persontwo={{ 
            name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />   
      </Card>
      </div>
        </section>
    )
}