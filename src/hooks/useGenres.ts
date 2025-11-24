import { useData } from "./useData";

export interface Genre{
    
    id: number;
    name: string;
    [x: string]: string;
}


const useGenres = () => useData<Genre>('/genres')

export default useGenres;