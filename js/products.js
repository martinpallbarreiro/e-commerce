var productos = [];

function showProducts(array){

     let htmlContentToAppend = "";
     for(let i = 0; i < array.length; i++){
         let producto = array[i];

         htmlContentToAppend += `
         <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + producto.imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>                
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                       <h4 class="mb-1">`+ producto.name +`</h4>                      
                       <p> `+ producto.description +`</p>
                        <small class="text-muted">` + producto.cost + producto.currency +`</small>
                    </div>

                </div>
            </div>
        </div>
        `
        
         document.getElementById("didi").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productos = resultObj.data;
            //Muestro las categorías ordenadas
            showProducts(productos);
        }
        hideSpinner();
    });
});






