function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
      let searchText  = document.querySelector('#searchField');

      for (let el of rowElements) {
         el.className = '';
      }

      rowElements.filter(x => {
         let cells = Array.from(x.children);
         if(cells.find(x => x.textContent.includes(searchText.value))){
            x.className = 'select'
         }
      })
      searchText.value = '';
   }
}