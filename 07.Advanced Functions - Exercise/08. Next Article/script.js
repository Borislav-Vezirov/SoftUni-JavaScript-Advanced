function getArticleGenerator(articles) {
    
    let getContentEl = document.querySelector('#content');

    return () => {
        if(articles.length !== 0){
            let article = document.createElement('article');
            article.textContent = articles.shift();
            getContentEl.appendChild(article);
        }
    }
}
