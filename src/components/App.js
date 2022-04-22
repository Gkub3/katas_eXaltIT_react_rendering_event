import React from 'react';

import '../styles/App.css';
import EventItem from './EventItem';

import Events from '../modules/events';

function App(props) {
  const {start, end} = props;
  const events = Events.get();
  return (
    <React.Fragment>
      <div className='App'>
        {events.map((event) => (
					<EventItem
            key={event.id}
						event={event}
            refStart={start}
            refEnd={end}
					/>
				))}
      </div>  
    </React.Fragment>  
  );
}

export default App;
