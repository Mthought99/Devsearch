
//GET SEARCH FORM AND PAGE LINK
let searchForm = document.getElementById('searchForm')
let pageLink = document.getElementsByClassName('page-link')

//ENSURE SEARCH FORM EXIST
if(searchForm){
    for(let i = 0; pageLink.length > i; i++) { 
        pageLink[i].addEventListener('click', function (e) {
            e.preventDefault()
            
            //GET THE DATA ATTRIBUTE
            let page =  this.dataset.page

            //ADD HIDDEN SEARCH INPUT FORM
            searchForm.innerHTML += `<input value=${page} name="page" hidden/>`

            //SUBMIT FORM
            searchForm.submit()
        })
    }
}
