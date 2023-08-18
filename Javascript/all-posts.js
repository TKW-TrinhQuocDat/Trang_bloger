function createPost() {
    fetch('../Javascript/allpost.json')
        .then((res) => res.json())
        .then((data) => {
            var output = ''
            var cntPost = ''
            var mostPopular = '<h1 class="sidebar-heading">Recent Posts</h1>'
            var mostPopularLimit = 0
            // console.log(data)
            data.forEach(tag => {
                // console.log(post.content)
                tag.content.forEach(post => {
                    output += `
                <div id="${tag.tag}-${post.id}" class="post">
                <div class="post-img">
                    <a href=${post.link}><img src=${post.img} alt=""></a>
                </div>
                <div class="post-content">
                    <div class="post-tag"><a href=${tag.linktag}>${tag.tag}</a></div>
                    <h2 class="post-title"><a href=${post.link}>${post.title}</a></h2>
                    <div class="post-desc">
                        ${post.desc}
                    </div>
                    <div class="subcontent">
                        <div><i class="fa-regular fa-calendar-minus"></i>${post.time}</div>
                        <div onclick="like('${tag.tag}-like-${post.id}')" id="${tag.tag}-like-${post.id}"><i class="fa-solid fa-heart"></i>99</div>
                        <div><i class="fa-solid fa-comment-dots"></i>0</div>
                        <div><i class="fa-solid fa-share-nodes"></i></div>
                    </div>
                </div>
                </div>
            </div>
                `

                
                if(mostPopularLimit < 3){
                    mostPopular += `
                    
                    <div class="most-popular-post">
                       <div class="most-popular-post-img"><a href="${post.link}"><img src=${post.img} alt=""></a></div>
                       <div class="most-popular-post-desc">
                            <a href=${post.link}>${post.title}</a>
                           <div><i class="fa-regular fa-calendar-minus"></i>${post.time}</div>
                        </div>
                    </div>
               
                    `
                    mostPopularLimit++
                }
                
                })

                cntPost += `
                <li>
                    <a href="${tag.linktag}"><div>${tag.tag}</div></a>
                    <a href="${tag.linktag}"><div id="cate-${tag.id}">${tag.content.length}</div></a>
                </li>
            `

        
                
            })
            output += `<div id="load-more"><span>Load more</span></div>`
            document.getElementById("posts").innerHTML = output
            document.getElementById("sidebar-categories").innerHTML = cntPost
            document.getElementById("most-popular").innerHTML = mostPopular

            var loadMore = document.getElementById("load-more")
            var boxes = [...document.querySelectorAll(".post")]
            var currentPost = 5
            for (let i = 0; i < currentPost; i++) {
                boxes[i].style.display = 'flex'
            }

            loadMore.onclick = () => {
                for (var i = currentPost; i < currentPost + 5; i++) {
                    if (i <= boxes.length - 1) {
                        boxes[i].style.display = 'flex'
                    }
                    else {
                        loadMore.style.display = 'none'
                    }

                }
                currentPost += 5
            }



        })
}

createPost()

function like(id) {
    var active = document.getElementById(id)
    var cnt = parseInt(document.getElementById(id).textContent)
    active.classList.toggle("active-love")
    if (active.classList.contains("active-love")) {
        cnt++
        active.innerText = cnt
    }
    else {
        cnt--
        active.innerText = cnt
    }
}

function search() {
    var searchbox = document.getElementById("search-blog").value.toUpperCase()
    var posts = document.getElementById("posts")
    var post = document.querySelectorAll(".post")
    var titlePost = document.querySelectorAll(".post-title a")
    // console.log(titlePost)
    for (var i = 0; i < post.length; i++) {
        var match = titlePost[i].textContent
        // console.log(match)
        if (match.toUpperCase().indexOf(searchbox) > -1) {
            post[i].style.display = "flex"
        }
        else {
            post[i].style.display = "none"
        }
        // console.log(match)
    }
}





