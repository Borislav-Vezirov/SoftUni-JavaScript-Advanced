function search() {
   let search = document.querySelector('#searchText').value;
   let towns = Array.from(document.querySelectorAll('li'))
   for (let town of towns) {
      town.style.fontWeight     = 'normal';
      town.style.textDecoration = 'none';
   }
   let matches = towns
   .filter(x => x.textContent.includes(search))
   .map(x => {
      x.style.fontWeight     = 'bold';
      x.style.textDecoration = 'underline';
   })

   document.getElementById('result').textContent = `${matches.length} matches found`
}
