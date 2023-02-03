import { createStore } from 'redux';

export default function configureStore() {

    const store = createStore(() => {
        return{
            message: 'Hello World',
            data1: 'test',
            data2: 'test2'
        }
    });

    return store;
}