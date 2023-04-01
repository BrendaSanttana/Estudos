const posts = [
    {
        title: 'Logica de Programação: o que é e por que é importante?',
        description:
            'A lógica de programação é importante porque é ela quem nos dá as ferramentas necessárias para executar o processo mais básico no desenvolvimento de alguma aplicação: a criação de seu algoritmo.',
        link: 'https://kenzie.com.br/',
    },
    {
        title: 'Operadores Logicos, o que são?' ,
        description: 'Imagine a seguinte situação: você prometeu ao seu amigo que iria à casa dele final de semana para fazerem um churrasco. Porém, para que isso de fato ocorra, é necessário que você não tenha outro compromisso planejado e possua dinheiro na conta bancária',
        link: 'https://kenzie.com.br/blog/como-aprender-a-programar-2/',
    },
    {
        title: 'Como Aprender a Programar',
        description: 'Vem pra Kenzie',
        link: 'https://kenzie.com.br/',
    },
];


for (let postIndice = 0; postIndice < posts.length; postIndice++) {
    document.querySelector('.posts').insertAdjacentHTML('beforeend', `
       
    <article class="post">
        <h1 class = 'post-title'>
       ${posts[postIndice].title}
        </h1>
        <p class="post-description">
        ${posts[postIndice].description}
        </p>
        <a href="${posts[postIndice].link}" class="post-link">Acessar post</a>
        </article>`
    );
}

