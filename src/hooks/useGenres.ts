import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}

interface FetchGenreResponse{
    count: number;
    results: Genre[];
}

export const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState("");
        const [isLoading , setLoading] = useState(false);
    
          useEffect(() => {
            
            const controller = new AbortController();
    
            setLoading(true);
            apiClient
              .get<FetchGenreResponse>("/genres", { signal: controller.signal })
              .then((res) =>{ setGenres(res.data.results)
              setLoading(false);
              })
              .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
                });
    
            return () => controller.abort();
          },[]);
            return {genres, error, isLoading};
}
