import { useEffect } from 'react';
import axios from '../axios/axios';
import { loginSuccess } from './action';
import { useDispatch } from 'react-redux';
function YourComponent() {
   const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/user');
        console.log("response", response.data.user);
        console.log('فات');
        // Do something with the data, e.g., update your component state
        dispatch(loginSuccess(response.data.user));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up an interval to fetch data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // ...rest of your component

  
}

export default YourComponent;
