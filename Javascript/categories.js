function categoriesPost() {
    fetch('../Javascript/allpost.json')
        .then((res) => res.json())
        .then((data) => {
            var categories = ''
            data.forEach((tag) => {
            categories += `
            <div class="tag">
                <div class="tag-img">
                    <a href="${tag.linktag}"><img src="${tag.img}" alt=""></a>
                </div>
                <div class="details">
                    <div class="details-title"><a href="${tag.linktag}"><h1>${tag.tag}</h1></a></div>
                    <div class="details-desc"><p>${tag.desc}</p></div>
                    <div class="details-post-number"><a href="${tag.linktag}"><span id="post-number">${tag.content.length} </span>posts</a></div>
                </div>
            </div>
            `
            document.getElementById("categories").innerHTML = categories
            })
        })
}

categoriesPost()