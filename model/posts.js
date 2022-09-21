module.exports = {

    posts: [
        {id: 'usdhgaiud',
        title: 'Teste do Mural',
        description: 'Descrição teste'}
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {

        this.posts.push({id: generateId(), title, description});
    }

}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}