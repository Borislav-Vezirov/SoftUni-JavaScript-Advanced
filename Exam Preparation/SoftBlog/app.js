function solve() {
   let getAuthorElement   = document.getElementById('creator');
   let getTitleElement    = document.getElementById('title');
   let getCategoryElement = document.getElementById('category');
   let getTextAraeElement = document.getElementById('content');
   
   let getCreateButton = document.querySelector('.create');

   let getSectionForPosts = document.querySelectorAll('section')[1];
   
   getCreateButton.addEventListener('click', (e) => {

      e.preventDefault();
      
      let createArticleEl = document.createElement('article');

      let createH1Tag = document.createElement('h1');
      createH1Tag.textContent = getTitleElement.value;

      let createCategoryPelement = document.createElement('p');
      createCategoryPelement.textContent = 'Category:';
      let createStrongElemnt = document.createElement('strong');
      createStrongElemnt.textContent = getCategoryElement.value;      
      createCategoryPelement.appendChild(createStrongElemnt);

      let createAuthorPelemnt = document.createElement('p');
      createAuthorPelemnt.textContent = 'Author:';
      let createStrongElemntForAuthor = document.createElement('strong');
      createStrongElemntForAuthor.textContent = getAuthorElement.value;      
      createAuthorPelemnt.appendChild(createStrongElemntForAuthor);

      let createContentPelement = document.createElement('p');
      createContentPelement.textContent = getTextAraeElement.value;

      let createdivForButtons = document.createElement('div');
      createdivForButtons.classList.add('buttons');

      let createDeleteBtn = document.createElement('button');
      createDeleteBtn.className = 'btn delete';
      createDeleteBtn.textContent = 'Delete';

      createDeleteBtn.addEventListener('click', deleteFunction)

      let createArchiveBtn = document.createElement('button');
      createArchiveBtn.className = 'btn archive';
      createArchiveBtn.textContent = 'Archive';

      createArchiveBtn.addEventListener('click', archiveFunction);

      createdivForButtons.appendChild(createDeleteBtn);
      createdivForButtons.appendChild(createArchiveBtn);

      createArticleEl.appendChild(createH1Tag);
      createArticleEl.appendChild(createCategoryPelement);
      createArticleEl.appendChild(createAuthorPelemnt);
      createArticleEl.appendChild(createContentPelement);
      createArticleEl.appendChild(createdivForButtons);

      getSectionForPosts.appendChild(createArticleEl);

      getAuthorElement.value   = '';
      getTitleElement.value    = '';
      getCategoryElement.value = '';
      getTextAraeElement.value = '';
   })

   function deleteFunction(e){
      e.currentTarget.parentElement.parentElement.remove();
   }

   function archiveFunction(e){
      let getParentElement = e.currentTarget.parentElement.parentElement;
      let getTitle = getParentElement.children[0].textContent;
      let getSectionArchive = document.querySelector('.archive-section')
      let getOrderedList  = document.querySelector('ol');
      let createLiElement = document.createElement('li');
      createLiElement.textContent = getTitle;

      getOrderedList.appendChild(createLiElement);

      let sort = Array.from(getSectionArchive.querySelectorAll('li'));
     
         sort.sort((a, b) => a.textContent.localeCompare(b.textContent))
             .forEach(x => {
               getOrderedList.appendChild(x);
             });

      e.currentTarget.parentElement.parentElement.remove();
   }
}