li = document.querySelectorAll('li');
for(e = 0; e < li.length; e ++ ) {
    console.log(li[e]);
    if(li[e].innerHTML[0] == 'n') {
        li[e].classList.add('not-included');
    } else if(li[e].innerHTML[0] == 'i') {
        li[e].classList.add('important');
    } else if(li[e].innerHTML[0] == 'f') {
        li[e].classList.add('failed');
    } else {
        continue;
    }
    li[e].innerHTML = li[e].innerHTML.substr(1);
}

