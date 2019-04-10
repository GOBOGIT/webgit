+++
date = "2017-09-18"
title = "Houdini Displacements"
tags = ["software", "profesional"]
categories = ["feed"]
type = "post"
imagen = "portadaDisplacement"
+++

Hola de nuevo! Éste post es un resumen de una semana en la que en tiempos libres he re-visitado las posibilidades de modificación de la geometría mediante texturas a través de la herramienta Displacement.

En  nuestro caso no vamos a utilizar en los ejemplos archivos de imágenes, sino nodos tipo noise, los cuales mezclaremos y modificaremos para conseguir patrones y tipos de desplazamiento diferentes.

<!--more-->

En primero lugar, veremos el displace a través de nodos PointVOP directamente en nuestro objeto, para modificar las posiciones de los vértices del mismo. A continuación modificaremos la apariencia de nuestro modelo a través de mapas de desplazamiento aplicado directamente al shader, y finalmente usaremos las herramientas de generación de volumen VDB, para convertirlas más tarde en geometrías modificadas mediante los nodos tipo noise. Empecemos!

### VOP displacement

Para modificar geometría a través de un mapa de desplazamiento, generalmente necesitaremos una gran cantidad de polígonos, para que podamos ver con el mayor detalle el efecto de la textura en el objeto. Lo malo de éste sistema es que efectivamente terminamos con modelos muy pesados y difíciles de usar; lo bueno es que es geometría real con la que podremos interactuar con otros nodos de modificación de la geometría.

{{< modal src="portadas/disp_vop.png" titulo="Displacement sobre geometría" >}}
*Desplazamiento directamente en geometría.*
<br/>&nbsp;<br />

En los ejemplos de  a continuación he tratado de imitar cuatro modelos de la página sobre el nodo VOP Unified Noise : http://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise
SHOP displacement

Partimos de una esfera poligonal, a la que añado una frecuencia de valor 20 para añadir una buena resolución, multiplicada posteriormente por un nodo subdivide, con la propiedad depth con valor 3.

Creamos a continuación un nodo pointVOP, donde ocurre la magia:


{{< modal src="portadas/vopnodos.png" titulo="Dentro del pointVOP" >}}
*Podemos ver el desplazamiento en el visor, a costa de mallas muy densas.*
<br/>&nbsp;<br />


En éstos ejemplos tenemos un esquema muy sencillo, donde el peso de las modificaciones se encuentra en el nodo Unified Noise, al cual conectamos la posición de los vértices de la geometría, los cambiamos a través de sus propiedades, eligiendo el tipo de noise: Perlin, Sinusoid, Worley, etc..  Y opciones generales como frecuencia, amplitud y desplazamiento (offset). Otras opciones nos permiten invertir el efecto, o seleccionar el rango de valores final (clamp). Incluso podemos añadir un desplazamiento secundario desde las opciones Fractal.

La salida del nodo se conecta a otro tipo Displace Along Normal a su propiedad amount, conectando la entrada P (Position) directamente desde el nodo de la geometría.

**Pros:**
podemos modificar la geometría más adelante a través de nodos procedurales directamente en los objetos Geo.
Vemos el resultado directamente en el viewport sin necesidad de render.

**Contras:**
La geometría es muy pesada. 
No conseguiremos detalles muy pequeños
Al no conseguir un gran detalle, veremos bordes "rotos" y otros problemas en la geometría, y si los quitamos mediante un smooth la veremos demasiado suavizada.

Personalmente se puede usar para modificar la geometría en su forma más general, como base para otros ajustes mediante texturas.

### SHOP Displacement

Otra forma de añadir un mapa de desplazamiento es directamente en el material: aunque el nuevo shader PrincipleShader de Houdini tiene opciones para importar texturas para tal fin, podemos usar los nodos para conectar la entrada Disp y VDiso (desplazamiento por vectores).

{{< modal src="portadas/disp_shop.png" titulo="Geometría con desplazamiento a través del shader" >}}
*Desplazamientos directamente en el material*
<br/>&nbsp;<br />

Al igual que en los nodos VOP, podemos usar diferentes tipos de Noise, los cuales usarán la posición de los vértices o de UV para ajustarse a la geometría. Es importante añadir el nodo **Rest** al final del árbol del objeto, de manera de que podamos "pegar" el mapa a los puntos; luego podremos usar éste mismo nodo Rest como entrada a aquellos que requieran una entrada P (position) para ajustarse a la geometría.

En el caso de la imagen, debemos añadir las UV en la geometría y luego importarlo al material. A través de diferentes combinaciones podemos crear diferentes tipos de desplazamientos, desde los más aleatorios hasta lo tileables o repetitivos.

{{< modal src="portadas/shopnodos.png" titulo="Shader con desplazamiento a partir de varias texturas procedurales" >}}
*Nodos creando un desplazamiento repetitivo, en el recuadro los nodos uv y rest en la geometría.*
<br/>&nbsp;<br />

Lo bueno de realizar el desplazamiento a través de mapas dentro de los materiales es que ya no tenemos la limitación del número de puntos de la geometría, es mas; una geometría con pocos polígonos es suficiente para añadir mucho detalle. Estos detalles además pueden ser realmente pequeños o con aristas y podremos verlos con nitided.

**Pros:**
Render rápido, control total independientemente de la densidad de la malla de la geometría
Mayor calidad en el desplazamiento, permite mapas con mucho detalle.

**Contras:**
Los mapas de desplazamiento se recrean durante el render, por lo que en algunos casos no podremos usar el desplazamiento en las modificaciones del objeto.
Ajustes finos para resaltar detalles muy pequeños pueden incrementar el tiempo de render.

Personalmente lo usaría en detalles más finos y no como modificaciones importantes de la geometría.


### Volume Displacement
Realmente esta técnica permite modificar el volumen a través de un VolumeVOP igual que en el caso de la geometría mediante PointVOP.
En el ejemplo, y a partir de volúmenes tipo VDB convertimos una geometría a volumen, modificamos las propiedades del volumen para luego convertilo de nuevo a geometría.

Gracias a que ahora tenemos un volumen, podemos actuar sobre el *interior* del objeto, añadiendo huecos y recreando geometría más compleja. Además, podemos componer diferentes volúmes de geometrías o crear un volumen único de varias geometría para pasar a considerarlas un único objeto, *fusionandolas* para generar objetos más interesantes.

{{< modal src="portadas/volumeDisp.png" titulo="Nodos VDB desde / a geometría" >}}
*Volumen a partir de objetos, nodo VolumeVOP y conversión de nuevo a geometría.*
<br/>&nbsp;<br />

La oportunidad ahora de recrear diferentes tipos de geometrías procedurales, desde montañas o paisajes, pasando por rocas hasta células y representaciones microscópicas es mayor, con una gran capacidad de controlar la forma final del objeto. El render propuesto además tiene añadido un noise tipo Alligator en el shader.

{{< modal src="portadas/volume_displ.png" titulo="Render final volumeVOP" >}}
*Render final volumeVOP*
<br/>&nbsp;<br />

**Pros:**
Podemos usar cualquier combinación de geometría y convertirla en volúmen tipo VDB o IsoOffset, las modificaciones a través del volumeVOP actúa también en el interior *sólido* del objeto.
Se crean geometrías con huecos, salientes y más *procedurales*
El desplazamiento generado es parte de la geometría y por lo tanto podemos actuar más adelante sobre ella.

**Contras:**
Seguimos teniendo una geometría de muy alta densidad, más lenta para renderizar y de usar, dfícil conseguir aristas perfectas o detalles pequeños, para ello debemos ayudarnos de mapas tipo bump o normal map, u otro desplazamiento desde el shader.

Podemos usarlo como base para crear geometría que luego detallaremos mediante otros mapas de detalle.
<br/>&nbsp;<br />

##### Archivos

[ZIP con tres escenas de Houdini, VOP, SHOP y Volume displacements](archivos/files_displacement.zip)<br/>

##### Enlaces
[Vimeo Working with Noise](https://vimeo.com/75313908)<br/>
[Vimeo Procedural rock formations](https://vimeo.com/228238370)<br/>
[Unified Noise](http://www.sidefx.com/docs/houdini/nodes/vop/unifiednoise)<br/>
[Vimeo Mantra rendering and texture baking](https://vimeo.com/143618200)<br/>
