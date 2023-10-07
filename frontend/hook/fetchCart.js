import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";

const fetchCart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setLoader(true);
        const token = await AsyncStorage.getItem('token');

        try {
            const endpoint = 'http://localhost:3000/api/carts/find';

            const headers = {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
            };

            const response = await axios.get(endpoint, {headers});
            const cartProducts = response.data[0].products;
            setData(cartProducts);
            setLoader(false);

        } catch (error) {
            setError(error)
        } finally {
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setLoader(true);
        fetchData();
    }

    return {data, loading, error, refetch}
}

export default fetchCart