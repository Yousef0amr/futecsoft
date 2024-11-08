import React from 'react';
import BranchForm from '../../components/branch/BranchForm';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShuffle} from '@fortawesome/free-solid-svg-icons';

const ListBranches = () => {
    return (
        <Card style={{
            backgroundColor: 'var(--background-color)',
            borderColor: 'var(--text-color)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxHeight: '100vh',
            color: 'var(--text-color)',
        }}>
            <div style={{ width: '100%', fontWeight: '500', fontSize: '20px', 
                color: 'var(--text-color)', display: 'flex', alignItems:
                 'center', justifyContent: 'start',gap: '10px' }}><FontAwesomeIcon color='var(--secondary-color)' icon={faShuffle} /> List Branches</div>
            <BranchForm />
        </Card>
    );
}

export default ListBranches;
