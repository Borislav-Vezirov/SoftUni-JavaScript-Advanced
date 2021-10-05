class ArtGallery{
    constructor(creator){

        this.creator = creator;

        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250
        };
        this.listOfArticles = [];
        this.guests         = [];
    }

    addArticle( articleModel, articleName, quantity ){

        let isInTheArticle = false;

        articleModel = articleModel.toLowerCase();

        if(this.possibleArticles[articleModel] === undefined){
            throw new Error('This article model is not included in this gallery!');
        }

        this.listOfArticles.map(x => {
            
            if(x.articleName !== undefined && x.articleModel === articleModel){
                x.quantity += quantity;
                isInTheArticle = true;
                return;
            }
        })

        if(!isInTheArticle){
            this.listOfArticles.push({articleModel, articleName, quantity});
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest( guestName, personality){
        let isBeenInvited = false;

        this.guests.map(x => {
            if(x.guestName === guestName){
                return isBeenInvited = true;
            }
        })
        
        if(isBeenInvited){
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = {
            'Vip'   : 500,
            'Middle': 250
        }

        points[personality] == undefined ? points[personality] = 50 : points[personality];

        this.guests.push({guestName, points: points[personality], purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`
    }

    buyArticle ( articleModel, articleName, guestName){
        
        let isInTheArticle      = false;
        let isQtyIsEqualToZero  = false;
        let isGuestIsInTheArray = false; 

        articleModel = articleModel.toLowerCase();

        this.listOfArticles.map(x => {
            if(x.articleName === articleName && x.articleModel === articleModel){
                isInTheArticle = true;
                
                if(x.quantity == 0){
                    isQtyIsEqualToZero = true
                    return
                }
            }
        })
        
        if(!isInTheArticle){
            throw new Error('This article is not found.')
        }

        if(isQtyIsEqualToZero){
            throw new Error(`The ${articleName} is not available.`)
        }
        let isSuccessfull = false;
        let isLessPoints  = false;
        this.guests.map(x => {
            if(x.guestName === guestName){
                isGuestIsInTheArray = true;

                if(x.points < this.possibleArticles[articleModel]){
                    isLessPoints = true;

                }else{
                    x.points -= this.possibleArticles[articleModel];
                    x.purchaseArticle += 1;
                    this.listOfArticles.map(x => {
                        if(x.articleName === articleName && x.articleModel === articleModel){
                            return x.quantity -= 1;
                        }
                    });
                    isSuccessfull = true;
                }
            }
        })

        if(!isGuestIsInTheArray){
            throw new Error('This guest is not invited.');
        }
        if(isLessPoints){
            return  'You need to more points to purchase the article.'
        }
        if(isSuccessfull){
            return  `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }

    showGalleryInfo (criteria){
        let guestResult   = '';
        let articleResult = '';

        articleResult += `Articles information:\n`;
        this.listOfArticles.forEach(x => {
            articleResult += `${x.articleModel} - ${x.articleName} - ${x.quantity}\n`;
        })

        guestResult += `Guests information:\n`;
        this.guests.forEach(x => {
            guestResult += `${x.guestName} - ${x.purchaseArticle}\n`
        })

        if(criteria === 'article'){
            return articleResult.trim();
        }else{
            return guestResult.trim();
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




