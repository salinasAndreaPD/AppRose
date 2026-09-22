const productos = {
  // ROSTRO
  'base-haus-labs': {
    nombre: 'Base Haus Labs',
    precio: 'L 520',
    imagen: 'img/base_haus_labs.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Base líquida de acabado natural que ayuda a unificar el tono de la piel y permite construir la cobertura según lo necesites.',
    atributo: { etiqueta: 'Tono', valor: 'Beige Natural', color: '#b77f70' }
  },
  'corrector-toofaced': {
    nombre: 'Corrector TooFaced',
    precio: 'L 320',
    imagen: 'img/corrector_toofaced.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Corrector de textura cremosa que ayuda a disimular ojeras e imperfecciones y deja un acabado uniforme y natural.',
    atributo: { etiqueta: 'Tono', valor: 'Beige Claro', color: '#d3a184' }
  },
  'polvo-onesize': {
    nombre: 'Polvo translúcido OneSize',
    precio: 'L 450',
    imagen: 'img/polvo_onesize.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Polvo ligero ideal para sellar el maquillaje, controlar el brillo y mantener un acabado suave durante el día.',
    atributo: { etiqueta: 'Tono', valor: 'Translúcido', color: '#ead5bd' }
  },
  'blush-charlotte-tilbury': {
    nombre: 'Blush Charlotte Tilbury',
    precio: 'L 420',
    imagen: 'img/blush_charlotte_tilbury.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Rubor de textura suave que aporta un toque de color al rostro y se difumina fácilmente para un acabado natural.',
    atributo: { etiqueta: 'Tono', valor: 'Rosado', color: '#c9827f' }
  },

  // LABIOS
  'labial-ysl': {
    nombre: 'Labial YSL',
    precio: 'L 520',
    imagen: 'img/labial_ysl.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Labial de textura cremosa que aporta color uniforme a los labios y deja un acabado elegante y confortable.',
    atributo: { etiqueta: 'Tono', valor: 'Rosa Nude', color: '#b86d73' }
  },
  'elf-gloss': {
    nombre: 'ELF Gloss',
    precio: 'L 320',
    imagen: 'img/elf_gloss.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Gloss ligero que aporta brillo a los labios y deja una apariencia suave y luminosa sin recargar el maquillaje.',
    atributo: { etiqueta: 'Tono', valor: 'Rosado', color: '#ce8e93' }
  },
  'gloss-fenty': {
    nombre: 'Gloss Fenty',
    precio: 'L 450',
    imagen: 'img/gloss_fenty.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Gloss de acabado luminoso que realza los labios con brillo y una apariencia pulida para usar solo o sobre labial.',
    atributo: { etiqueta: 'Tono', valor: 'Nude Rosado', color: '#b87570' }
  },
  'gisou-lip-oil': {
    nombre: 'Gloss Gisou',
    precio: 'L 420',
    imagen: 'img/gloss_gisou.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Producto labial de textura ligera y acabado brillante que aporta una apariencia jugosa y suave a los labios.',
    atributo: { etiqueta: 'Tono', valor: 'Honey', color: '#d39a63' }
  },
  'labial-dior': {
    nombre: 'Labial Dior',
    precio: 'L 420',
    imagen: 'img/labial_dior.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Labial de color definido y textura suave, pensado para dar a los labios un acabado elegante y uniforme.',
    atributo: { etiqueta: 'Tono', valor: 'Rosa', color: '#a95e69' }
  },

  // OJOS
  'sombras-dior': {
    nombre: 'Sombras de Ojos Dior',
    precio: 'L 1,520',
    imagen: 'img/SombrasDior.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Paleta de sombras con colores combinables para crear desde maquillajes suaves hasta looks con mayor intensidad.',
    atributo: { etiqueta: 'Paleta', valor: 'Rosados y neutros' }
  },
  'sombras-patrick-ta': {
    nombre: 'Sombras de Ojos Patrick Ta',
    precio: 'L 2,320',
    imagen: 'img/PatrickTaSombras.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Paleta de sombras pensada para combinar diferentes intensidades y crear profundidad, definición y transición en los ojos.',
    atributo: { etiqueta: 'Paleta', valor: 'Neutros' }
  },
  'sombras-makeup-by-mario': {
    nombre: 'Sombras de Ojos Makeup by Mario',
    precio: 'L 1,250',
    imagen: 'img/MakeupByMario.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Paleta versátil con tonos fáciles de combinar para construir looks de ojos naturales, definidos o más intensos.',
    atributo: { etiqueta: 'Paleta', valor: 'Neutros y tierra' }
  },
  'sombras-ysl': {
    nombre: 'Sombras de Ojos YSL',
    precio: 'L 1,520',
    imagen: 'img/YSLSombras.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Paleta de sombras con tonos coordinados para iluminar, definir y dar dimensión al maquillaje de ojos.',
    atributo: { etiqueta: 'Paleta', valor: 'Rosados' }
  },

  // BROCHAS
  'brocha-chanel': {
    nombre: 'Brocha Rubor Chanel',
    precio: 'L 720',
    imagen: 'img/BrochaChanel.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Brocha de cerdas suaves diseñada para aplicar y difuminar rubor de manera uniforme sobre las mejillas.',
    atributo: { etiqueta: 'Tipo', valor: 'Brocha para rubor' }
  },
  'brocha-makeup-by-mario': {
    nombre: 'Brocha Makeup by Mario',
    precio: 'L 220',
    imagen: 'img/BrochaMakeupByMario.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Brocha de maquillaje pensada para distribuir y difuminar producto con control y lograr un acabado uniforme.',
    atributo: { etiqueta: 'Tipo', valor: 'Brocha de maquillaje' }
  },
  'brocha-patrick-ta': {
    nombre: 'Brocha Patrick Ta',
    precio: 'L 550',
    imagen: 'img/BrochaPatrickTa.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Brocha de cerdas suaves para aplicar y difuminar maquillaje con movimientos precisos y un acabado uniforme.',
    atributo: { etiqueta: 'Tipo', valor: 'Brocha de maquillaje' }
  },
  'brocha-haus-labs': {
    nombre: 'Brocha Haus Labs',
    precio: 'L 320',
    imagen: 'img/Brocha HausLabs.jpg',
    rating: '4.8 · 120 reseñas',
    descripcion: 'Brocha diseñada para trabajar el producto de forma controlada y difuminarlo hasta conseguir un acabado uniforme.',
    atributo: { etiqueta: 'Tipo', valor: 'Brocha de maquillaje' }
  }
};

function cargarDetalleProducto(page) {
  if (!page || !page.el || !page.route) return;

  const idProducto = page.route.params && page.route.params.id;
  const producto = productos[idProducto];
  const root = page.el;

  const imagen = root.querySelector('#detalle-imagen');
  const nombre = root.querySelector('#detalle-nombre');
  const precio = root.querySelector('#detalle-precio');
  const rating = root.querySelector('#detalle-rating');
  const descripcion = root.querySelector('#detalle-descripcion');
  const atributoBloque = root.querySelector('#detalle-atributo');
  const atributoEtiqueta = root.querySelector('#detalle-atributo-etiqueta');
  const atributoValor = root.querySelector('#detalle-atributo-valor');
  const atributoMuestra = root.querySelector('#detalle-atributo-muestra');

  if (!producto) {
    if (nombre) nombre.textContent = 'Producto no encontrado';
    if (descripcion) descripcion.textContent = 'Vuelve a la categoría y selecciona el producto nuevamente.';
    if (atributoBloque) atributoBloque.style.display = 'none';
    return;
  }

  if (imagen) {
    // producto.imagen YA incluye "img/", así que no se vuelve a agregar.
    imagen.src = new URL(producto.imagen, document.baseURI).href;
    imagen.alt = producto.nombre;
  }
  if (nombre) nombre.textContent = producto.nombre;
  if (precio) precio.textContent = producto.precio;
  if (rating) rating.textContent = producto.rating;
  if (descripcion) descripcion.textContent = producto.descripcion;

  if (atributoBloque && producto.atributo) {
    atributoBloque.style.display = '';
    if (atributoEtiqueta) atributoEtiqueta.textContent = producto.atributo.etiqueta;
    if (atributoValor) atributoValor.textContent = producto.atributo.valor;

    if (atributoMuestra) {
      if (producto.atributo.color) {
        atributoMuestra.style.display = 'block';
        atributoMuestra.style.backgroundColor = producto.atributo.color;
      } else {
        atributoMuestra.style.display = 'none';
      }
    }
  }

  const cantidad = root.querySelector('.detalle-cantidad-numero');
  const restar = root.querySelector('.detalle-restar');
  const sumar = root.querySelector('.detalle-sumar');
  const favorito = root.querySelector('.detalle-favorito');

  if (cantidad) cantidad.textContent = '1';

  if (restar && cantidad && !restar.dataset.listener) {
    restar.dataset.listener = '1';
    restar.addEventListener('click', () => {
      cantidad.textContent = String(Math.max(1, Number(cantidad.textContent) - 1));
    });
  }

  if (sumar && cantidad && !sumar.dataset.listener) {
    sumar.dataset.listener = '1';
    sumar.addEventListener('click', () => {
      cantidad.textContent = String(Number(cantidad.textContent) + 1);
    });
  }

  if (favorito && !favorito.dataset.listener) {
    favorito.dataset.listener = '1';
    favorito.addEventListener('click', (event) => {
      event.preventDefault();
      const icono = favorito.querySelector('i');
      const activo = favorito.classList.toggle('activo');
      if (icono) icono.textContent = activo ? 'heart_fill' : 'heart';
    });
  }
}

const app = new Framework7({
  el: '#app',
  name: 'ROSÉ',
  id: 'com.miempresa.miapp',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
    { path: '/inicio/', url: './pages/inicio.html' },
    { path: '/categorias/', url: './pages/categorias.html' },
    { path: '/ojos/', url: './pages/ojos.html' },
    { path: '/brochas/', url: './pages/brochas.html' },
    { path: '/carrito/', url: './pages/carrito.html' },
    { path: '/labios/', url: './pages/labiales.html' },
    { path: '/rostro/', url: './pages/rostro.html' },
    {
      path: '/detalle/:id/',
      url: './pages/detalle.html',
      on: {
        pageInit: function (event, page) {
          cargarDetalleProducto(page);
        }
      }
    },
    { path: '/acerca/', url: './pages/acerca.html' }
  ]
});

$$(document).on('page:init', '.page[data-name="ejemplo"]', function () {
  const button = document.getElementById('demo-alert');
  if (button) {
    button.addEventListener('click', () => {
      app.dialog.alert('Framework7 está funcionando correctamente.', 'Página ejemplo');
    });
  }
});
