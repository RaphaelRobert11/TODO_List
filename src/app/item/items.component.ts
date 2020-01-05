import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { LocalStorage } from "./local-storage";
//import { Todo } from "./todo";
import { Item } from "./item";
import * as dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    selector: 'todos',
    //templateUrl: './todos.component.html'
    templateUrl: './items.component.html'
})
//export class TodosComponent implements OnInit {
    export class ItemsComponent implements OnInit {

    //public todoList: Array<Todo>;
    public todoList: Array<Item>;
    public isEditing: boolean;

    constructor(private router: RouterExtensions) {
        //this.todoList = new Array<Todo>();
        this.todoList = new Array<Item>();
        //this.isEditing = false;
    }

    ngOnInit() {
        LocalStorage.todos.forEach(e => {
            //this.todoList.push(new Todo(e.todoName, e.isDone, e.isEditing));
            this.todoList.push(new Item(e.name));
        });
    }

    public newTodo() {
        dialogs.prompt({
            title: "Nouvelle tâche",
            message: "Entrez le titre de la nouvelle tâche",
            okButtonText: "Valider",
            cancelButtonText: "Annuler",
            inputType: dialogs.inputType.text
        }).then(r => {
            if (r.result && r.text != "") {
                //this.todoList.push(new Todo(r.text));
                this.todoList.push(new Item(r.text));
                LocalStorage.todos = this.todoList;
            }
        });
    }

    public deleteTodo(item: Item) {
        var index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
        LocalStorage.todos = this.todoList;
    }

    

    public editTodo(item: Item) {
        if (this.isEditing)
            this.todoList.forEach(t => { t.editing = false; });
        this.isEditing = true;
        item.editing = true;
        LocalStorage.todos = this.todoList;
    }

    public doneEditing(item: Item) {
        item.editing = false;
        this.isEditing = false;
        LocalStorage.todos = this.todoList;
    }

    /*public toggleDone(item: Item) {
        item.done = !item.done;
        LocalStorage.todos = this.todoList;
    }*/
}
