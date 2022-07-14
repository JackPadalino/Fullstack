/* eslint-disable no-unused-vars */
createCalculator = () => {
    return{
        total:0,
        add(num){
            this.total+=num;
            return null;
        },
        subtract(num){
            this.total-=num;
            return null;
        },
        clear(){
            this.total = 0;
            return null;
        },
        value(){
            return this.total
        },
    };
};

/// try to re-do this using the 'map' method

addSquareMethod = (instances) => {
    for(let i=0;i<instances.length;i++){
        instances[i].square=()=>{
            return instances[i].total**2;
        };
    };
    return instances;
};