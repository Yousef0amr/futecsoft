import React from 'react'
import { Card } from 'react-bootstrap'
import CardTitle from './CardTitle'
import DialogModel from './DialogModel'
const FormCard = ({ icon, title, modelTitle, optionComponent, navButton, open, handleClose, modelComponent, children }) => {
    return (
        <>
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
            <DialogModel open={open} title={modelTitle} handleClose={handleClose}  >
                {modelComponent}
            </DialogModel>
        </>
    )
}

export default FormCard
