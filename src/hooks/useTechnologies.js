import {useEffect, useState} from "react";

export function useTechnologies() 
{
    const [technologies, setTechnologies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => 
        {
        let cancelled = false;
        async function loadTechnologies() 
        {
            try 
            {
                const response = await fetch("/data/technologies.json");
                if (!response.ok)
                {
                    throw new Error(`Request failed ${response.status}`);
                }
                const data = await response.json();
                if(!cancelled) 
                    {
                    setTechnologies(data);
                }
            }
             catch (err) 
             {
                if(!cancelled) 
                    {
                    setError(err.message || "Could not load technologies");
                }
            }
             finally 
             {
                if(!cancelled) 
                    {
                    setIsLoading(false);
                }
            }
        }

        loadTechnologies();

        return () => {cancelled = true;};
    }, []);

    return { technologies, isLoading, error };
}