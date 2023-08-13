function createPost() {
    fetch('../Json_Business/business-test.json')
        .then((res) => res.json())
        .then((data) => {
            let output = ''
            data.forEach((post) => {
                output += `
                    <div id=${post.id} class="post">
                    <div class="post-img">
                        <a href=${post.link}><img src=${post.img} alt=""></a>
                    </div>
                    <div class="post-content">
                        <div class="post-tag"><a href="${post.link}">Business</a></div>
                        <h2 class="post-title"><a href="${post.link}">${post.title}</a></h2>
                        <div class="post-desc">
                            ${post.discription}
                         </div>
                         <div class="subcontent">
                            <div><i class="fa-solid fa-heart"></i>0</div>
                            <div><i class="fa-solid fa-comment-dots"></i>0</div>
                             <div><i class="fa-solid fa-share-nodes"></i></div>
                         </div>
                    </div>
                </div>
            `
            })
            document.getElementById("posts").innerHTML = output
        })
}

createPost()

