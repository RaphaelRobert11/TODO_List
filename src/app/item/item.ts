/* Original
export interface Item {
    id: number;
    name: string;
    role: string;
} */


// Nom de base : Todo
export class Item {
    //id: number;
    name: string;
    /*
    private todoName: string;
    private isDone: boolean;*/
    private isEditing: boolean;
    


    /*constructor(name: string, done?: boolean, isEditing?: boolean) {
        this.todoName = name;
        this.done = (done == null ? false : done);
        this.isEditing = (isEditing == null ? false : isEditing);
    }*/

    /*constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }*/

    constructor(name: string, isEditing?: boolean) {
        this.name = name;
        this.isEditing = (isEditing == null ? false : isEditing);
    }



    /*public set done(done: boolean) {
        this.isDone = done;
    }

    public get done(): boolean {
        return this.isDone;
    }*/

    /*public get name(): string {
        return this.todoName;
    }*/
    public get todoName(): string {
        return this.name;
    }

    public set todoName(newName: string) {
        this.name = newName;
    }

    public get editing(): boolean {
        return this.isEditing;
    }

    public set editing(newEditing: boolean) {
        this.isEditing = newEditing;
    }
}