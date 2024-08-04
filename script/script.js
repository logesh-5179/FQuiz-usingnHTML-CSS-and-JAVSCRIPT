let curr=0;
const temp=document.querySelectorAll('.quest');
const total=temp.length;

document.addEventListener('DOMContentLoaded', () => {
    show(curr);
});

function show(index) {
    temp.forEach((container,i)=>{
        container.classList.remove('active');
        if (i===index) {
            container.classList.add('active');
        }
    });
}

function next() {
    if(curr<total- 1) {
        curr++;
        show(curr);
    } 
    else {
        alert('You have completed the quiz!');
    }
}

function val(select) {
    const buttons=select.parentElement.querySelectorAll('.btn');
    buttons.forEach(button=>{
        button.classList.remove('correct', 'wrong');
    });

    if(select.id==='correct') {
        select.classList.add('correct');
        return true;
    } 
    else{
        select.classList.add('wrong');
        return false;
    }
}
