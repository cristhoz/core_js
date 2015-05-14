#Core vanilla JS
Por búsqueda en dejar de utilizar los afanados y útiles frameworks, uniéndose al movimiento VanillaJS. Desarrolle un framework que facilite el uso de JavaScript.

##Instalación

##Documentación

##Historial
__Versión 3.1.0_a:__ Se reorganiza los metodos por tipos de usos.
-	Se crea el tipo utils,...
-	Se incluye `Core.utils.forEach(ar, fn)`, para dar soporte en forEach en los objetos que sean tipo NodeList.

__Versión 3.0.1:__ Se agregan una funcionalidades necesarias.
-	Se incluye `Core.forEach(ar, fn)`.

__Versión 3.0.2:__ Se agregan una funcionalidades necesarias.
-	Se ajusta `Core.routes(routes, options)`.
	-	Se agrega soporte a los hash.
	-	Se desarrolla el watch con soporte solo a los hashchange.
-	Se agrego validaciones a `Core.parents(el, validate)`.
-	Extención para crear el DOM para audio y video HTML `Core.insertMedia(options)`.
-	Se corrigen varios errores:
	-	Se ajusta las validación "notEmpty" en `Core.isArray(value, notEmpty)`.
	-	Se corrige la validaciones en `Core.forEach(ar, fn)`.
	-	Se corrige un error con las validaciones con hash en `Core.getDataURL(ar, fn)`.
	-	Correción de error en IE9 con el metodo `Core.ajax(options)`.
	-	Se corrige error en la posición padding en `Core.autocomplete(input, array)`.
	-	Se corrige errores en `Core.modals(settings, fnOpen, fnClose)`.
-	Se comenzo a realizar la validación con Array en `Core.validateObject(object, fields)` __\[TODO\]__.
-	Se añade `Core.HTMLStringToDOM(string)`.
-	Se añade fn Created para `Core.alert(options)`.

__Versión 3.0.0:__ Se rediseño por completo con el único objetivo que sea un framework basado únicamente en VanillaJS, se unio las cualidades de las versiones anteriores y optimalizando el código.

__Versión 2.\*.\*:__ Se restructuro todo el Core para optimalizarlo y así mismo volverlo escalable. Sin embargo seguía siendo un framework del framework.

__Versión 1.\*.\*:__ Se perdió el norte, se realizó un framework de jQuery, facilito mucho en los proyectos en que se utilizó esta versión.

__Versión 0.\*.\*:__ Fue el primer intento dejar atrás jQuery, se fracasó por falta de conocimiento y habilidades técnicas.

##Créditos
__[Cristian E. De la Hoz](mailto:me@yocristian.com)__ Desarrollador Web en Netbangers

##Licencia