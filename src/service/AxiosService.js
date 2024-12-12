import axios, { AxiosError } from 'axios'
import { useCallback, useState } from 'react'

const http = axios.create ({
    baseURL: 'http://localhost:8080/rest',
})

const useApi = () => {
    const [data, setData] = useState([]);
    const [errorAxios, setErrorAxios] = useState({});

    const getData = useCallback( async (url) => {
        try {
            const response = await http.get(url);
            setData(response.data);
            setErrorAxios(null);
        }
        catch(error) {
            setErrorAxios(error);
            setData(null);
        }
        finally {

        }
    },[]);

    return {
        data,
        errorAxios,
        getData,
    }
}

export default useApi