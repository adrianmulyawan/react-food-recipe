import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import NotfoundPage from "./pages/notfound.page";
import RecipePage from "./pages/recipe.page";
import RecipeCountryPage from "./pages/recipeCountry.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/recipe" element={ <RecipePage /> } />
        <Route path="/recipe/country/:countryName" element={ <RecipeCountryPage /> } />
        <Route path="*" element={ <NotfoundPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
