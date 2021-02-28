class Book {
    id: number
    title:String;
    description:String;
    author:String;
    coverImageUrl:String;

    constructor(id:number, title:String,author:String)
    {
        this.title=title;
        this.author=author;
        this.description='';
        this.coverImageUrl='';
        this.id = id;
    }
}

export {Book};