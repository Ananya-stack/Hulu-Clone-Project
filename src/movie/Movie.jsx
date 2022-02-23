import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../redux/Reducers/CategorySlice'

const Movie = () => {
  
    const dispatch = useDispatch();
    const { fetchCategory_status, fetchCategory_data } = useSelector( e=> e.category_state)
     useEffect(() => {
          dispatch(fetchCategory())
     }, []);

    return (
        <div>
            {
               fetchCategory_status === "loading" && 
               fetchCategory_data === null ? (
               <p>loading</p>
               ) : (
               <>{JSON.stringify(fetchCategory_data)}</>
               )}
        </div>
    );
}

export default Movie;


