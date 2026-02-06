
## Creación de nuevos componentes, directivas, pipes, servicios, interceptores y guardas

Para ayuda en el uso de comandos creacionales *schematics*:
``` powershell
ng g --help
```

Recuerda que podemos usar el *flag* `--dry-run` para ver si la ruta de los *schematics* a generar es correcta. Si lo es, retiramos el *flag* y ejecutamos el comando.

También, recuerda no crear los **tests** hasta que realmente los necesitemos.
Es decir, nuestra estrategia debe ser armar lo mínimo (sin tests) hasta que la App escale en tamaño y ya decidamos qué incluir manualmente.

### Componentes

Para crear **componentes** usamos estos *flags* con la instrucción del CLI (sustituir el *placeholder* `nuevocomponente` por el *path* y nombre real del componente):

``` powershell
ng g c nuevocomponente --change-detection=OnPush --display-block=true --prefix=ecom --skip-tests=true --skip-import --inline-style
```
Opcionalmente podemos usar el *flag* `--inline-template`.

Hemos elegido estos flags para:
- Tener mejor performance gracias a la estrategia de detección de cambios `onPush`.
- Mantener el estilo de usar el **prefijo** en los selectores de componentes, igual que hicimos en el *scaffolding* inicial del proyecto.
- Seguimos con la filosofia de armar lo mínimo (sin tests, sin usar archivos **.css**, etc.).

### Directivas

Para crear **directivas** con el CLI (sustituir el *placeholder* `nuevadirectiva` por el *path* y nombre real de la directiva):
``` powershell
ng g d nuevadirectiva --skip-tests --skip-import
```

### Pipes

Para crear ***pipes*** con el CLI (sustituir el *placeholder* `nuevapipe` por el *path* y nombre real de la tubería):
``` powershell
ng g p nuevapipe --skip-tests --skip-import
```

### Servicios

Para crear **servicios** con el CLI (sustituir el *placeholder* `nuevoservicio` por el *path* y nombre real del servicio):
``` powershell
ng g s nuevoservicio --skip-tests
```

Con esta instrucción CLI, se creará el servicio con la configuración del decorador `@Injectable` por defecto `{providedIn: 'root'}`, que nos permite usar el servicio de manera global a nivel de aplicación, en el **inyector raíz** (`root`).

### Interceptores

Para crear **interceptores** con el CLI (sustituir el *placeholder* `nuevointerceptor` por el *path* y nombre real del interceptor):
``` powershell
ng g interceptor nuevointerceptor --skip-tests
```

Por defecto en esta version de Angular, los interceptores se crean con el *schematics* pertinente de manera **funcional**: el *flag* `--functional` es `true` por defecto. El separador del nombre de archivo también tiene un valor `-` por defecto para el flag `--type-separator` -así nos alineamos con la **Guia de Estilo de Angular 2025**.

### Guardas

Para crear **guardas** con el CLI (sustituir el *placeholder* `nuevaguarda` por el *path* y nombre real de la guarda):

``` powershell
ng g guard nuevaguarda --skip-tests
```

Durante el proceso, el CLI nos pregunta el tipo de guarda (también podemos usar el flag `--guardType` para tal propósito).
En la mayoría de casos, nos interesa el tipo de guarda `CanActivate` para permitir acceder o abandonar una ruta.
Igual que con los intrerceptores, por defecto en esta version de Angular, las guardas se crean con el *schematics* pertinente de manera **funcional**: el *flag* `--functional` es `true` por defecto. También aquí la guarda tiene un valor `-` por defecto para el flag `--type-separator` -así nos alineamos con la **Guia de Estilo de Angular 2025**.

### Internacionalización y Locales

Al usar la `CurrencyPipe`, necesitamos poder poner el `€`a la derecha (como lo hacemos en Castellano).
Eso viene definido por el `locale` español `es-ES`. También necesitamos pintar los precios como en Español:
con coma `,` para **decimales** y punto `.` para los **millares** (justo lo contrario de la ortografía anglosajona de locale `en-US` por ejemplo).

#### Angular Localize

Para poder hacer uso de esos estándares **locales** para el uso de pipes con divisas, números y fechas,
necesitamos instalar como dependencia de desarrollo del proyecto la librería `@angular/localize`.

Para hacerlo la hemos añadido con el comando: `ng add @angular/localize`.
Una vez instalada, he ejecutado el siguiente comando, para poder generar un archivo **messages.json** donde tendremos definido el *locale* por defecto que usa nuestra App. 

``` powershell
ng extract-i18n --format=json --output-path src/locale
```
Después, he generado otro *locale* **messages.es.json** manualmente donde guardaremos la definición ISO del locale (`es`) y posibles traducciones en Español.

El archivo lo he ubicado en `src\locale`. Para esta PEC, no se necesitan traducciones, pero sí era necesario -como he comentado antes- poder definir un **locale** `es` para poder renderizar cifras y divisas en Español, al usar las *pipes* de Angular.

Si queremos añadir más locales, debemos crear nuevos archivos en la carpeta `src\locale` y poner un nombre de archivo siguiendo el estilo que ya hemos usado (e.g. **messages.fr.json** para Francés). Después debemos registrarlo en el `angular.json`,
añadiendo el código ISO en el *array* `architect.build.options.localize` (e.g. `fr`para Francés). Y también debemos acordarnos de añadir en el objeto `i18n.locales` la ruta del archivo con esa posible traducción (**internacionalización**) :

``` json
"fr": {
      "translation": "src/locale/messages.fr.json",
      "baseHref": ""
    }`
```
Después podríamos compilar la aplicación con sus traducciones y renderizado de divisas segun los diferentes **locales** que hayamos definido; para así poder desplegar esos compilados en subdirectorios del dominio (uno para cada idioma): 
``` powershell
ng build --localize
``` 

