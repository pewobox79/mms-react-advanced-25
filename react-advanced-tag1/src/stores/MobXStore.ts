import { makeAutoObservable } from "mobx";

class MobXStore{
    count= 0;
    message= "hallo aus mobx"

    constructor(){
        makeAutoObservable(this)
    }

    increment(){
        this.count++
    }

    updateMessage(newMessage:string){
        this.message = newMessage;
    }

}

const mobStore = new MobXStore();
export default mobStore;