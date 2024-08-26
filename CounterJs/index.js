// COUNTER VARIABLE

let counter = 0;

function counterincrement(){
    try{
        counter++;
        increment();
    } catch(e){
        console.log(e);
    }
}
counterincrement();