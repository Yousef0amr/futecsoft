import React from 'react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const useTableActions = ({ path }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState({ isOpen: false, data: null });

    const handleCancel = () => {
        setActive({ isOpen: false, data: null });
    }
    const defaultActions = useMemo(
        () => ({
            handleOnEditClick: (data) => {
                if (path) {
                    navigate(path, { state: data });
                } else {
                    setActive({ isOpen: false, data });
                }

            },
            handleDeleteClick: (data) => {
                setActive({ isOpen: true, data });
            },
        }),
        [navigate, path]
    );

    return {
        active,
        handleCancel,
        defaultActions
    }

}

export default useTableActions
