const count = {
    state: {
        count: 0,
        todos: [
            { id: 1, text: "第一件事", done: true },
            { id: 2, text: "第二件事", done: false },
        ],
    },
    getters: {
        todoAction: (state) => {
            return state.todos.map((todos) => todos.text);
        },
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        add(state, paylod) {
            state.count += paylod.num;
        },
    },
    actions: {
        increment({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("increment");
                    resolve();
                }, 1000);
            });
        },
    },
};

export default count;
