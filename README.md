# Consumo de API REST: HUD Visor Inteligente

Práctica de consumo de APIs REST con JavaScript puro (`fetch` + `async/await`), mostrando los datos en una interfaz estilo HUD futurista.

🔗 **Demo:** https://drosherjc.github.io/consumo-api-s/

## Descripción

La página tiene tres paneles independientes. Cada uno consume una API distinta y se actualiza con su propio botón **DATA**:

| Panel | API | Qué muestra |
|-------|-----|-------------|
| 1 | [Dog CEO API](https://dog.ceo/dog-api/) | Imagen aleatoria de un perro, su URL, estado de la respuesta y un ID de consulta |
| 2 | [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Usuario aleatorio (nombre y correo) con un avatar generado con [UI Avatars](https://ui-avatars.com/) |
| 3 | [FakeStore API](https://fakestoreapi.com/) | Producto aleatorio: imagen, título, precio y categoría |

Los tres paneles cargan datos al abrir la página.

## Tecnologías

- HTML5 y CSS3
- JavaScript (ES6+, Fetch API)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Font Awesome 6](https://fontawesome.com/)
- Tipografía [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## Estructura

```
Consumo-API/
├── index.html      # Estructura y estilos del HUD
├── doc.js          # Panel 1: API de perros (getData)
├── jsonAPI.js      # Panel 2: API de usuarios (getAvatar)
├── ecommerce.js    # Panel 3: API de productos (ecommerceApi)
└── README.md
```

## Ejecución local

```bash
git clone https://github.com/DrosherJC/consumo-api-s.git
cd consumo-api-s
```

Abre `index.html` en el navegador, o usa un servidor local como la extensión **Live Server** de VS Code o:

```bash
python3 -m http.server 8000
```

y entra a `http://localhost:8000`.

## Despliegue

El sitio se publica con **GitHub Pages** desde la rama `main` (carpeta raíz). Como vive bajo `/consumo-api-s/`, los scripts se cargan con rutas relativas (`./doc.js`, `./jsonAPI.js`, `./ecommerce.js`).

## Autores

**José Buñay** ([@DrosherJC](https://github.com/DrosherJC))

**Fernanda Rodriguez** ([@fernadadev7](https://github.com/fernadadev7))

**Erick Patiño** ([@ErickPatino10](https://github.com/ErickPatino10))

Tecnología Superior en Desarrollo de Software, ESFOT, Escuela Politécnica Nacional.