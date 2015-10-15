#Core vanilla JS
Por búsqueda en dejar de utilizar los afanados y útiles frameworks, uniéndose al movimiento VanillaJS. Desarrolle un framework que facilite el uso de JavaScript.

##Instalación

##Documentación

##Historial
__Versión 3.1.0_a:__ Se reorganiza los metodos por tipos de usos.
-	Se crea el tipo utils,...
-	Se incluye `Core.utils.forEach(ar, fn)`, para dar soporte en forEach en los objetos que sean tipo NodeList.

__Versión 3.0.3:__ Se agregan una funcionalidades necesarias.
-	Se desarrolla `Core.personalizeForm()`.
-	Se desarrolla `Core.soundManager(audios, options)`.
-	Se desarrolla `Core.preloadImages(fnProgress, fnEnded)`.
-	Se realizan ajustes en `Core.routes()`:
	-	Se aceptan parametros GET.
	-	Se ajusta para que acepte y verifique varios PathNames.
-	Se ajusta el metodo `Core.getDataURL()`, para que valide los parametros GET.
-	Se desarrollan aditamentos para `Core.calendar()`, los cuales son:
	-	Checkear días festivos.
	-	Estilos para los domingos.
	-	Agregar datos en el calendario.
	-	Se pueden bloquear fechas del calendario.
	-	

__Versión 3.0.3:__ Se agregan una funcionalidades necesarias.
-	Se corrigen varios errores:
	-	Se corrige un error de validación `Core.parents(el, validate)`.
	-	Se corrige un error al cerrar otras ventanas abiertas `Core.modals(settings, fnOpen, fnClose)`.
	-	Se ajustan varios errores no funcionales `Core.autocomplete(input, array)`.
	-	Se ajustan varios errores de validación y decodificación de URL `Core.getDataURL()`
-	Se desarrollan y se soluccionan un error `Core.calendar(input, options, selected)`:
	-	Cambio de fechas con select
	-	Callback cuando se realiza un cambio de fecha
	-	Se solucciona error en posición del calendario al hacer focus.
-	Agregan dos funcionalidades a `Core.ajax(options, failed)`.
	-	Callback cuando la validación JSON falla.
	-	Desde ahora se puede añadir headers en la transacción.
-	Se añade:
	-	Metodo `Core.spinLoader()`.
	-	Metodo `Core.calculateRatio(srcWidth, srcHeight, maxWidth, maxHeight)`.
	-	Variable `Core.RADIANS`.
	-	Metodo `Core.fileUpload(el, settings)`.
	-	Metodo `Core.paging(options, fnCallback)`.
	-	Metodo `Core.getIndex(children, child)`.

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
-	Se comenzo a realizar la validación con Array en `Core.validateObject(object, fields)`

__Versión 3.0.1:__ Se agregan una funcionalidades necesarias.
-	Se incluye `Core.forEach(ar, fn)`.

__Versión 3.0.0:__ Se rediseño por completo con el único objetivo que sea un framework basado únicamente en VanillaJS, se unio las cualidades de las versiones anteriores y optimalizando el código.

__Versión 2.\*.\*:__ Se restructuro todo el Core para optimalizarlo y así mismo volverlo escalable. Sin embargo seguía siendo un framework del framework.

__Versión 1.\*.\*:__ Se perdió el norte, se realizó un framework de jQuery, facilito mucho en los proyectos en que se utilizó esta versión.

__Versión 0.\*.\*:__ Fue el primer intento dejar atrás jQuery, se fracasó por falta de conocimiento y habilidades técnicas.

##Créditos
__[Cristian E. De la Hoz](mailto:me@yocristian.com)__ Desarrollador Web en Netbangers

##Licencia