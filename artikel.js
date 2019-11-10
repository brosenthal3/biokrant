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
        const rubriek = currentElement.getAttribute('rubriek');
        const imageSrc = currentElement.getAttribute('imageSrc');
        const inhoud = currentElement.getAttribute('inhoud');
        const link = currentElement.getAttribute('link');
        currentElement.innerHTML = `
            <div>
                <div class="col s12 m6">
                    <div class="card">
                    <a href="artikelen/${link}"><div class="card-image">
                        <img src="${imageSrc}">
                        <span class="card-title">
                            <span class="rubriek">${rubriek}</span>
                            <br>
                            <span class="title">${title}</span>
                        </span>
                    </div></a>
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