import * as ApplicationSettings from 'tns-core-modules/application-settings'
export class LocalStorage {
    public static set todos(todo: Array<any>) {
        ApplicationSettings.setString("todos", JSON.stringify(todo));
    }

    public static get todos(): Array<any> {
        var todos = ApplicationSettings.getString("todos");
        return todos == null ? new Array<any>() : JSON.parse(todos);
    }
}