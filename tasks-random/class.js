class Comment {
    constructor(text) {
        this.comment = text;
        this.votesQt = 0;
    }

    upvote(votesQt) {
        this.votesQt += 1;
    }

    static mergeComments(first, second) {
        return `${first}, ${second}`;
    }
}

const firstComment = new Comment('hello');
console.log(firstComment);

// проверить какому классу принадлежит экземпляром
firstComment instanceof Comment;
firstComment instanceof Object;

firstComment.upvote();
console.log(firstComment.votesQt);

firstComment.upvote();
console.log(firstComment.votesQt);

console.log(Comment.prototype.constructor === Comment);

firstComment.hasOwnProperty('comment');
firstComment.hasOwnProperty('votesQt');
firstComment.hasOwnProperty('upvote');
firstComment.hasOwnProperty('hasOwnProperty');

console.log(Comment.mergeComments('bla', 'bla'));
