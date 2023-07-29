var postApi = '../Json_Life/Y_nghia_cuoc_song.json';
function ReadFile(){
    fetch(postApi)
    .then(function(response){
        return response.json();
    })
    .then (function (post1){
        var html = '';
        var Changehtml = document.querySelector('.post__header');
        html = `<div class="post__image">
            <img src="${post1.background}" alt="Y nghia cuoc song">
        </div>
        <div class="post__title">
            <div class="post__title-user">
                <div class="body__thurmd">
                    <a href="#" class="static-avatar">
                        <img src="../img/avatar.jpg" alt="Avata" class="author-image" >
                    </a>
                </div>
                <span class="name">Quốc Đạt</span>
            </div>
            <h1>${post1.titles}</h1>
        </div>`;
        Changehtml.innerHTML = html;
        var html1 = ``;
        for(let i = 0; i < post1.main.length; i++){
            html1 += `  
                    <h1>${post1.main[i].title}</h1>`;
                    let n = post1.main[i].discription.length;
                    for(let j = 0; j < n; j++){
                        html1 += `<p>${post1.main[i].discription[j].mean}</p>`
                    }
        }
        html1 += `</div>`;
        var Changehtml = document.querySelector('.post__content');
        console.log(Changehtml)
        Changehtml.innerHTML = html1;
        console.log(post1)
    })
   
}

