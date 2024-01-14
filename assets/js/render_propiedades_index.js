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

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña en la montaña',
        src: 'https://estavisa.cl/wp-content/uploads/2021/06/por-que-las-casas-son-de-madera-en-USA.jpg',
        descripcion: 'Cabaña en el campo a pocos metros de la playa',
        ubicacion: 'North California',
        habitaciones: 5,
        baños: 3,
        costo: 8000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casas montegrande',
        src: 'https://www.lincolninst.edu/sites/default/files/styles/issue_feature/public/sources/articles/stigma-to-housing-fix-lla180102-highlight-b.jpg?itok=LlOafTaG',
        descripcion: 'Casa aislada en un barrio con plusbalia y seguro para tus hijos',
        ubicacion: '14th street, Miami, Florida',
        habitaciones: 3,
        baños: 2,
        costo: 3000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de las estrellas',
        src: 'https://images.adsttc.com/media/images/5e16/80a6/3312/fd5f/8500/01db/slideshow/Bruce_Damonte_2.jpg?1578533020',
        descripcion: 'Hermosa casa donde podras disfrutar del amplio cielo del norte de Chile',
        ubicacion: 'Los altos 2340, Copiapo',
        habitaciones: 5,
        baños: 2,
        costo: 3500,
        smoke: false,
        pets: false
    }
]

const cardElementv = document.getElementById("cardventa")
const cardElementa = document.getElementById("cardalquiler")
const permitido_fumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
const no_permitido_fumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
const permitido_mascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
const no_permitido_mascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

//Se declaran las variables y arreglos para obtener los 3 elementos de forma aleatoria
const array_length_venta = propiedades_venta.length
const array_length_alquiler = propiedades_alquiler.length
const array_index_venta = []
const array_index_alquiler = []
let valor
let comparavalor = []
let validacomparacion = false
let i = 1

// Se obtiene y valida las 3 posiciones de los elementos y que no se repitan para venta (se dejan los console.log para que se pueda seguir en la consola el programa)
while (i < 4) {
    valor = Math.floor(Math.random() * array_length_venta)
    if (i == 1) {
        console.log("valor i:" + i)
        console.log("valor: " + valor)

        comparavalor.push(valor)
        i++
    } else {
        comparavalor.forEach((datocomparar) => {
            if (datocomparar == valor) {
                validacomparacion = true
            }
        })
        console.log("valor i:" + i)

        if (validacomparacion == false) {
            console.log("valor: " + valor)
            comparavalor.push(valor)
            i++
        } else {
            validacomparacion = false
        }
    }
}

if (i == 4) {
    i = 1
}

// Se obtienen los elementos desde el arreglo principal con las posiciones validadas anteriormente para venta
comparavalor.forEach((valor2) => {
    array_index_venta.push(propiedades_venta.at(valor2))
})

valor = 0
comparavalor = []
validacomparacion = false

// Se obtiene y valida las 3 posiciones de los elementos y que no se repitan para alquiler
while (i < 4) {
    valor = Math.floor(Math.random() * array_length_alquiler)
    if (i == 1) {
        console.log("valor i:" + i)
        console.log("valor: " + valor)

        comparavalor.push(valor)
        i++
    } else {
        comparavalor.forEach((datocomparar) => {
            if (datocomparar == valor) {
                validacomparacion = true
            }
        })
        console.log("valor i:" + i)

        if (validacomparacion == false) {
            console.log("valor: " + valor)
            comparavalor.push(valor)
            i++
        } else {
            validacomparacion = false
        }
    }
}

if (i == 4) {
    i = 1
}

// Se obtienen los elementos desde el arreglo principal con las posiciones validadas anteriormente para alquiler (se dejan los console.log para que se pueda seguir en la consola el programa)
comparavalor.forEach((valor2) => {
    console.log(valor2)
    array_index_alquiler.push(propiedades_alquiler.at(valor2))
})

array_index_venta.forEach( (venta) => {
    cardElementv.innerHTML += `<div class="col-md-4 mb-4" >
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

array_index_alquiler.forEach((alquiler) => {
    cardElementa.innerHTML += `<div class="col-md-4 mb-4">
    <div class="card">
    <img src="${alquiler['src']}" class="card-img-top" alt="Imagen del departamento">
    <div class="card-body">
    <h5 class="card-title">${alquiler["nombre"]}</h5>
    <p class="card-text">${alquiler["descripcion"]}</p>
    <p><i class="fas fa-map-marker-alt"></i>${alquiler["ubicacion"]}</p>
    <p>
    <i class="fas fa-bed"></i> ${alquiler["habitaciones"]} Habitaciones |
    <i class="fas fa-bath"></i> ${alquiler["baños"]} Baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${alquiler["costo"]}</p>
    ${alquiler["smoke"] == true ? permitido_fumar : no_permitido_fumar}
    ${alquiler["pets"] == true ? permitido_mascota : no_permitido_mascota}
    </div>
    </div>
    </div>`
})
