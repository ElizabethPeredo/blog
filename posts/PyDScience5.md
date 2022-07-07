---
title: 'Capítulo 5. Lista y Tuplas'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 5. Lista y Tuplas.

> Las listas pueden modificar la cantidad de elemtos, pero las tuplas no pueden modificarse.

# Listas

Una lista regularmente está compuesta por datos del mismo tipo o datos homogéneos sin embargo esto no es una reglal.

```python
A = ['Patricia','México','F',1989]
A
#['Patricia','México','M',1989]

a = [9,10,8.5,8,8,7.5,10]
a
#[9,10,8.5,8,8,7.5,10]
```

![Untitled](/img/PyDS/C5/Untitled.png)

- El primer elemento de la lista tendrá índice cero
- La lista también puede llamarse empleando índices negativos

![Untitled](/img/PyDS/C5/Untitled%201.png)

```python
a[0]
#9
a[3]
#8
A[3]
#1989
A[-1]
#1989
a[-5]
#8.5
```

## Número de elementos

Para llamar el número de elementos en la lista, utiliza la función len (length)

```python
len(A)
#4
len(a)
#7
```

## Cambiar elemento

```python
a[3] = 7.2
a
#[9,10,8.5,7.2,8,7.5,10]
```

No es posible cambiar algún elemento con las listas que contienen caracteres. 

```python
b = 'Python'
b[5]
'n'
b[5]='m'
```

![Untitled](/img/PyDS/C5/Untitled%202.png)

Cada elemento puede utilizarse como una variable

```python
5*a[2]+a[3]-a[6]/5
#47.7
```

Es posible añadir elementos a una lista vacía. Python puede realizar esta tarea de forma dinámica.

```python
mi_secuencia=[]
for número in range(-2,3):
	mi_secuencia += [número]

mi_ secuencia
#[-2, -1, 0, 1, 2]
```

En la sentencia `for`, la tarea que realiza `mi_secuencia` es crear un elemento en una lista y la anexa a `mi_secuencia`. Esta forma de trabajar de Python permite agregar cualquier tipo de elementos a una lista. Por ejemplo:

```python
letras = []
letras += 'Porejemplo'

letras
#['P','o','r','e','j','e','m','p','l','o']
```

## Concatenar dos listas

```python
Lista = A + a

Lista
#['Patricia','México','F',1989,9,10,8.5,7.2,8,7.5,10]
```

El operador + regresa una lista nueva con los elementos de lista A seguidos de la lista a. Para visualizar los índices y sus valores, puedes utilizar el siguiente código.

```python
for i in range(len(Lista)):
	print(f'{i}:{Lista[i]}')

#OUTPUT:
#0:Patricia
#1:México
#2:F
#3:1989
#4:9
#5:10
#6:8.5
#7:7.2
#8:8
#9:7.5
#10:10
```

# Tuplas

Las tuplas son secuencias de datos, pero, inmutables y con mucha frecuencia contienen datos heterogéneos. La longitud de una tupla es el número de elementos que contiene, y a diferencia de una lista, este número de elementos no puede cambiar en la ejecución de un programa. Para crear una tupla vacía, utiliza paréntesis en lugar de corchetes.

```python
datos_cliente1 = ()
datos_cliente1
#()
len(datos_cliente1)
#0
```

## Añadir elementos

```python
datos_cliente1='Paty','F','23'

datos_cliente1
#('Paty', 'F', '23')
```

Los elementos de una tupla no se pueden iterar, si es posible llamar a ellos de manera individual. Como los índices de una tupla la lista inicia en cero por ejemplo:

```python
print(datos_cliente1[0],'nació en el año de', 2021-int(datos_cliente1[2]))
#Paty nació en el año de 1998
```

## Concatenar tuplas

```python
complemento_info = ('Feb','1998')
datos_c1 = datos_cliente1 + complemento_info

datos_c1
#('Paty', 'F', '23', 'Feb', '1998')
```

## Acceder a cualquier secuencia de elementos

```python
datos_paciente1 = ('Paco',[1.80,69])
nombre,estatura_peso = datos_paciente1

nombre
#'Paco'
estatura_peso
#[1.8,69]
```

Si en la tupla solo hay caracteres:

```python
primera,segunda = 'Va'

print(f'{primera},{segunda}')
#V,a
```

Si son valores:

```python
Estatura,Peso,Temperatura = (1.8,69,37.5)

print(f'{Estatura},{Peso},{Temperatura}')
#1.8,69,37.5
```

También se puede acceder a un valor al indexarlo. La función enumerate recibe una lista o una tupla que contiene dos elementos un índice y un valor. Respectivamente, crea una lista o una tupla.

```python
estudiantes=['Hugo','Paco','Luis']

list(enumerate(estudiantes))
#[(0, 'Hugo'),(1, 'Paco'),(2, 'Luis')]
tuple(enumerate(estudiantes))
#((0, 'Hugo'),(1, 'Paco'),(2, 'Luis'))
```

Una forma de presentar estos valores:

```python
for index,valor in enumerate(estudiantes):
	print(f'{index}:{valor}')

#OUTPUT:
#0: Hugo
#1: Paco
#2: Luis
```

# Separando secuencias

## Seleccionar elementos de una secuencia

## **`[n1:n2]`:** Selecciona los elementos con índices de n1 a n2

```python
potencias2 = [2,4,8,16,32,64,128,264]

potencias2[3:5]
#[16, 32]
```

> **potencias2[3:5]**
Selecciona los elementos con índices 3 al 5, sin incluir el 5



## **`[:n]`:** Selecciona los elementos con índices de 0 a n

```python
potencias2[3:]
#[16, 32, 64, 128, 264]
```

## **`[:]`:** Selecciona todos los elementos

```python
potencias2[:]
#[2, 4, 8, 16, 32, 64, 128, 264]
```

## **`[::n]`:** Selecciona elementos no consecutivos añadiendo un tamaño de paso (cada n)

```python
potencias2[::3]
#[2, 16, 128]

potencias2[::-3]
#[264, 32, 4]
```

## Modificar una lista

```python
potencias2[0:3] = ['dos','cuatro','ocho']

potencias2
#['dos', 'cuatro', 'ocho', 16, 32, 64, 128, 264]
```

```python
potencias2[0:2] = []

potencias2[:]
#['ocho', 16, 32, 64, 128, 264]
```

### Identificador de lista

Este identificador es único y se preserva a pesar de
realizar diferentes operaciones. Por ejemplo, al dejar la lista vacía.

```python
potencias2 = [2,4,8,16,32,64,128,264]
potencias2[::3] = [1,1,1]

potencias2
#[1, 4, 8, 1, 32, 64, 1, 264]
id(potencias2)
#2374936891776
```

El `identificador` no cambia a pesar de cambiar los elementos en la lista al hacer la asignación:

```python
potencias2[:] = []
potencias2
#[]
id(potencias2)
#2374936891776
```

Anteriormente se han borrado los elementos, por lo que se ha creado una nueva lista. Esta característica marca una diferencia esencial entre dejar una lista vacía y asignar una lista vacía.

```python
potencias2 = []
potencias2
#[]
id(potencias2)
#2374937250688
```

## Sentencia `del`

```python
multiplos10 = list(range(0,100,10))
multiplos10
#[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
del multiplos10[3:6]
multiplos10
#[0, 10, 20, 60, 70, 80, 90]
```

Para borrar con un tamaño de paso

```python
multiplos10 = list(range(0,100,10))
multiplos10
#[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
del multiplos10[::2]
multiplos10
#[10, 30, 50, 70, 90]
```

Para borrar una lista completa

```python
del multiplos10[:]
multiplos10
#[]
```

# Listas ordenadas

### `sort`

```python
edad = [65,26,28,36,18]
edad.sort()
edad
#[18, 26, 28, 36, 65]
```

### `sort`(reverse = True)

```python
edad.sort(reverse = True)
edad
#[65, 36, 28, 26, 18]
```

### sorted

La función sorted regresa una lista nueva con los elementos ordenados. Con este comando la sucesión original no cambia.

```python
edad = [65,26,28,36,18]
edades_ascendentes = sorted(edad)

edades_ascendentes
#[18, 26, 28, 36, 65]
edad
#[65, 26, 28, 36, 18]
```

Para ordenar una cadena de caracteres

```python
nombre = 'FRANCISCO'
letras_ascendentes = sorted(nombre)

letras_ascendentes
#['A', 'C', 'C', 'F', 'I', 'N', 'O', 'R', 'S']
nombre
#'FRANCISCO'
```

Para  ordenar una tupla

```python
estudiantes = ('Hugo','Paco','Luis')
estud_ordenados = sorted(estudiantes)

estud_ordenados
#['Hugo', 'Luis', 'Paco']
estudiantes
#('Hugo', 'Paco', 'Luis')
```

### `index`

Para realizar una búsqueda a través del índice de los elementos de una lista o una tupla.

```python
edad = [65,12,19,80,36,28,16,18,36,16,45,32,36,59]

edad.index(45)
#10
```

### `in`

```python
56 in edad
#False
```

### `insert`

Para insertar un elemento con un índice específico, puedes utilizar la función insert.

```python
vegetales = ['espinaca','apio']
vegetales.insert(0,'lechuga')

vegetales
#['lechuga', 'espinaca', 'apio']
```

### `append`

Para agregar elementos al final de la lista, puedes utilizar la función append.

```python
vegetales.append('esparrago')

vegetales
#['lechuga', 'espinaca', 'apio', 'esparrago']
```

### `extend`

Para añadir más elementos al final de la lista es posible utilizar el comando extend, también permite concatenar dos listas

```python
Precio = (10,15,8,30)
vegetales.extend(precio)

vegetales
#['lechuga', 'espinaca', 'apio', 'esparrago', 10, 15, 8, 30]
```

### `remove`

La función remove, borra el primer elemento con un valor específico. Un error del tipo `ValueError` ocurre si el elemento no está en la lista

```python
vegetales.remove('esparrago')

vegetales
#['lechuga', 'espinaca', 'apio', 'esparrago']
```

### `clear`

```python
vegetales.clear()
vegetales
#[]

#Es equivalente a
vegetales[:]=[]
```

### `count`

La función count determina el número de veces que aparece un elemento en una lista

```python
edades = [15, 21, 16, 19, 20, 16, 19, 15, 21, 17, 18,24, 20, 24, 21, 19, 18, 16, 19, 16]
for edad in range(15,25):
	print(f'La edad {edad} se repite {edades.count(edad)} veces')

#OUTPUT:
#La edad 15 se repite 2 veces
#La edad 16 se repite 4 veces
#La edad 17 se repite 1 veces
#La edad 18 se repite 2 veces
#La edad 19 se repite 4 veces
#La edad 20 se repite 2 veces
#La edad 21 se repite 3 veces
#La edad 22 se repite 0 veces
#La edad 23 se repite 0 veces
#La edad 24 se repite 2 veces
```

### `reverse`

La función reverse invierte el orden de una lista. A deferencia de sort, que tratamos anteriormente, reverse no crea una lista nueva.

```python
vegetales = ['lechuga','espinaca','apio','pepinillo']
vegetales.reverse()

vegetales
#['pepinillo', 'apio', 'espinaca', 'lechuga']
```

### `copy`

La función copy, copia los elementos de una lista en una nueva.

```python
copia_vegetales = vegetales.copy()

copia_vegetales
#['pepinillo', 'apio', 'espinaca', 'lechuga']

#Es equivalente a
copia_vegetales=vegetales[:]
```

# Comprensión de listas

## Anexar elementos a una lista

```python
lista1 = []
for dato in range (1,11):
	lista1.append(dato)

lista1
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```python
lista2=[dato for dato in range(1,11)]

lista2
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Es posible realizar tareas dentro de la comprensión de lista, regularmente cálculos. A esta tarea se le llama `mapear`. 

Mapear debes entenderlo como llevar cosas (elementos de una lista) de un lado a otro (a otra lista). Por ejemplo, los cuadrados de los primeros 7 números naturales.

```python
lista3 = list(range(1,11))

lista3
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

En términos de mapeos, estás mapeado (llevando) una lista [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] a otra lista [1,4, 9, 16, 25, 36, 49, 64, 81, 100].

```python
cuad10=[dato*dato for dato in range(1,11)]

cuad10
#[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

### Números menores

```python
cuad = [dato*dato for dato in range(1,11) if dato*dato<=50]

cuad
#[1, 4, 9, 16, 25, 36, 49]
```

### Números pares

```python
cuad2 = [dato*dato for dato in range(1,11) if dato % 2 ==0]

cuad2
#[4, 16, 36, 64, 100]
```

### `upper()`

La lista inicial tenía a sus elementos escritos con minúsculas y en la comprensión de lista se asigna estos elementos a otra lista, pero escritos con mayúsculas.

```python
vegetales = ['apio','brocoli','lechuga']
vegetales2 = [dato.upper() for dato in vegetales]

vegetales2
#['APIO', 'BROCOLI', 'LECHUGA']
```

### Generador de expresiones

Este generador tiene cierta similitud con la comprensión de listas, pero al final genera objetos iterables. 

Esto es conocido como evaluación débil. La comprensión de listas realiza una evaluación robusta, por lo que crea otra lista inmediatamente después de la ejecución. 

Para una cantidad considerable de datos esto puede ocasionar un uso considerable de tiempo y memoria, por lo que el general el `generador de expresiones` reduce el consumo de recursos.

**Sin generador de expresiones**

```python
lista = [-3,5,8,4,1,-6,7,10]
for valor in (x**2for x in lista if x%2==0):
	print(valor,end=' ')

#64 16 36 100
```

**Con generador de expresiones**

```python
lista = [-3,5,8,4,1,-6,7,10]
cuadrados_pares = (x**2 for x in lista if x%2==0)

cuadrados_pares
#<generator object <genexpr> at 0x00000142EA4AE660>
```

El `“<generator object <genexpr>”` indica que `cuadrados_pares` es un objeto generador y que fue creado por un generador de expresiones. Observa que no muestra los valores, esto es una consecuencia de la evaluación débil del generador. Esto contribuye a no utilizar recursos de memoria y tiempo de la computadora. Si quieres observar los resultados debes solicitarlo, por ejemplo:

```python
list(cuadrados_pares)
#[64, 16, 36 100]
```

### `filter`

- La función `filter` tiene como primer argumento la función pares. La `función pares` también tiene un argumento y regresa True si su argumento es par.
- La función `filter` llama entonces a la función pares para cada valor (de la lista) en el segundo argumento.
- La función `filter` regresa un iterador (una lista generada) por lo que los resultados de filter no se producen hasta que iteras sobre ellos (la función list los manda llamar), este es otro ejemplo de una evaluación débil.

```python
lista=[-3,5,8,4,1,-6,7,10]
def pares(x):
	"""Regresa el valor de la lista solo si es un número par"""
	return x % 2==0

list(filter(pares,lista))
#[8, 4, -6, 10]

#Una forma más dinámica de generar la misma lista:
[valor for valor in lista if pares(valor)]
#[8, 4, -6, 10]

```

### `lambda`

Una función `lambda` es reconocida como una función anónima o sin nombre y es útil para llamar alguna función. Aquí están las similitudes entre la sintaxis de una función `def`

```python
list(filter(lambda x:x%2==0,lista))
#[8, 4, -6, 10]
```

```python
def nombre_función(parámetros
 return expresión

#=======================================

lambda parámetros:expresión
```

### `map`

- La función `map` tiene dos argumentos. El primero recibe un valor y la forma en que lo regresará, el segundo es una lista de valores iterables.
- La función `map` también realiza una evaluación débil, por lo que al pasarlos por la función list es posible ver los valores.

```python
lista
#[-3, 5, 8, 4, 1, -6, 7, 10]
list(map(lambda x:x**3,lista))
#[-27, 125, 512, 64, 1, -216, 343, 1000]
```

```python
[valor**3 for valor in lista]
#[-27, 125, 512, 64, 1, -216, 343, 1000]
```

### `map` y `filter`

```python
list(map(lambda x:x**3,filter(lambda x:x%2==0,lista)))
#[512, 64, -216, 1000]
```

```python
[x**3 for x in lista if x % 2 == 0]
#[512, 64, -216, 1000]
```

### `ord`

`'Pato'<'murciélago'`: Este resultado puede interpretarse como verdadero, debido a que la `P` está ubicada después de `m` en el abecedario, sin embargo, las cadenas son comparadas por los valores numéricos de sus caracteres. En este caso las letras minúsculas tienen valores numéricos más altos que las letras mayúsculas. 

```python
'Pato'<'murciélago'
#True
```

Para revisar el valor numérico de las letras es posible utilizar la función `ord`.

```python
ord('P')
#80
ord('m')
#109
ord('M')
#77
```

### `key`

Considera la siguiente lista de animales.

`animales=['Pato','murciélago','Jirafa','gato','Ratón','conejo']`

Si los quieres ordenar alfabéticamente, entonces el orden debe ser

`'conejo', 'gato', 'Jirafa', 'murciélago', 'Pato', 'Ratón'`

Observa que, en términos de orden, conejo es el mínimo en la lista, y ratón es el máximo. Para que Python pueda comprender este orden, es necesario que todas las palabras sean mayúsculas o minúsculas.

La función `key` tiene como argumento una función de un parámetro que regresa otro valor. En este código lambda llama a la tarea upper (mayúsculas) para obtener la versión en mayúsculas de cada palabra, al final las funciones min y max comparan los valores numéricos de cada palabra.

```python
animales=['Pato','murciélago','Jirafa','gato','Ratón','conejo']
min(animales,key=lambda a:a.upper())
#'conejo'
max(animales,key=lambda a:a.upper())
#'Ratón'
```

### `zip`

La función que puede ser útil es zip, que permite iterar múltiples listas de datos de manera simultánea.

La función zip determina el número de tuplas, de acuerdo al argumento con menor número de elementos, en este caso las tuplas tienen el mismo número de elementos.

```python
lugar = ['México','Colombia','Brasil']
ProdIB=[3.8,5.0,3.2]

for pais,pib in zip(lugar,ProdIB):
	print(f'País: {pais}, PIB= {pib}')

#País: México, PIB= 3.8
#País: Colombia, PIB= 5.0
#País: Brasil, PIB= 3.2
```

# Listas de 2 dimensiones

## Ejemplo 1:

Supongamos que un nutriólogo lleva a cabo la supervisión de 2 personas que siguen un régimen de control de peso. Después de 4 visitas bimestrales obtuvo la siguiente tabla de datos con respecto al peso de los pacientes en kilogramos:

|  | B1 | B2 | B3 | B4 |
| --- | --- | --- | --- | --- |
| Paciente 1 | 118 | 117 | 114 | 110 |
| Paciente 2 | 84.5 | 81.3 | 82 | 81 |

```python
peso = [[118,117,114,110], [84.5,81.3,82,81]]
for fila in peso:
	for valor in fila:
		print(valor,end=' ')
	print()

#118 117 114 110
#84.5 81.3 82 81
```

|  | Col1 | Col2 | Col3 | Col4 |
| --- | --- | --- | --- | --- |
| Fil1 | 118 | 117 | 114 | 110 |
| Fil2 | 84.5 | 81.3 | 82 | 81 |

|  | Col1 | Col2 | Col3 | Col4 |
| --- | --- | --- | --- | --- |
| Fil1 | peso[1][1] | peso[1][2] | peso[1][3] | peso[1][4] |
| Fil2 | peso[2][1] | peso[2][2] | peso[2][3] | peso[2][4] |

# Visualización de datos estáticos

`lb` es una palabra clave definida para reconocer a la librería

- `número Pi` es una librería que contiene la función unique que utilizaremos en el siguiente ejemplo a llamaremos NP
- módulo `Random` que contiene las funciones necesarias para generar números aleatorios
- módulo `Sans` contiene algunas librerías de estadística complementarias a la primera para el ambiente gráfico a esta función la invocaremos cómo SNS
- utilizaremos una comprensión de la `tos` para generar 600 lanzamientos de un dado y utilizaremos La función `unik` para determinar los valores y las frecuencias de cada valor en la
lista.

![Untitled](/img/PyDS/C5/Untitled%203.png)

```python
import matplotlib.pyplot as plt
import numpy as np
import random
import seaborn as sns

tirosdados=[random.randrange(1,7) for i in range (600)]
valores, frecuencias=np.unique(tirosdados, return_counts=True)

titulo=f'Resultados de tirar los dados {len(tirosdados)} veces'

sns.set_style('whitegrid')

axes=sns.barplot(x=valores,y=frecuencias, palette='bright')
axes.set_title(titulo)
axes.set(xlabel='Valores',ylabel='Frecuencias')

axes.set_ylim(top=max(frecuencias)*1.10)

for bar,frecuencias in zip(axes.patches, frecuencias):
    text_x=bar.get_x()+bar.get_width()/2.0
    text_y=bar.get_height()
    text=f'{frecuencias:,}\n{frecuencias/len(tirosdados):.3%}'
    axes.text(text_x,text_y,text,fontsize=11,ha='center',va='bottom')
```

![Untitled](/img/PyDS/C5/Untitled%204.png)