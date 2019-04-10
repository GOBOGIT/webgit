+++
date = "2017-04-10"
title = "Programación visual para artistas I. Max/Msp"
tags = ["software"]
categories = ["feed"]
type = "post"
imagen = "portadaMax"
+++

Para la realización de audiovisuales interactivos, hablando de instalaciones, presentaciones multimedia creativa o eventos en directo, los que somos más de la rama visual nos encontramos con el problema de encontrar una plataforma que nos permita realizar éste tipo de proyectos sin volvernos locos con el aprendizaje de un lenguaje de programación o la realización de aplicaciones complejas que ofrezcan la parte de interactividad junto a la creatividad y contenido audiovisual.

<!--more--> 

Afortunadamente, desde hace tiempo y por mi propio interés en el tema he ido probando y realizando pequeños proyectos que, aunque finalmente no han salido al mercado profesional todavía, me han ayudado a tener una idea global de los productos que nos permiten realizar loa proyectos que aquí comentamos sin desesparar demasiado.

Los programas o soportes que nos permiten crear experiencias interactivas, conectadas, mixtas, mediante sensores y electrónica tipo Arduino, realidad virtual etc.. están diseñados precisamente para poder ser utilizados con una serie de conexiones digitales, analógicas o de datos bastante amplias, y dar soluciones para cualquier tipo de proyecto de tipo que sea.

En mi caso, la propuesta visual es la más importante, por mi experiencia y por el tipo de proyectos que me gustaría ofrecer. Aplicacones que puedan modificar en tiempo real las imágenes, configurar mediante entradas como sensores o pantallas táctiles la información entregada al usuario para ofrecer sensaciones, experiencias creativas y con un componente audiovisual potente.

Así que vayamos con la primera aplicación de la serie que nos pueden ofrecer la ayuda que necesitamos:

<strong>Cycling'74</strong>, con su programa Max/msp nos a acerca a la programación visual mediante nodos que se conectan entre sí. Cada nodo puede realizar una acción en concreto, desde enviar tonos de sonido, elegir un color.. hay cientos; hasta más complejos como abirir una escena 3D, añadir objetos o gestionar la entrada táctil o de las entradas digitales del ordenador. Mientras que es un programa que permite jugar creativamente con los nodos creando lo que ellos llaman 'Patches', el punto fuerte es el audio. Originalmente más dirigido para musicos, tienen multitud de opciones para la manipulación y generación de sonido.

Algunos de éstos nodos son simples entrada de código, mediante scrips que pueden ser javascript o java, y un lenguaje sencillo tipo "si la entrada es x haz y"; en cambio otros nodos son más visuales, y pueden modificarse mediante botones, sliders o selectores. Mediante la conexión de diferentes nodos programamos la salida deseada.

La salida puede entonces usarse para mostrar imágenes en la pantalla, enviar datos a otra máquina u software, o emitir sonidos, conectarnos a una placa eletrónica que inicie un motor, etc.. como decimos, las opciones on múltiples.

El programa viene tal vez con el mejor sistema de ayuda y tutoriales, cubriendo cada componente y dando ejemplos de codigo y patches para avanzar en la creación de los nuestros propios.

Tal vez en punto débil de Max es que el módulo audiovisual, Jit y el que 'renderiza' las imágenes finales de nuestro sistema de nodos está realizado en Java. Java, que es un lenguaje estupendo no siempre está optimizado para ofrecer soluciones visuales en tiempo real, por su propia forma de gestionar la memoria, y ésto se nota cuando necesitas ofrecer vídeos en HD y manipularlos, aunque se ha avanzado a través de la programación mediante shaders glsl.

Max es divertido de usar, y aunque tiene una curva de aprendizaje intermedia, en cuanto algunos de los nodos necesitan entrada de 'código' o instrucciones básicos, gracias a la ayuda y tutoriales se pueden empezar a realizar pequeños proyectos de forma sencilla.

Max además es de las tres plataformas que analizamos (Max, Touchdesigner y vvvv) el más económico, mediante una suscripción mensual de 10 euros al mes o 99 al año, con opción de compra de 400 euros.

En definitiva es una excelente opción para introducirse en las aplicaciones creativas, muy completo y con el tiempo fácil de usar. Léase que el fácil de usar depende de nuestros conocimientos y tipo de proyecto, y de la necesidad o no de avanzar en otros lenguajes como Java o glsl, además de el conocimiento de los soportes de entrada y salida, mediante otros elementos de hardware o de datos que desemos, tal es la potencia y capacidades del software.

[Cycling'74](https://www.cycling74.com)<br>
[Max](https://cycling74.com/products/max/#.WOvWF4UQRhE)