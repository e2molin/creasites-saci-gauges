# Consola E-Winner para SACI

[![N|Solid](http://www.creasites.net/wp-content/uploads/2015/02/creasites_logo.png)](http://www.creasites.net/)
[![N|Solid](http://www.develmap.com/img/logografia.png)](http://www.develmap.com/)

Monitorización de las variables de una depuradora **E-Winner**.

  - Potencia
  - Caudal de agua
  - Presión
  - Velocidad

# Funcionamiento

  - Visualización aleatoria de variables.
  - Monitorización de valores absolutos o de diferencias.
  - Lectura de las variables de un *single-line file*.
  - Lectura de las variables de un *multi-line file*.

## Recursos utilizados

| Plugin | README |
| ------ | ------ |
| jQuery | [https://jquery.com/] [PlJQ] |
| Twitter Bootstrap | [http://getbootstrap.com/] [PlDb] |
| Font Awesome | [http://fontawesome.io/] [PlGh] |
| Canvas Gauges | [https://canvas-gauges.com/] [PlGd] |
| Canvas Gauges by Mikhus | [https://github.com/Mikhus/canvas-gauges] [PlOd] |
| Gauge JS | [https://github.com/getgauge-contrib/gauge-js] [PlMe] |

## Funcionamiento
Se necesita instalar un *Apache Web server*. No necesita conexión a internet, todas las librerías están en el los directorios de trabajo. Los *logger files* a los que accede la web para monitorizar son:
- Monitorización fichero *single-line*: **logfile.txt**
- Monitorización fichero *multi-line*: **logfile-multi.txt**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [PlDb]: <http://getbootstrap.com/>
   [PlJQ]: <https://jquery.com/>
   [PlGh]: <http://fontawesome.io/>
   [PlGd]: <https://canvas-gauges.com/>
   [PlOd]: <https://github.com/Mikhus/canvas-gauges>
   [PlMe]: <https://github.com/getgauge-contrib/gauge-js>

---

#Versión 2.0 - Septiembre 2017

* Si el fichero de LOG tiene 4 parámetros separados por punto y coma, funciona como antes. Si tiene 6, cambia los parámetros. Los nuevos parámetros son, en orden:
-- Volumen de piscina en litros
-- Horas de filtrado diarias en minutos. Para los cálculos se pasa el parámetro a horas.
* Los botones de Start & Stop están en la pantalla, al lado del botón de fullscreen.
* El slider de las horas de filtración lo he puesto en la parte superior derecha. Ahora se ha ampliado el rango hasta 8 horas