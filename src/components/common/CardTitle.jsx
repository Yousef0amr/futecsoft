import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CardTitle = ({ icon, title }) => {
    return (
        <div style={{
            width: '100%', fontWeight: '500', fontSize: '20px',
            color: 'var(--text-color)', display: 'flex', alignItems:
                'center', justifyContent: 'start', gap: '10px'
        }}><FontAwesomeIcon color='var(--secondary-color)' icon={icon} /> {title} </div>
    )
}

export default CardTitle
