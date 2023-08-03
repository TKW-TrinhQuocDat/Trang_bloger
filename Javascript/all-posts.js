var cnt = 0;
function onClick() {
    
    if(cnt === 0) {
        document.querySelector('#ext').style.display = "flex"
        cnt++;
    }
    else {
        document.querySelector('#ext').style.display = "none"
        cnt--;
    }
}

var like_cnt = 0;
function like() {
    like_cnt++;
    document.querySelector('#like-cnt').innerText = like_cnt;
}

var cnt = 0;
function onClickYear() {
    
    if(cnt === 0) {
        document.querySelector('#posts_2023').style.display = "none"
        cnt++;
    }
    else {
        document.querySelector('#posts_2023').style.display = "flex"
        cnt--;
    }
}