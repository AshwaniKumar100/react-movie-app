// import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import {useTitle} from "../hooks/useTitle";
import { Card } from "../components";
 
export const MovieList = ({apiPath, title}) => {
   console.log(title);

   // const [movies , setMovies] = useState([]);
   // https://api.themoviedb.org/3/movie/now_playing?api_key=60304cf42166fb98070117fc875a3ddc
   const { data : movies = [] } = useFetch(apiPath);
   
    useTitle(`${title}`);  //const pageTitle =

    //   useEffect(() => {
    //      document.title = `${title} / Cinemate`;
    //  },[]);


  return (
    <main>
   
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly"> 

            {
              movies.map((movie) => (
                   <Card key={movie.id} movie={movie}/>
            ))}
               
          </div>
        </section>

   </main>
  )
}
