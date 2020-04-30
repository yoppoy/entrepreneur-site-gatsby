import {useEffect} from 'react';
import {navigate} from 'gatsby';

export default () => {
    console.log("HEY");
    useEffect(() => {
        navigate('/fr');
    }, []);
    return null;
};
