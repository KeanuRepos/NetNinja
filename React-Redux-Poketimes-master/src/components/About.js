import React from 'react'
import Rainbow from '../hoc/Rainbow'
const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, fuga tempora nihil officia ad, voluptatem ipsam quo veritatis voluptatum ipsum possimus quaerat voluptates exercitationem eligendi suscipit aut sint saepe ratione!</p>
        </div>
    )
}

export default Rainbow(About)