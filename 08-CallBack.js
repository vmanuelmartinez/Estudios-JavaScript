console.log('CALLBACK, retorna una función enviada como argumento')

const posts = [
    {
        UserId: "1",
        id: 1,
        tittle: "culpa tenetu",
        Body: ". In rerum labore et voluptas suscipit hic necessitatibus sunt est nemo dolorum!",
    },

    {
        UserId: "1",
        id: 2,
        tittle: "Ut quos sunt est iste",
        Body: "eligendi ab modi aliquam ut accusamus cumque. Nam aperiam nulla in exercitationem",
    },

    {
        UserId: "1",
        id: "3",
        tittle: "Lorem ipsum dolor sit amet.",
        Body: "Qui rerum sint eos distinctio similique nam blanditiis magnam At assumenda nihil non error maxime qui voluptatibus quos? ",

    },

    {
        UserId: "1",
        id: "4",
        tittle: "Id veritatis laudantium qui",
        Body: "deserunt commodi nam enim nihil ut ipsa doloremque et libero excepturi?",

    },
]

const findPostByID = (id, callback) => {
    const post = posts.find(item => item.id === id );

    if (post){ //callback, o primeiro é null, o segundo a resposta positiva.
       callback(null, post)
       
    }else {
        //callback no erro
        callback("No se encontrou o post com id " + id );
    }
   
}

findPostByID(6, (err, post) => {

    if(err) return console.log(err)

      console.log(post)
    });