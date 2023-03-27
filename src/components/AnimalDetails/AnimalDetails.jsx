import { useParams } from "react-router-dom";
import { useEffect } from 'react';


function AnimalDetails() {

    // useParams returns an object
        // key comes from Route path='/animals/details/:id'
            // id is the key of the object
            // the value comes from the URL
    const params = useParams();
    console.log( params );

    useEffect(() => {
        console.log('We could run an axios request to grab details for animal with id:', params.id);
        // GET request for '/animals/${params.id}'
    })

    return (
        <>
            <div>
                <h1>Animal Details</h1>
            </div>
        </>
    )
}

export default AnimalDetails;