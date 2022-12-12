onload = () => {
  noticia();
};

var url0 = "http://servicodados.ibge.gov.br/api/v3/noticias/?busca=reciclagem";
async function noticia() {
  let response = await fetch(url0);

  let data = await response.json();

  var str = "";
  let cont = 2;
  for (let i = 0; i < data.items.length; i++) {
    const element = data.items[i];
    str += `
            <div class="card shadow mb-4 border-left-primary">
                <!-- Card Header - Accordion -->
                <a href="#collapseCardExample${cont}" class="d-block card-header py-3 collapsed" data-toggle="collapse"
                    role="button" aria-expanded="false" aria-controls="collapseCardExample${cont}">
                    <h6 class="m-0 font-weight-bold text-primary">${element.titulo}</h6>
                </a>
                <!-- Card Content - Collapse -->
                <div class="collapse" id="collapseCardExample${cont}">
                    <div class="card-body">
                        <div>
                        ${element.introducao}
                        </div>
                        <div class="text-center">
                            <a href="${element.link}" target="_blank" class="btn btn-info btn-icon-split text-center">
                                <span class="icon text-white-50">
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                                <span class="text">Mais detalhes</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
    cont++;
  }

  url0 = data.next;
  document.querySelector("#noticia").insertAdjacentHTML("beforeend", str);
}
