# Ejemplo uso de Tokens.

Para este ejemplo se hace uso de la libreria jsonwebtoken.

En la carpeta *service* tenemos el archivo *token.js* donde se encuentran las funciones crear
y decodificar un token.

La creación es llamada al momento de hacer un inición de sesión o login, esto esta señalado en la función servicio
crear Token que puede ser llamada bajo el método Get.

La decodificación del Token se realiza mediante un middleware el cual, valida la información del con la función verifiy de la libreria jsonwebtoken.

Este es un primer acercamiento, lo ideal sería comenzar a trabajar con refresh token, pero para ello es prudente
buscar un buena forma de hacerlo.

Recuerda para ejecutar este código ejecutar el comando:

```
npm install
```