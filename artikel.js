const artikelData = [
    {
        title: 'title1',
        inhoud: 'lorem  a, laborum eos quae non iure enim tempora numquam a sapiente aliquid voluptate. Quo, doloremque molestiae aliquid mollitia labore rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus velit minima animi iusto pariatur repellendus nulla assumenda, nobis, voluptate reiciendis situmque asperior',
        imageSrc: 'inhoud.jpg',
        link: 'artikelen/artikel1.html'
    },
    {
        title: 'title3',
        inhoud: 'lorem  a, laborum eos quae non iure enim tempora numquam a sapiente aliquid voluptate. Quo, doloremque molestiae aliquid mollitia labore rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus velit minima animi iusto pariatur repellendus nulla assumenda, nobis, voluptate reiciendis situmque asperior',
        imageSrc: 'inhoud.jpg',
        link: 'artikelen/artikel1.html'
    },
    {
        title: 'title4',
        inhoud: 'lorem  a, laborum eos quae non iure enim tempora numquam a sapiente aliquid voluptate. Quo, doloremque molestiae aliquid mollitia labore rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus velit minima animi iusto pariatur repellendus nulla assumenda, nobis, voluptate reiciendis situmque asperior',
        imageSrc: 'inhoud.jpg',
        link: 'artikelen/artikel1.html'
    },
    {
        title: 'title2',
        inhoud: 'lorem  a, laborum eos quae non iure enim tempora numquam a sapiente aliquid voluptate. Quo, doloremque molestiae aliquid mollitia labore rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus velit minima animi iusto pariatur repellendus nulla assumenda, nobis, voluptate reiciendis situmque asperior',
        imageSrc: 'inhoud.jpg',
        link: 'artikelen/artikel1.html'
    },
];

$('document').ready(function(){
    /*var elements = artikelData.map((artikel, index) =>{
        return `
            <div>
                <div class="col s6 m4">
                    <div class="card">
                    <div class="card-image">
                        <img src="${artikel.imageSrc}">
                        <span class="card-title">${artikel.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${artikel.inhoud}</p>
                    </div>
                    <div class="card-action">
                        <a href="${artikel.link}">MEER LEZEN</a>
                    </div>
                    </div>
                </div>
            </div>
        `
    });*/

    $('.artikel').each(function(element){
        const currentElement = $('.artikel')[element];
        const title = currentElement.getAttribute('title');
        const imageSrc = currentElement.getAttribute('imageSrc');
        const inhoud = currentElement.getAttribute('inhoud');
        const link = currentElement.getAttribute('link');
        currentElement.innerHTML = `
            <div>
                <div class="col s12 m6">
                    <div class="card">
                    <div class="card-image">
                        <img src="${imageSrc}">
                        <span class="card-title">${title}</span>
                    </div>
                    <div class="card-content">
                        <p>${inhoud}</p>
                    </div>
                    <div class="card-action">
                        <a href="artikelen/${link}">MEER LEZEN</a>
                    </div>
                    </div>
                </div>
            </div>
            `;
    })
})