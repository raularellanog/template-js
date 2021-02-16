var doc =document.getElementById("app"),
$template=document.getElementById("template-card").content,
$fragmento=document.createDocumentFragment(),
cardContent=[
    {
        title:"Descripción de imagen1",
        img:"2.jpg",
    },
    {
        title:"Descripción de imagen2",
        img:"1.jpg",
    },
    {
        title:"Descripción de imagen3",
        img:"3.jpg",
    },
];
cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;
    
    let $clone=document.importNode($template,true);
    $fragmento.appendChild($clone);
})

doc.appendChild($fragmento);