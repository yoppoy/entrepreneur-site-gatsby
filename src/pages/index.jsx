import {useEffect} from 'react';
import {navigate} from 'gatsby';

export default () => {
    useEffect(() => {
        navigate('/fr');
    }, []);
    return null;
};
