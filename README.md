![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **POKEMON** | Proyecto Individual

## 

-  He Construido una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Puse en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirme y conecte los conceptos aprendidos en la carrera.
-  Aprendi mejores prácticas.
-  Aprendi y practicar el workflow de GIT.
-  Utilize y practique testing.



---

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

Tambien:

-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **react-router-dom**: 5.2.0
-  **redux**: 4.0.5
-  **react-redux**: 7.2.3

<br />

1. Para poder probar este repositorio:
En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
   ```

1. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. 

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`pokemon`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---

## **📖  GENERAL**

Se ha construido una aplicación web a partir de la API [**pokeapi**](https://pokeapi.co/) en la que se puede:

-  Buscar pokemones.
-  Visualizar la información de los pokemones.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos pokemones.

⚠️ Para las funcionalidades de filtrado y ordenamiento NO se han usado los endpoints de la API externa.

### **Únicos end-points utilizados**

-  [**PokeApi**](https://pokeapi.co/api/v2/pokemon)
-  **Por id**: _"https://pokeapi.co/api/v2/pokemon/{id}"_
-  **Por nombre**: _"https://pokeapi.co/api/v2/pokemon/{name}"_
-  **Por tipo**: _"https://pokeapi.co/api/v2/type"_

<br />

Algunas capturas de esta App:

<img src="client\src\img\capturasApp.png" alt="" />
