import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import qs from 'query-string';

function Search() {
    const history = useHistory();

    console.log(history);

    useEffect(() => {
        const searchObject = qs.parse(history.location.search);
        console.log('searchObject', searchObject);
    }, [])

    return (
        <>
            <h1>Search</h1>
        </>
    )
}

export default Search;