export class Model {
    user : String;
    items : Array<TodoItem>;
    constructor() {
        this.user = "Adam";
        this.items = [new TodoItem("Buy Flowers", false),
        new TodoItem("Get Shoes", true),
        new TodoItem("Collect Tickets", false),
        new TodoItem("Call Joe", false)]
    }
}
export class TodoItem {
    action : String;
    done : Boolean;
    constructor(action : String, done : Boolean) {
        this.action = action;
        this.done = done;
    }
}