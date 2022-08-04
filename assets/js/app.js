let cl = console.log;

let data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://images.unsplash.com/photo-1657299156261-4ce1d0a2cf5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://images.unsplash.com/photo-1658904352365-3d5f537b5983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://images.unsplash.com/photo-1659221483765-1678962b7c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60E",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://images.unsplash.com/photo-1655910837849-658b0d2d431b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0NXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://images.unsplash.com/photo-1658197566869-d2c36e424d67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://images.unsplash.com/photo-1657535130855-80d1ce1445b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }]

    let postInfo = document.getElementById("postInfo")

    let result='';

    data.forEach((post)=>{
        result +=`<div class="col-md-4 mb-5 mt-5">
        <div class="card">
            <div class="card-body bg-warning">
                <figure class="post">
                    <img src="${post.url}" alt=""class="img-fluid">
                    <figcaption>
                        <p>
                            ${post.title}
                        </p>
                    </figcaption>
                    <span class="id">
                        ${post.id}
                    </span>
                    <span class="albumId">
                        ${post.albumId}
                    </span>
                </figure>
            </div>
        </div>
    </div>`
    })

    postInfo.innerHTML = result;