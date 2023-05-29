import * as model from './model.js'
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime'

const controlRecpie = async function () {
  try {

    const id = window.location.hash.slice(1);
    console.log(id)

    if (!id) return;
    recipeView.renderSpinner();

    // loading 
    await model.loadRecipe(id)
    // recipe is loaded here and and stored in the state object



    // rendering recipe 
    recipeView.render(model.state.recipe);
    //Then here we take model.state.recipe, which is that data that we just received here in step one and then that data is passed into the render method, right?
    //And so render method then takes that data and stores it inside of this.#data.


  } catch (err) {
    recipeView.renderError()
  }
}

controlRecpie();

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get search query 
    const query = searchView.getQuery();
    if (!query) return;

    // load search results 
    await model.loadSearchResults(query)

    // render results 
    console.log(model.state.search.results)
    resultsView.render(model.state.search.results)

  } catch (err) {
    console.log(err);
  }
}


const init = function () {
  recipeView.addHandlerRender(controlRecpie);
  searchView.addHandlerSearch(controlSearchResults)
}

init();
// window.addEventListener('hashchange', controlRecpie)
// window.addEventListener('load', controlRecpie)