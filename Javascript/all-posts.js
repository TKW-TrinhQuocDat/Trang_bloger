function createPost() {
    fetch('../Javascript/allpost.json')
    .then((res) => res.json())
    .then((data) => {
        let output = ''
        data.forEach((post) => {
            // console.log(post.url)
            fetch(post.url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(post.linktag)
                output += `
                <div id="post-${post.id}" class="post">
                <div class="post-img">
                    <a href=${post.link}><img src=${data.background} alt=""></a>
                </div>
                <div class="post-content">
                    <div class="post-tag"><a href=${post.linktag}>${post.tag}</a></div>
                    <h2 class="post-title"><a href=${post.link}>${data.titles}</a></h2>
                    <div class="post-desc">
                        ${data.main[0].discription[0].mean}
                    </div>
                    <div class="subcontent">
                        <div><i class="fa-regular fa-calendar-minus"></i>${post.time}</div>
                        <div id="like-${post.id}"><i class="fa-solid fa-heart"></i>99</div>
                        <div><i class="fa-solid fa-comment-dots"></i>0</div>
                        <div><i class="fa-solid fa-share-nodes"></i></div>
                    </div>
                </div>
                </div>
            </div>
                `
                document.getElementById("posts").innerHTML = output
            })

         })
    })
}

createPost()


function search() {
    var searchbox = document.getElementById("search-blog").value.toUpperCase()
    var posts = document.getElementById("posts")
    var post = document.querySelectorAll(".post")
    var titlePost = document.querySelectorAll(".post-title a")
    // console.log(post.length)
    for(var i = 0; i < post.length; i++) {
        var match = titlePost[i].textContent
        if(match.toUpperCase().indexOf(searchbox) > -1) {
            post[i].style.display = ""
        }
        else {
            post[i].style.display = "none"
        }
        // console.log(match)
    }
}

search()

var x = document.querySelectorAll(".post")
console.log(x)