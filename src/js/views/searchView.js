class SearchView {
    _parentEl = document.querySelector('.search');

    getQuery() {
        // get the query clear the filed and return the query
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }


    _clearInput() {
        // makes the filed empty
        this._parentEl.querySelector('.search__field').value = ''
    }


    addHandlerSearch(handler) {
        //works for if the user hits sumbit or enter 
        this._parentEl.addEventListener('submit', function (e) {

            e.preventDefault(); // stops it from refreashing 
            handler();
        })
    }
}

export default new SearchView();