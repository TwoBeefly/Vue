//mixin相当于一个共享的东西，需要时引入即可
export const mixin = {
    methods: {
        show(){
            alert(this.name)
        }  
    }
}
