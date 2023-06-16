import React from 'react'
import keyConceptsImage from '../assets/images/key-concepts.png';
import componentsImage from '../assets/images/components.png';
import stateImage from '../assets/images/state.png';
import eventsImage from '../assets/images/events.png';
const concepts = [
    {
        title: 'Key Concepts',
        image: keyConceptsImage,
        description:
          'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'Components',
      image: componentsImage,
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      title: 'State',
      image: stateImage,
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      title: 'Events',
      image: eventsImage,
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
  ];
const Sample =()=> {
  return (
    <div>
        <header>
        <img src={concepts[0].image} alt="Medal badge with a star" />
        <h1>{concepts[0].title}</h1>
        <p>{concepts[0].description}</p>
      </header>
      <ul id="concepts">
        {concepts.map((el,index)=><li key={index}  className="concept">
          <img src={el.image} alt="TODO: TITLE" />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </li>)}
       
      </ul>
    </div>
  )
}

export default Sample;