let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');

btn_left.addEventListener('click', e =>{
    let a = document.getElementById('in');
    if(a.value <= 0){
        return
    }else {
        a.value--
    }
    
});

btn_right.addEventListener('click', e =>{
    
    let a = document.getElementById('in');
    if(a.value >= 20){
        return
    }else {
        a.value++
    }
});


let btn_l = document.getElementById('1');
let btn_r = document.getElementById('2');

btn_l.addEventListener('click', e =>{
    let a = document.getElementById('3');
    if(a.value <= 0){
        return
    }else {
        a.value--
    }
    
});

btn_r.addEventListener('click', e =>{
    let a = document.getElementById('3');
    if(a.value >= 20){
        return
    }else {
        a.value++
    }
    
});