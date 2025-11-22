import { useState, useEffect } from "react";
import apiClient from "../services/api-client";


interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  id: number;
  results: Game[];
}

const useGames =()=>{
    const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
    
      useEffect(() => {
        const controller = new AbortController();

        apiClient
          .get<FetchGamesResponse>("/games", { signal: controller.signal })
          .then((res) => setGames(res.data.results))
          .catch((error) => {
            if (error.name === "CanceledError") return;
            setError(error.message);
            });

        return () => controller.abort();
      },[]);
        return {games, error};


}

export default useGames;