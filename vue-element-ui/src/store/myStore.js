export const store = {
    state: {
        count: 0,
    },
    addCountAction() {
        this.state.count++;
    },
    downCountAction() {
        this.state.count--;
    },
};
