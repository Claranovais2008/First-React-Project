import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import { Animepage } from "./pages/AnimePage/AnimePage";
import Layout from "./pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Favorito from "./components/Favoritos/Favorito";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <Animepage></Animepage>
            },
            {
                path: "/favorito",
                element: <Favorito></Favorito>,
                loader: async () => {
                    return fetch(`https://api.jikan.moe/v4/anime?q=PokemonYuenchi`)
                }
            }
        ], errorElement: <ErrorPage></ErrorPage>
    }
])