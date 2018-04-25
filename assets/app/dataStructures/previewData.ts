export class previewData{
    id:number;
    header:string;
    text:string;
    image:string;
    link:string;
    constructor(id,header,text,image,link){
        this.id=id;
        this.header=header;
        this.text=text;
        this.image=image;
        this.link=link;
    }
}