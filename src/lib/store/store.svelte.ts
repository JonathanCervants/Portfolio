export interface State{
    name: string;
    age: number;
}

const emptyState: State = {
    name: '',
    age: 0
}

function createStore(){
    const store = $state<State>(emptyState);

    return{
        get state(){
            return store;
        },
        get name(){
            return store.name;
        },
        set name(val:string){
            store.name = val;
        },
        get age(){
             return store.age;
        },
        set age(val:number){
            store.age = val;
        }
    }
}

export default createStore()