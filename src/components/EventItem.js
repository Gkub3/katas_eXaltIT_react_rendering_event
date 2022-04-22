import React from 'react';

import '../styles/EventItem.css';

import Tools from '../modules/tools';

function EventItem(props) {
    const {event, refStart, refEnd} = props;   
    const style = {
        top: (((Tools.convertHourStrToMinutes(event.start) - refStart) / (refEnd - refStart)) * 100) + '%',
        height: ((event.duration / (refEnd - refStart)) * 100) + '%',
        width: (100 * event.position.size) + '%',
        left: (100 * event.position.size * event.position.col) + '%'
    }
    const title = [event.start, Tools.convertMinutesToHourStr(Tools.convertHourStrToMinutes(event.start) + event.duration)].join(' - ');
    return (
        <React.Fragment>
            <div className='evt-item' style={style} title={title}>
                <span className='evt-span'>{title} [{event.id}]</span>
            </div>
        </React.Fragment>
    )
}

export default EventItem