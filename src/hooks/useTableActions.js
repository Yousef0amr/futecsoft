import React from 'react'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const useTableActions = ({ path }) => {
    const navigate = useNavigate();
    const [active, setActive] = useState({ isOpen: false, editable: false, data: null });

    const handleCancel = () => {
        setActive({ isOpen: false, editable: false, data: null });
    }
    const defaultActions = useMemo(
        () => ({
            handleOnEditClick: (data) => {
                if (path) {
                    navigate(path, { state: data });
                } else {
                    setActive({ isOpen: false, editable: true, data });
                }

            },
            handleDeleteClick: (data) => {
                setActive({ isOpen: true, editable: false, data });
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
