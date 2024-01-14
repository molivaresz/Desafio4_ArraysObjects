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

const cardElement = document.getElementById("cardalquiler")
permitido_fumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
no_permitido_fumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
permitido_mascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
no_permitido_mascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`


propiedades_alquiler.forEach((alquiler) => {
    cardElement.innerHTML += `<div class="col-md-4 mb-4">
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
