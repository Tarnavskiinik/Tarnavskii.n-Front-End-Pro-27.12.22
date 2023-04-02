const wrapper = document.querySelector('.post-wrapper');
const input = wrapper.querySelector('input');
const form = wrapper.querySelector('form');
const main = wrapper.querySelector('main')

function response(e){
    if (e.status < 200 || e.status >= 400) {
        throw Error('Post is not found');
    }

    return e.json();
}
function getComments(postId) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments').then(response).then(comments => {
        const commentsBlock = wrapper.querySelector('.comments');
        commentsBlock.innerHTML = `
            <h3>Comments</h3>
            <ul>
                ${comments.map(comment => {
                    const {email, name, body} = comment;
                    return `<li><a href="mailto:${email}">${name}</a>: ${body}</li>`
        }).join('')}
            </ul>
        `
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const postId = Math.min(Math.max(+input.value, 1), 100);

    fetch('https://jsonplaceholder.typicode.com/posts/' + postId).then(response).then(post => {

        main.innerHTML = `
            <article>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button onclick = 'getComments(${postId})'>Comment</button>
                <section class="comments">
                   
                </section>
            </article>
        `
    }).catch(alert)
})