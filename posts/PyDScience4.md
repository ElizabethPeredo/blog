---
title: 'Capítulo 4. Funciones'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 4. Funciones.

 <aside>
 </aside>

# Función def

![Untitled](/img/PyDS/C4/Untitled.png)

- `def`, es una función reservada por Python y tiene como tarea definir nuevas funciones.
- `nombre`, es el nombre de la función que quieres definir. (no utilizar las palabras reservadas por Python)
- `parámetros`, es una lista de elementos de entrada, necesarios para que la tarea se ejecute.
- `return`, cuando la función se ejecuta, las tareas terminan con esta instrucción y muestra los resultados obtenidos.

```python
def raiz_cuad(número):
	"""Calcula la raíz cuadrada de un número."""
	return número**(1/2)
	
raiz_cuad(49)
#7.0
```

# Funciones con Múltiples Parámetros

```python
def raiz_min(num1,num2,num3):
"""Calcula la raíz cuadrada más pequeña de 3 valores"""

r_num1=num1**(1/2)
r_num2=num2**(1/2)
r_num3=num3**(1/2)

raiz_min=r_num1

if r_num2 < raiz_min:
	raiz_min=r_num2
if r_num3 < raiz_min:
	raiz_min=r_num3
return raiz_min

raiz_min(9,25,4)
#2.0
raiz_min(74,73,75)
#8.54400374531753
raiz_min(7.5,0.3,0)
#0.0
```

# Números aleatorios

```python
import random

for tirada in range(10):
	print(random.randrange(0,2),end=' ')
#1 1 0 0 0 0 1 0 0 1
```

## Ejemplo 1

Para repetir este experimento aleatorio, que consiste en lanzar una moneda 100,000 veces, no es tan relevante observar una página completa con ceros y unos. Para entender mejor el comportamiento del experimento, el siguiente código (ejemplo1_C4), muestra la frecuencia con la que ocurren las caras (unos) y las águilas (ceros).

```python
"""100,000 lanzamientos de una moneda."""
import random

#Contadores para las frecuencias

frecuencias_unos=0
frecuencias_ceros=0

for tirada in range(100_000):
	resultado = random.randrange(0,2)
	if resultado == 1:
		frecuencias_unos += 1
	else:
		frecuencias_ceros += 1

print(f'1=Cara,0=Águila{"Frecuencia":>13}')
print(f'{1:>14}{frecuencias_unos:>13}')
print(f'{0:>14}{frecuencias_ceros:>13}')

#-------------------------------
#OUTPUT:
#1=Cara,0=Águila   Frecuencia
#             1        50034
#             0        49966
```

> La función `randrange` genera números enteros aleatorios
en el rango [0, 1].
**`{"Frecuencia":>13}`**: >13 es el espacio que se deja depues del texto que no esta entre { }.
> 

### `seed(n)`

Permite que empiece desde le punto `n`, debido a que random te da valores aleatorios, pero este proviene de un algoritmo ya programado. Por consiguiente, al usar `seed(n)` le fuerces a que de el valor de esa linea.

```python
random.seed(1)
for tirada in range(10):
	print(random.randrange(0,2),end=' ')
random.seed(1)
#0 0 1 0 1 1 1 1 0 0
random.seed(21)
#0 1 1 1 1 0 1 0 0 0
random.seed(1)
#0 0 1 0 1 1 1 1 0 0
```

## Ejemplo 2

La Reglas del juego. Debes lanzar un par de dados. Si la suma de las caras es un 8, ganas. Si sale 7, pierdes. Si no ha salido, ni 8, ni 7, puedes seguir lanzando. Si sale 8 ganas, pero si en algún otro
lanzamiento sale 7, pierdes.

```python
""" Juego simulado del Gran 8."""
import random

def lanzar_dados():
	dado1 = random.randrange(1,7)
	dado2 = random.randrange(1,7)
	return(dado1,dado2)

#Contadores para las frecuencias
def mostrar_dados(dado):
	dado1,dado2 = dado
	print(f'Resultado de la jugada {dado1}+{dado2}={-sum(dado)}')

valores_logrados = lanzar_dados()
mostrar_dados(valores_logrados)
suma_dados = sum(valores_logrados)

if suma_dados == 8:
	status_jugador = 'Ganaste'
elif suma_dados == 7:
	status_jugador = 'Perdiste'
else:
	status_jugador = 'Continuar'
    #puntos_logrados=suma_dados
	print('Sigue probando, encuentra al Gran 8')

while status_jugador == 'Continuar':
	valores_logrados = lanzar_dados()
	mostrar_dados(valores_logrados)
	suma_dados = sum(valores_logrados)
	if suma_dados in (6,8):
		status_jugador = 'Ganaste'
	elif suma_dados == 7:
		status_jugador = 'Perdiste'

if status_jugador == 'Ganaste':
	print('Ganaste')
else:
	print('Perdiste')

#-------------------------------
#OUTPUT:
#Resultado de la jugada 6+5=11
#Sigue probando, encuentra al Gran 8
#Resultado de la jugada 6+2=8
#Ganaste
#-------------------------------
#Resultado de la jugada 1+1=2
#Sigue probando, encuentra al Gran 8
#Resultado de la jugada 6+4=10
#Resultado de la jugada 6+5=11
#Resultado de la jugada 2+1=3
#Resultado de la jugada 2+3=5
#Resultado de la jugada 1+3=4
#Resultado de la jugada 3+4=7
#Perdiste
#-------------------------------
#Resultado de la jugada 2+4=6
#Sigue probando, encuentra al Gran 8
#Resultado de la jugada 3+1=4
#Resultado de la jugada 4+3=7
#Perdiste
```

La `función def lanzar_dados()`: es llamada varias veces, cuando aparece el paréntesis vacío, indica que la función no necesita parámetros para ejecutarse. Este tipo de funciones pueden regresar uno o varios valores. En este caso `lanzar_dados` regresa dos valores y los coloca en tupla (en este caso, un par ordenado) que contiene los valores de cada lanzamiento.

La función `mostrar_dados` en la línea 18, separa los valores en el arreglo. Estos valores se asignan, como tupla, a una variable (dado), al separarlas por una coma.

La función `print`, muestra un `f-string` que contiene los valores individuales y su suma. Para realizar la suma en la tupla dado se utiliza la función sum, cuya tarea es sumar los elementos en un arreglo numérico.

Las funciones `lanzar_dados` y `mostrar_dados` contienen variables locales dado1, dado2, y no se colapsan entre ellas, ya que son funciones diferentes que se ejecutan solo en el bloque donde están definidas.

# Funciones sin parámetros y múltiples parámetros

```python
def raiz_cuad(número):
	 """Calcula la raíz cuadrada de un número."""
	 return número**(1/2)
raiz_cuad(49)
#7.0
raiz_cuad()
```

Esta forma de definir la función, indica que es necesario ingresar un valor (la variable número) para que la función se ejecute. Cuando dejas el espacio vacío, Python señala que existe un error.

![Untitled](/img/PyDS/C4/Untitled%201.png)

## Valores por default

Para evitar este tipo de errores, es posible asignar valores iniciales que luego pueden ser cambiados. Por ejemplo:

```python
def raiz_cuad(número=1):
	"""Calcula la raíz cuadrada de un número."""
	return número**(1/2)
raiz_cuad()
#1.0
raiz_cuad(27)
#5.196152422706632
```

## Ejemplo 1:

Calcula el promedio de calificaciones. Las calificaciones pueden ser de diferentes personas o diferentes asignaturas, pero además puede tener una cantidad arbitraria de elementos.

```python
def promedio_calif(*calif):
	return sum(calif)/len(calif)

promedio_calif(9,8,8,9.5,9.7,10,6)
#8.6
promedio_calif(7,7.3,8.1)
#7.466666666666666
```

En este ejemplo además de utilizar el parámetro `*calif`, emplea la función `sum`, cuya tarea es sumar los elementos de la tupla `calif`, y `len`, cuya tarea es determinar el número de elementos en la tupla `calif`.

# Alcance local y global

Las variables de `alcance global` pueden ser llamadas para trabajar en diferentes bloques.

![Untitled](/img/PyDS/C4/Untitled%202.png)

```python
aprox_pi = 3.141

def acceso_global_pi():
	print('aprox_pi es llamada de acceso_global_pi como:',aprox_pi)

acceso_global_pi()
#aprox_pi es llamada de acceso_global_pi como: 3.141
```

En una función no es posible modificar una variable global, al intentar hacer esto, Python crea una nueva variable, pero de alcance local.

```python
aprox_pi = 3.141

def intento_modificar_global_pi():
	aprox_pi=3.1416
	print('Modificación de aprox_pi como:',aprox_pi)

intento_modificar_acceso_global_pi()
#Modificación de aprox_pi como: 3.1416
aprox_pi
#3.141
```

# El módulo de matemáticas de Python

El módulo math de Python contienen funciones que permiten realizar diferentes tipos de cálculos típicos de matemáticas. 

Por ejemplo, trataremos de calcular el logaritmo base 10, de 1000, empleando las funciones ya definidas de Python.

```python
log10(1000)
```

![Untitled](/img/PyDS/C4/Untitled%203.png)

La función definida de Python para calcular logaritmos base 10 es `log10()`. Sin embargo, el error que observas se debe a que la librería math de Python, no está cargada de manera predefinida.

Para resolver esto importa primero la librería:

```python
import math
```

 < aside>
💡 `nombre_librería.función(argumento)`

 < /aside>

```python
math.log10(1000)
#3.0
```

[**Mathematical functions**](/img/PyDS/C4/Mathematical%20functions%20129e7ae3cd32417f90e355fd2813c065.md)

![Untitled](/img/PyDS/C4/Untitled%204.png)

# Medidas de Tendencia Central y de Dispersión

## Ejemplo 1:

Un estudiante ha tenido el siguiente registro de calificaciones (de 0 a 100) y desea conocer como ha sido su rendimiento calculando algunos estadísticos descriptivos como la media, la mediana, la moda, el rango, la desviación estándar y la varianza. Las calificaciones son:

Calificaciones: 68, 90, 80, 100, 80, 75, 85, 95, 70, 70

```python
""" Medidas de tendencia central y de dispersión."""
import statistics as estad

#Calificaciones
calificaciones= [68, 90, 80, 100, 80, 75, 85, 95, 70, 70]

# Medidas de tendencia central
media=estad.mean(calificaciones)
mediana=estad.median(calificaciones)
moda=estad.mode(calificaciones)

# Medidas de dispersión
rango=max(calificaciones)-min(calificaciones)
varianza=estad.pvariance(calificaciones)
desv_estandar=estad.pstdev(calificaciones)

print('Las medidas de tendencia central son:')
print(f'Media= {media:>7}')
print(f'Mediana= {mediana:>5}')
print(f'Moda= {moda:>6}')
print('Las medidas de dispersión son:')
print(f'Rango= {rango:>2}')
print(f'Varianza= {varianza:>0.3f}')
print(f'Desv. Estándar= {desv_estandar:>0.3f}')

#-------------------------------
#OUTPUT:
#Las medidas de tendencia central son:
#Media= 81.3
#Mediana= 80.0
#Moda= 80
#Las medidas de dispersión son:
#Rango= 32
#Varianza= 110.210
#Desv. Estándar= 10.498
```

Como la media y la mediana no son muy diferentes, es posible afirmar que los datos tienen una buena medida de tendencia central de 80 aproximadamente. La desviación estándar es aproximadamente 10 por lo que a 10 unidades de la media se encuentran aproximadamente el 68% de las calificaciones según el Teorema de Chebyshev. El comportamiento, podemos intuir