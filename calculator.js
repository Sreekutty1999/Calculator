function display(num){
    result.value+=num
}
function clearDisplay(){
    result.value=""
}

function back(){
    result.value=result.value.slice(0,-1)
}

function calculate(){
    try{
        result.value=eval(result.value)
    }
    catch(error){
        result.value='error'
        setTimeout(()=>{
            result.value=""
        },1000)
    }
}