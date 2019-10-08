const lista = JSON.parse(localStorage.getItem("lista")) || [];

lista.forEach(mostrar);

function mostrar(item, i){
    console.log("item", item);
    console.log("i", i);
    let pelisElement = document.getElementById("pelis");
    pelisElement.innerHTML += `
    <tr>
        <td scope="row">${i+1}</td>
        <td>${item.titulo}</td>
        <td>${item.album}</td>
        <td>${item.autor}</td>
    </tr>`;
}

function agregarNuevo(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let album = document.getElementById("album").value;
    
    let pelisElement = document.getElementById("pelis");
    pelisElement.innerHTML += `
    <tr>
        <td scope="row">1</td>
        <td>${titulo}</td>
        <td>${album}</td>
        <td>${autor}</td>
    </tr>`;

    lista.push({
        titulo: titulo,
        album: album,
        autor: autor
    });

    localStorage.setItem("lista", JSON.stringify(lista))

    document.getElementById("titulo").value = "";
    document.getElementById("album").value = "";
    document.getElementById("autor").value = "";
}