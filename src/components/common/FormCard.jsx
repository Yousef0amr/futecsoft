import React from 'react'
import { Card } from 'react-bootstrap'
import CardTitle from './CardTitle'
const FormCard = ({ icon, title, optionComponent, navButton, children }) => {
    return (
        <Card style={{
            backgroundColor: 'var(--background-color)',
            borderColor: 'var(--border-color-1)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            overflow: 'auto',
            minHeight: '80vh',
            color: 'var(--text-color)',
        }}>
            <CardTitle icon={icon} title={title} navButton={navButton}  >
                {optionComponent}
            </CardTitle>
            {children}
        </Card>
    )
}

export default FormCard
