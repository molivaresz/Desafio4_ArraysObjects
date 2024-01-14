const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Lomas de La Quinta',
        src: 'https://www.bhhsspain.com/media/properties/9720/B98Le8~d7M9k3DegpEFZhS0lI_F8U4XZVz~HWxt~mGgYekxX9nCAxh0ZipZlAjNxEM6s1ur~IyRoGYyG59trDruqRQDxOgFLRcmn43nYGoVHa0Jumjm23H2jajNJPaesF90lLMKfipv~~C8GAviu.jpg',
        descripcion: 'Esta impresionante villa, actualmente en construcción, disfruta de una posición de esquina dominante en una de las comunidades cerradas más codiciadas de la costa',
        ubicacion: ' Lomas de La Quinta, Benahavis',
        habitaciones: 4,
        baños: 3,
        costo: 5000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa 2 pisos estilo contemporaneo',
        src: 'https://www.eluniverso.com/resizer/J24qaHFlcOHYI2pEWTJCOpr-XQ8=/861x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/DC3ZHRVBORDINC46PAPRWOMU5M.jpg',
        descripcion: 'Casa en barrio familiar cercano a mall y parques',
        ubicacion: ' 2300 Lakewood, LA CA 45321',
        habitaciones: 3,
        baños: 2,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Refugio del Sur de Canada',
        src: 'https://media.admagazine.com/photos/618a600f3174d0288cf2cfce/master/w_1600,c_limit/87495.jpg',
        descripcion: 'Refugio en las montañas y parajes más hermosos del sur de Canada',
        ubicacion: ' 700 Calder Ave., Fort Smith',
        habitaciones: 4,
        baños: 2,
        costo: 6000,
        smoke: false,
        pets: true
    }
]

const cardElement = document.getElementById("cardventa")
permitido_fumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
no_permitido_fumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
permitido_mascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
no_permitido_mascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

propiedades_venta.forEach((venta) => {
    cardElement.innerHTML += `<div class="col-md-4 mb-4" >
    <div class="card">
    <img src="${venta['src']}" class="card-img-top" alt="Imagen del departamento">
    <div class="card-body">
    <h5 class="card-title">${venta["nombre"]}</h5>
    <p class="card-text">${venta["descripcion"]}</p>
    <p><i class="fas fa-map-marker-alt"></i>${venta["ubicacion"]}</p>
    <p>
    <i class="fas fa-bed"></i> ${venta["habitaciones"]} Habitaciones |
    <i class="fas fa-bath"></i> ${venta["baños"]} Baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${venta["costo"]}</p>
    ${venta["smoke"] == true ? permitido_fumar : no_permitido_fumar}
    ${venta["pets"] == true ? permitido_mascota : no_permitido_mascota}
    </div>
    </div>
    </div>`
})
