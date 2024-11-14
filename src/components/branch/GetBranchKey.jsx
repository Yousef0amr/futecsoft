import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCurrentkeyQuery } from '../../features/branchesSlice'; //'; // Make sure to import your query hook
import AddBranch from '../../pages/branche/AddBranch';
import Loader from '../common/Loader';


const GetBranchKey = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { data, isLoading: isQueryLoading, error } = useGetCurrentkeyQuery();
    useEffect(() => {
        if (isQueryLoading) return;
        if (error) {
            navigate('*');
        } else if (data) {
            setIsLoading(false);
        }
    }, [isQueryLoading, data, error, navigate]);

    if (isLoading || isQueryLoading) {
        return <Loader />
    }

    return <AddBranch />;
};

export default GetBranchKey;
