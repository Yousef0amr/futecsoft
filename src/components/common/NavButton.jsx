import React from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const NavButton = ({ node = {}, icon, title, path }) => {
    const { t } = useTranslation();
    return (
        <Link to={path} state={node ? { data: node.data } : null}>
            <Button className='d-flex align-items-center gap-2' variant='outlined' sx={{ backgroundColor: 'var(--border-color-1)', borderColor: 'var(--border-color-1)', fontSize: '14px', padding: '4px 20px', color: '#ccc' }} > <FontAwesomeIcon icon={icon} />{t(title)}</Button>
        </Link>
    )
}

export default NavButton
