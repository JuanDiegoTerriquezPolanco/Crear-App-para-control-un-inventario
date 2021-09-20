//===============================|AGREGAR|===============================
//|==============|TITULO|==============|
let h2Add = document.createElement("h2");
h2Add.innerHTML = 'Agregar/Insertar';
document.body.appendChild(h2Add);
//|==============|CAMPO CODIGO|==============|
let inpIdAdd = document.createElement("input");
inpIdAdd.setAttribute('type', 'text');
inpIdAdd.setAttribute('placeholder', 'Código');
inpIdAdd.setAttribute('id', 'idProduct');
document.body.appendChild(inpIdAdd);
//|==============|CAMPO NOMBRE|==============|
let inpName = document.createElement("input");
inpName.setAttribute('type', 'text');
inpName.setAttribute('placeholder', 'Nombre');
inpName.setAttribute('id', 'name');
document.body.appendChild(inpName);
//|==============|CAMPO CANTIDAD|==============|
let inpAmount = document.createElement("input");
inpAmount.setAttribute('type', 'number');
inpAmount.setAttribute('placeholder', 'Cantidad');
inpAmount.setAttribute('id', 'amount');
document.body.appendChild(inpAmount);
//|==============|CAMPO COSTO|==============|
let inpCost = document.createElement("input");
inpCost.setAttribute('type', 'number');
inpCost.setAttribute('placeholder', 'Costo');
inpCost.setAttribute('id', 'cost');
document.body.appendChild(inpCost);
//|==============|BOTON AGREGAR|==============|
let inpAdd = document.createElement("input");
inpAdd.setAttribute('type', 'button');
inpAdd.setAttribute('value', 'Agregar');
inpAdd.setAttribute('id', 'btnAdd');
document.body.appendChild(inpAdd);
//|==============|ESTADO|==============|
let lbStateAdd = document.createElement("label");
lbStateAdd.innerHTML = 'Esperando💬';
lbStateAdd.setAttribute('style', 'color:gray;');
document.body.appendChild(lbStateAdd);
//|==============|DIVICION|==============|
let hrInsert = document.createElement("hr");
document.body.appendChild(hrInsert);
//|==============|CAMPO INDICE|==============|
let inpIndex = document.createElement("input");
inpIndex.setAttribute('type', 'text');
inpIndex.setAttribute('placeholder', 'Indice');
inpIndex.setAttribute('id', 'index');
document.body.appendChild(inpIndex);
//|==============|BOTON INSERTAR|==============|
let inpInsert = document.createElement("input");
inpInsert.setAttribute('type', 'button');
inpInsert.setAttribute('value', 'Insertar');
inpInsert.setAttribute('id', 'btnInsert');
document.body.appendChild(inpInsert);
//|==============|ESTADO|==============|
let lbStateIsrt = document.createElement("label");
lbStateIsrt.innerHTML = 'Esperando💬';
lbStateIsrt.setAttribute('style', 'color:gray;');
document.body.appendChild(lbStateIsrt);
//|==============|DIVICION|==============|
let hrAdd = document.createElement("hr");
document.body.appendChild(hrAdd);
//===============================|ELIMINAR|===============================
//|==============|TITULO|==============|
let h2Delete = document.createElement("h2");
h2Delete.innerHTML = 'Eliminar';
document.body.appendChild(h2Delete);
//|==============|CAMPO CODIGO|==============|
let inpIdDlt = document.createElement("input");
inpIdDlt.setAttribute('type', 'text');
inpIdDlt.setAttribute('placeholder', 'Código');
inpIdDlt.setAttribute('id', 'idProductDlt');
document.body.appendChild(inpIdDlt);
//|==============|BOTON ELIMINAR|==============|
let inpDelate = document.createElement("input");
inpDelate.setAttribute('type', 'button');
inpDelate.setAttribute('value', 'Eliminar');
inpDelate.setAttribute('id', 'btnDelete');
document.body.appendChild(inpDelate);
//|==============|ESTADO|==============|
let lbStateDlt = document.createElement("label");
lbStateDlt.innerHTML = 'Esperando💬';
lbStateDlt.setAttribute('style', 'color:gray;');
document.body.appendChild(lbStateDlt);
//|==============|DIVICION|==============|
let hrDlt = document.createElement("hr");
document.body.appendChild(hrDlt);
//===============================|BUSCAR|===============================
//|==============|TITULO|==============|
let h2Search = document.createElement("h2");
h2Search.innerHTML = 'Buscar';
document.body.appendChild(h2Search);
//|==============|CAMPO CODIGO|==============|
let inpIdSrch = document.createElement("input");
inpIdSrch.setAttribute('type', 'text');
inpIdSrch.setAttribute('placeholder', 'Código');
inpIdSrch.setAttribute('id', 'idProductSrch');
document.body.appendChild(inpIdSrch);
//|==============|BOTON BUSCAR|==============|
let inpSearch = document.createElement("input");
inpSearch.setAttribute('type', 'button');
inpSearch.setAttribute('value', 'Buscar');
inpSearch.setAttribute('id', 'btnSearch');
document.body.appendChild(inpSearch);
//|==============|ESTADO|==============|
let lbStateSrch = document.createElement("label");
lbStateSrch.innerHTML = 'Esperando💬';
lbStateSrch.setAttribute('style', 'color:gray;');
document.body.appendChild(lbStateSrch);
//|==============|DIVICION|==============|
let hrSrch = document.createElement("hr");
document.body.appendChild(hrSrch);
//===============================|LISTAS|===============================
//|==============|TITULO|==============|
let h2Lists = document.createElement("h2");
h2Lists.innerHTML = 'Enlistar';
document.body.appendChild(h2Lists);
//|==============|BOTON LISTA DEFAULT|==============|
let inpListDflt = document.createElement("input");
inpListDflt.setAttribute('type', 'button');
inpListDflt.setAttribute('value', 'Por defecto');
inpListDflt.setAttribute('id', 'btnListDflt');
document.body.appendChild(inpListDflt);
//|==============|BOTON LISTA REVES|==============|
let inpListRvrs = document.createElement("input");
inpListRvrs.setAttribute('type', 'button');
inpListRvrs.setAttribute('value', 'Al reves');
inpListRvrs.setAttribute('id', 'btnListRvrs');
document.body.appendChild(inpListRvrs);
//|==============|TABLAS|==============|
let table = document.createElement('table');
table.setAttribute('id','table')
let tbody = document.createElement('tbody');
tbody.setAttribute('id','tbody')
table.appendChild(tbody);
document.body.appendChild(table);
//|==============|ESTADO|==============|
let lbStateList = document.createElement("label");
lbStateList.innerHTML = 'Esperando💬';
lbStateList.setAttribute('style', 'color:gray;');
document.body.appendChild(lbStateList);
//=========================================|FUNCIONES|=========================================
//CREACION DE ARRAY PARA GUARDAR PRODUCTOS
let products = new Array();
//CLASE PARA LOS OBJETOS PRODUCTOS
class Product{
    constructor(id, name, amount, cost){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.cost = cost;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getAmount(){
        return this.amount;
    }
    getCost(){
        return this.cost;
    }
    getTotal(){
        return this.amount * this.cost;
    }
}
//|=========================================|AGREGAR|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', addProduct);

function addProduct(){
    //ASIGNACION DE VALORES, ARRAY A 20
    if(products.length < 20){
        let id = document.querySelector('#idProduct');
        id = id.value;
        let name = document.querySelector('#name');
        name = name.value;
        let amount = document.querySelector('#amount');
        amount = Number(amount.value);
        let cost = document.querySelector('#cost');
        cost = Number(cost.value);

    //VALIDACION
        if(id && name && amount && cost){
            if(_findParticipante(id)){
                lbStateAdd.innerHTML = 'Producto Existente❌';
                lbStateAdd.setAttribute('style', 'color:red;');
            }else{
                let product = new Product(id, name, amount, cost);
                products.push(product);
                lbStateAdd.innerHTML = 'Producto Agregado✔';
                lbStateAdd.setAttribute('style', 'color:green;');
                inpIdAdd.value='';
                inpName.value='';
                inpAmount.value='';
                inpCost.value='';
            }
        }else{
            lbStateAdd.innerHTML = 'Campos Vacios❌';
            lbStateAdd.setAttribute('style', 'color:red;');
        }
    }else{
        lbStateAdd.innerHTML = 'Sin Espacio Disponible❌';
        lbStateAdd.setAttribute('style', 'color:red;');
    }
console.log(products);
}

//|=========================================|INSERTAR|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnIns = document.querySelector('#btnInsert');
btnIns.addEventListener('click', insertProduct);

function insertProduct(){
    //ASIGNACION DE VALORES, ARRAY A 20
    if(products.length < 20){
        let id = document.querySelector('#idProduct');
        id = id.value;
        let name = document.querySelector('#name');
        name = name.value;
        let amount = document.querySelector('#amount');
        amount = Number(amount.value);
        let cost = document.querySelector('#cost');
        cost = Number(cost.value);
        let index = document.querySelector('#index');
        index = Number(index.value);
    //VALIDACION
        if(id && name && amount && cost && index){
            if(_findParticipante(id)){
                lbStateIsrt.innerHTML = 'Producto Existente❌';
                lbStateIsrt.setAttribute('style', 'color:red;');
                lbStateAdd.innerHTML = 'Producto Existente❌';
                lbStateAdd.setAttribute('style', 'color:red;');
            }else if(index > products.length || index < 0){
                lbStateIsrt.innerHTML = 'Posicion no encontrada❌';
                lbStateIsrt.setAttribute('style', 'color:red;');
                lbStateAdd.innerHTML = 'Posicion no encontrada❌';
                lbStateAdd.setAttribute('style', 'color:red;');
            }else{
                let product = new Product(id, name, amount, cost);
                products.push(products[products.length - 1]);
                for(let i = products.length - 1; i >= index; i--){
                    products[i] = products[i-1];
                }
                products[index - 1] = product;
                lbStateIsrt.innerHTML = 'Producto Insertado✔';
                lbStateIsrt.setAttribute('style', 'color:green;');
                lbStateAdd.innerHTML = 'Producto Insertado✔';
                lbStateAdd.setAttribute('style', 'color:green;');
                inpIdAdd.value='';
                inpName.value='';
                inpAmount.value='';
                inpCost.value='';
                inpIndex.value='';
            }
        }else{
            lbStateIsrt.innerHTML = 'Campos Vacios❌';
            lbStateIsrt.setAttribute('style', 'color:red;');
            lbStateAdd.innerHTML = 'Campos Vacios❌';
            lbStateAdd.setAttribute('style', 'color:red;');
        }
    }else{
        lbStateIsrt.innerHTML = 'Sin Espacio Disponible❌';
        lbStateIsrt.setAttribute('style', 'color:red;');
        lbStateAdd.innerHTML = 'Sin Espacio Disponible❌';
        lbStateAdd.setAttribute('style', 'color:red;');
    }
console.log(products);
}

//|=========================================|ELIMINAR|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnDelete = document.querySelector('#btnDelete');
btnDelete.addEventListener('click', deleteProduct);

function deleteProduct(){
    //ASIGNACION DE VALORES
    let id = document.querySelector('#idProductDlt');
    id = id.value;
    //VALIDACION
    if(id){
        if(_findParticipante(id)){
            lbStateDlt.innerHTML = `Producto ${products[_searchIndex(id)].getName()} Eliminado con Exito✔`;
            lbStateDlt.setAttribute('style', 'color:green;');
            for(let i = _searchIndex(id); i < products.length - 1; i++){
                products[i] = products[i+1];
            }
            products.pop();
            inpIdDlt.value='';
        }else{
            lbStateDlt.innerHTML = 'Producto no Existente❌';
            lbStateDlt.setAttribute('style', 'color:red;');
        }
    }else{
        lbStateDlt.innerHTML = 'Campo Vacio❌';
        lbStateDlt.setAttribute('style', 'color:red;');
    }
}

//|=========================================|BUSCAR|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnSearch = document.querySelector('#btnSearch');
btnSearch.addEventListener('click', searchProduct);

function searchProduct(){
    //ASIGNACION DE VALORES
    let id = document.querySelector('#idProductSrch');
    id = id.value;
    //VALIDACION
    if(id){
        let aux=_searchIndex(id);
        if(_findParticipante(id)){
            lbStateSrch.innerHTML = `Producto Encontrado con Exito✔ | Nombre:${products[aux].getName()} | Cantidad:${products[aux].getAmount()} | Costo:${products[aux].getCost()} | Total:${products[aux].getTotal()}`;
            lbStateSrch.setAttribute('style', 'color:green;');
            inpIdDlt.value='';
        }else{
            lbStateSrch.innerHTML = 'Producto no Existente❌';
            lbStateSrch.setAttribute('style', 'color:red;');
        }
    }else{
        lbStateSrch.innerHTML = 'Campo Vacio❌';
        lbStateSrch.setAttribute('style', 'color:red;');
    }
}

//|=========================================|LISTAR DEFAULT|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnListDflt = document.querySelector('#btnListDflt');
btnListDflt.addEventListener('click', listDefautl);

function listDefautl(){
    //VARIABLE DE LIMPIEZA PARA SIGUIENTE LLAMADA
    let row = document.querySelector(`#tbody`);
    row.innerHTML='';

    //VALIDACION
    if (products.length>0) {
        lbStateList.innerHTML = 'Mostrando Lista✔';
        lbStateList.setAttribute('style', 'color:green;');

        //ENCABESADOS DE LA TABLA
        let row = tbody.insertRow(-1);
        let colNo = row.insertCell(0);
        colNo.innerHTML = "| No. |";
        let colId = row.insertCell(1);
        colId.innerHTML = " Código |";
        let colName = row.insertCell(2);
        colName.innerHTML = " Nombre |";
        let colAmount = row.insertCell(3);
        colAmount.innerHTML = " Cantidad |";
        let colCost = row.insertCell(4);
        colCost.innerHTML = " Costo |";
        let colTotal = row.insertCell(5);
        colTotal.innerHTML = " Total |";

        //LLENADO DE TABLA DEFAULT
        for(let i = 0; i < products.length; i++){
            let product = products[i];
            let row = tbody.insertRow(-1);

            let colNo = row.insertCell(0);
            colNo.innerHTML = i + 1;
            let colId = row.insertCell(1);
            colId.innerHTML = product.getId();
            let colName = row.insertCell(2);
            colName.innerHTML = product.getName();
            let colAmount = row.insertCell(3);
            colAmount.innerHTML = product.getAmount();
            let colCost = row.insertCell(4);
            colCost.innerHTML = product.getCost();
            let colTotal = row.insertCell(5);
            colTotal.innerHTML = product.getTotal();
        }
    }else{
        lbStateList.innerHTML = 'Lista Vacia❌';
        lbStateList.setAttribute('style', 'color:red;');
    }
}

//|=========================================|LISTAR REVES|=========================================|
//PRGRAMACION DE ACCION DEL CLIC DE BOTON
let btnListRvrs = document.querySelector('#btnListRvrs');
btnListRvrs.addEventListener('click', listReverse);

function listReverse(){
    //VARIABLE DE LIMPIEZA PARA SIGUIENTE LLAMADA
    let row = document.querySelector(`#tbody`);
    row.innerHTML='';

    //VALIDACION
    if (products.length>0) {
        lbStateList.innerHTML = 'Mostrando Lista✔';
        lbStateList.setAttribute('style', 'color:green;');

        //ENCABESADOS DE LA TABLA
        let row = tbody.insertRow(-1);
        let colNo = row.insertCell(0);
        colNo.innerHTML = "| No. |";
        let colId = row.insertCell(1);
        colId.innerHTML = " Código |";
        let colName = row.insertCell(2);
        colName.innerHTML = " Nombre |";
        let colAmount = row.insertCell(3);
        colAmount.innerHTML = " Cantidad |";
        let colCost = row.insertCell(4);
        colCost.innerHTML = " Costo |";
        let colTotal = row.insertCell(5);
        colTotal.innerHTML = " Total |";
        
        //LLENADO DE TABLA REVES
        for(let i = products.length; i > 0; i--){
            let product = products[i-1];
            let row = tbody.insertRow(-1);

            let colNo = row.insertCell(0);
            colNo.innerHTML = i;
            let colId = row.insertCell(1);
            colId.innerHTML = product.getId();
            let colName = row.insertCell(2);
            colName.innerHTML = product.getName();
            let colAmount = row.insertCell(3);
            colAmount.innerHTML = product.getAmount();
            let colCost = row.insertCell(4);
            colCost.innerHTML = product.getCost();
            let colTotal = row.insertCell(5);
            colTotal.innerHTML = product.getTotal();
        }
    }else{
        lbStateList.innerHTML = 'Lista Vacia❌';
        lbStateList.setAttribute('style', 'color:red;');
    }
}

//VALIDACION DE EXISTENCIA, IF
function _findParticipante(id){
    for(let i = 0; i < products.length; i++){
        if(id == products[i].getId()){
            return true;
        }
    }
    return false;
}
//BUSQUEDA DE UBICACION, INDEX
function _searchIndex(id) {
    for(let i = 0; i < products.length; i++){
        if(id == products[i].getId()){
            return i;
        }
    }
    return 0;
}