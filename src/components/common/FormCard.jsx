import React from 'react'
import { Card } from 'react-bootstrap'
import CardTitle from './CardTitle'
const FormCard = ({ icon, title, children }) => {
    return (
        <Card style={{
            backgroundColor: 'var(--background-color)',
            borderColor: 'var(--text-color)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            overflow: 'auto',
            minHeight: '80vh',
            color: 'var(--text-color)',
        }}>
            <CardTitle icon={icon} title={title} />
            {children}
        </Card>
    )
}

export default FormCard
