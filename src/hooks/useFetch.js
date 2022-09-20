import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url])

    return { loading, result, error };


}