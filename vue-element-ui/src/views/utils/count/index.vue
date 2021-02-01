<template>
    <div class='app-container'>
        <div>{{ count.count }}</div>
        <div>{{ textList[0] }}</div>
        <button @click="de">-</button>
        <button @click="add">+</button>
        <button @click="realAdd">add</button>
        <button @click="actionIn">actionIn</button>
    </div>
</template>

<script>
import { store } from '@/store/index'
import { mapState, mapGetters, mapMutations,mapActions } from 'vuex'
export default {
    name: '',
    data () {
        return {
           
        }
    },
    computed: {
        // 混入state
        ...mapState([
            'count'
        ]),
        // 混入getters
        // ...mapGetters([
        //     'todoAction'
        // ])
        // 命名
        ...mapGetters({
            textList:'todoAction'
        })
    },
    methods:{
        ...mapMutations({
            add:'increment',
            de:'decrement',
        }),

        realAdd(){
            this.$store.commit({
                type: 'add',
                num:12
            })
        },

        // ...mapActions({
        //     actionIn:'increment'
        // }),
        // Promise
        actionIn(){
            this.$store.dispatch('increment').then(()=>{
                console.log('增加了');
            })
        }
    }
}
</script>

<style scoped>
</style>
