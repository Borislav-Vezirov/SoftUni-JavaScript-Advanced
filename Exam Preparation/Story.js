class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }
    like(username){
        if(this._likes.includes(username)){
            return `You can't like the same story twice!`;
        }
        if(this.creator === username){
            return `You can't like your own story!`;
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username){
        
        if(!this._likes.includes(username)){
            throw new Error(`You can't dislike this story!`); 
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`
    }

    
    comment(username, content, id) {
        
        let comment = {
            Id: id,
            Username: username,
            Content: content,
            Replies: [],
        };
 
        let commentWithId = this._comments.find(c => c.Id === id);
 
        if (commentWithId) {
            let replyID = Number(commentWithId.Id + '.' + (commentWithId.Replies.length + 1));
            let reply = {
                Id: replyID,
                Username: username,
                Content: content,
            };
 
            commentWithId.Replies.push(reply);
 
            return 'You replied successfully';
        }
 
        comment.Id = this._comments.length + 1;
        this._comments.push(comment);
 
        return `${username} commented on ${this.title}`;
    }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));