 const productosEn = [
    { "id": 1, "nombre": "Carpacio de gambas", "img": "./img/logoObrador.png",  "descripcion": "Gambas de Denia con vinagreta de lima, rúcula y tomate cherry", "precio": 560 },
    { "id": 2, "nombre": "Ensalada caprese", "img": "./img/alfajores_choco_p-min.webp", "descripcion": "Tomate ecológico, muzarella de búfala, rúcula y aceite de oliva", "precio": 250 },
    { "id": 3, "nombre": "Pan de queso", "img": "./img/pasta_rellena-min.webp", "descripcion": "Pancitos recién horneados de queso", "precio": 550 },
    { "id": 4, "nombre": "Pan de molde con semillas", "img": "./img/pastafrola_cerca-min.webp", "descripcion": "Pan de molde, de 600gr, con sésamo, lino, chía y avena", "precio": 550 }
];

const productosPr = [
    { "id": 11, "nombre": "Raviolones de espinaca", "img": "./img/tarta_costado-min.webp", "descripcion": "Raviolones rellenos de espinaca, ricotta y parmesano con masa de tomates secos", "precio": 560 },
    { "id": 12, "nombre": "Lasaña de pollo y verduras", "img": "./img/logoObrador.png", "descripcion": "Lasaña artesanal, de supremas de pollos cocidas al tomillo y verduras de temporada", "precio": 250 },
    { "id": 13, "nombre": "Milanesas de carne", "img": "./img/logoObrador.png", "descripcion": "Milanesas de novillo, empanadas con nuestra mezcla especial de pan rallado sin gluten", "precio": 550 },
    { "id": 14, "nombre": "Strudel de verduras", "img": "./img/logoObrador.png", "descripcion": "Strudel, con masa de hojaldre artesanal y relleno de verduras de temporada", "precio": 550 }
]; 

export const productosEnLoad = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosEn);
        }, 500);
    });
}
export const productosPrLoad = () => {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productosPr);
        }, 500);
    });
}
   
