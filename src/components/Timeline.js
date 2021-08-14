import React from 'react';
import './Timeline.css';
import TimelineBox from './TimelineBox';
import Fade from 'react-reveal/Fade';

function Timeline() {
  return (
    <Fade>
    <div className='timeline__containter'>
      <h1>About Me</h1>
      <p>Learn a bit about me and what I've been up to.</p>
      <h3>1998 &bull; born</h3>
      <div className='timeline__line'></div>
      <div className='timeline'>
        <TimelineBox 
          top={{marginTop:100}}
          icon='fas fa-camera'
          title='2012 &bull; first dslr'
          description='my grandpa gave me his Nikon D90 and a bunch of old lenses. This jumpstarted my interest in photography!'
        />  
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-school'
          title='2013 &bull; high school'
          description='I attended pali high school. I was co-captain of the Varsity Golf Team and was a part of Pali Production where we made short films, documentaries, and live streamed Pali events.'
        />  
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-briefcase'
          title='2015 &bull; first job'
          description='I decided I wanted to go to Iceland. I didnt have money, so I got a job at Chipotle.'
        />  
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-camera'
          title='2017 &bull; college'
          description='I attended U.C.L.A. and studied Psychology.'
        />    
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-plane'
          title='2017 &bull; first trip'
          description='A couple friends and I went to Iceland and Holland. We were eating ramen noodles most nights and staying in pretty dingy airbnbs, but we pulled it off!'
        />   
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-globe-asia'
          title='2019 &bull; first solo trip'
          description='I had been wanting to go to Thailand for a while and couldnt convince any friends to come with. I decided to go by myself, which ended up being a very rewarding experience.'
        />   
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-code'
          title='2020 &bull; first coding class'
          description='Since I had finished most of my requirements for Psychology, I decided to branch out and take a programming class on C++. I ended up really liking it and decided to spend the rest of my time at UCLA taking coding courses.'
        />   
        <TimelineBox 
          top={{marginTop:0}}
          icon='fas fa-graduation-cap'
          title='2021 &bull; graduated'
          description='I graduated UCLA with a degree in psychology and a new passion for web development. I was able to take classes in C++, Java, HTML/CSS, Javascript, and PHP.'
        />   
      </div>

    </div>
    </Fade>
  );
}

export default Timeline;