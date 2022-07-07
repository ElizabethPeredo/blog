---
title: 'Capítulo 6. Diccionarios y conjuntos'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 6. Diccionarios y conjuntos.

# Dicccionarios

Un `diccionario` tiene es una colección no ordenada de parejas, estas parejas contienen llaves y datos. Los datos pueden ser números (enteros, flotantes), cadenas (strings, booleanos) o arreglos (listas,tuplas) e incluso otro diccionario.

Es posible modificar los datos de un diccionario, o su longitud. Es decir, los diccionarios son objetos mutables, sin embargo, las llaves asociadas a los datos, no lo son.

```python
usuario_nickname = {'Laura':'la','Daniel':'dn','Alberto':'al',
 'Rogelio':'ro'}

usuario_nickname
#{'Laura': 'la','Daniel': 'dn','Alberto': 'al','Rogelio': 'ro'}
```

Los diccionarios, por definición, son listas no ordenadas, por lo que es posible que al ejecutar el código no aparezca exactamente el mismo orden en el que fue escrito.

```python
len(usuario_nickname)
#4
```

```python
usuario_edad={'Laura':28,'Daniel':31,'Alberto':27,'Rogelio':65}

usuario_edad
#{'Laura': 28, 'Daniel': 31, 'Alberto': 27, 'Rogelio': 65}
```

## Generar un arreglo

```python
for usuario,edad in usuario_edad.items():
	print(f'{usuario} tiene {edad} años cumplidos')

#OUTPUT
#Laura tiene 28 años cumplidos
#Daniel tiene 31 años cumplidos
#Alberto tiene 27 años cumplidos
#Rogelio tiene 65 años cumplidos
```

## Acceder a los valores

```python
usuario_edad['Daniel']
#31
usuario_edad['Rogelio']
#65
```

## Cambiar el valor de alguna de las llaves

```python
usuario_edad['Rogelio']=35
usuario_edad
#{'Laura': 28, 'Daniel': 31, 'Alberto': 27, 'Rogelio': 35}
```

## Añadir un nuevo elemento

```python
usuario_edad['Eva']=29
usuario_edad
#{'Laura': 28, 'Daniel': 31, 'Alberto': 27, 'Rogelio': 35, 'Eva': 29}
```

## Borrar del diccionario

```python
del usuario_edad['Daniel']
usuario_edad
#{'Laura': 28, 'Alberto': 27, 'Rogelio': 35, 'Eva': 29}
```

## Conocer el valor asociado a alguna llave

```python
usuario_edad['Eva']
#29

usuario_edad['Pepe']
#KeyError
```

Es posible prevenir el `**error**` que muestra Python con el usuario 'Pepe'al utilizar este método

```python
usuario_edad.get['Pepe']

'''Para hacer este método útil:'''
usuario_edad.get['Pepe', 'Pepe no está incluido']
#'Pepe no está incluido'

'''Otra posibilidad:'''
'Pepe' in usuario_edad
#False
'Pepe' not in usuario_edad
#True
'Laura' in usuario_edad
#True
```

## Iterar (manipular) el contenido - llaves(`keys`), o sus valores(`values`)

```python
usuario_edad={'Laura':28,'Daniel':31,'Alberto':27, 'Rogelio':65}
for usuario in usuario_edad.keys():
	print(usuario, end=' ')
#Laura Daniel Alberto Rogelio

for edad in usuario_edad.values():
	print(edad, end=' ')
#28 31 27 65

usuario_edad={'Laura':28,'Daniel':31,'Alberto':27,'Rogelio':65}
usuarios=usuario_edad.keys()
for llave in usuarios:
	print(llave, end=' ')
#Laura Daniel Alberto Rogelio
```

## `list`

Esta tarea no modifica al correspondiente diccionario.

```python
list(usuario_edad.keys())
#['Laura', 'Daniel', 'Alberto', 'Rogelio', 'Eva']

list(usuario_edad.values())
#[28 31 27 65 29]

list(usuario_edad.items())
#[('Laura', 28), ('Daniel', 31), ('Alberto', 27),('Rogelio', 65), ('Eva', 29)]
```

## Ordenar en orden alfabético

```python
for usuario in sorted(usuario_edad.keys()):
	print(usuario, end=' ')
#Alberto Daniel Eva Laura Rogelio
```

> **↪👀** Genera una vista de los elementos ordenados, pero esto no altera el diccionario directamente.
> 

## Comparar diccionarios

Como los diccionarios son colecciones no ordenadas de elementos, el orden no representa un factor que indique a Python que los diccionarios son diferentes.

```python
asistentes_dia1={'Ramírez':'Laura','Cortés': 'Daniel','Pérez':'Alberto'}
asistentes_dia2={'García':'Rogelio','Ramírez': 'Laura','Pérez':'Alberto'}
asistentes_dia3={'Pérez':'Alberto','Cortés': 'Daniel','Ramírez':'Laura'}

asistentes_dia1 == asistentes_dia2
#False
asistentes_dia2 != asistentes_dia3
#True
asistentes_dia3 == asistentes_dia1
#True
```

## Ejemplo 1:

En este ejemplo se calculan las ventas promedio en $, de 3 agentes o promotores de productos alimenticios en una semana. Aquí las llaves son los nombres de los agentes. Estas llaves mapean el nombre, a una lista de valores que representa las ventas que realizaron.

El ciclo for, separa los contenidos del diccionario en dos iterables: agente y ventas. En la línea 12, la función sum, suma los valores de la lista venta, mientras que, en la línea 13, la suma total se divide entre la cantidad de elementos de la lista venta.

Por otro lado, en el mismo ciclo, en la línea 14 se suman todas las ventas realizadas, mientras que en la línea 15 se calcula cada iteración la cantidad de ventas logradas por todos los agentes. En la última línea se imprime el promedio de ventas de todos los involucrados.

```python
"""Cálculo de ventas por agente"""
ventas_agentes={
	'Laura': [12000, 10500, 9800, 11100],
	'Daniel': [11000, 7800, 7200, 6500],
	'Alberto': [11200, 9500, 10800, 10100]
}
venta_total=0
num_ventas=0

for agente,venta in ventas_agentes.items():
	total=sum(venta)
	print(f'{agente} tuvo en promedio, ${total/len(venta):0.3f}')
	venta_total += total
	num_ventas += len(venta)

print(f'Las ventas promedio de la agencia fue de {venta_total/num_ventas:0.3f}')

#OUTPUT:
#Laura tuvo en promedio, $10850.000
#Las ventas promedio de la agencia fue de 10850.000
#Daniel tuvo en promedio, $8125.000
#Alberto tuvo en promedio, $10400.000
#Las ventas promedio de la agencia fue de 9791.667
```

## Ejemplo 2:

Para contar el número de palabras en un texto, es posible construir un diccionario que realice esta tarea. En este ejemplo las líneas 4, 5 y 6 crean una cadena de texto que es separada en palabras.

Aunque los espacios en blanco concatenan a la cadena. estos espacios se sustituyen por un dato reconocible por Python que es ignorado en este proceso. A esta tarea se le reconoce en inglés como tokenizing a string. En la línea 8 se crea un diccionario vacío.

Las llaves del diccionario son las palabras únicas, y sus valores son las veces que esta llave se repite.

```python
"""Conteo de palabras"""

cuento=('cuenta un cuento que una princesa se la pasa '
'cuenta que cuenta ese cuento llamado la princesa '
'que cuenta')

palabras_contadas={}

# para contar las palabras que no se repiten
for palabra in cuento.split():
    if palabra in palabras_contadas:
        palabras_contadas[palabra] +=1
    else:
        palabras_contadas[palabra]=1

print(f'{"PALABRA":<12} REPETICIONES')

for palabra,veces in sorted(palabras_contadas.items()):
	print(f'{palabra:<12}{veces}')

print('\nNúmero de palabras únicas en el texto:',len(palabras_contadas))

#OUTPUT:
#PALABRA      REPETICIONES
#cuenta      4
#cuento      2
#ese         1
#la          2
#llamado     1
#pasa        1
#princesa    2
#que         3
#se          1
#un          1
#una         1
#
#Número de palabras únicas en el texto: 11
```

### `split`

Con el método `split`, el cual separa las palabras utilizando como argumento delimitador una palabra, si no se escribe ningún argumento, split usa por default, un espacio en blanco. El método regresa una lista de tokens para cada palabra.

### `Counter`

```python
from collections import Counter
cuento=('cuenta un cuento que una princesa se la pasa '
	'cuenta que cuenta ese cuento llamado la princesa '
	'que cuenta')

contador=Counter(cuento.split())

for palabra,veces in sorted(contador.items()):
	print(f'{palabra:<12}{veces}')

#OUTPUT:
#cuenta      4
#cuento      2
#ese         1
#la          2
#llamado     1
#pasa        1
#princesa    2
#que         3
#se          1
#un          1
#una         1

print('\nNúmero de palabras únicas en el texto:',len(-
contador.keys()))
#OUTPUT:
#Número de palabras únicas en el texto: 11
```

## Actualizar diccionario

```python
usuario_id={}
```

Esto genera un diccionario vacío, al cual le añadiremos el nombre y nickname de un usuario.

```python
usuario_id.update({'Laura':'lau'})

usuario_id
#{'Laura': 'lau'}
```

Esta misma tarea se puede realizar utilizando automáticamente el nombre como un parámetro asociado con su respectivo valor:

```python
usuario_id.update({'Daniel':'dani'})

usuario_id
#{'Laura': 'lau', 'Daniel': 'dani'}
```

## Corregir los valores asignados a las llaves

```python
usuario_id.update({'Daniel':'dan'})

usuario_id
#{'Laura': 'lau', 'Daniel': 'dan'}
```

# Comprensión de diccionarios

La comprensión de diccionarios, como la comprensión de listas, proporciona una notación más compacta para generar diccionarios, además de mapear diccionarios en diccionarios. Como el siguiente ejemplo en donde se intercambian llaves y valores

```python
usuario_edad={'Laura':28,'Daniel':31,'Alberto':27,
'Rogelio':65}
edad_usuario={edad:usuario for usuario,edad in usuario_edad.items()}

edad_usuario
#{28: 'Laura', 31: 'Daniel', 27: 'Alberto', 65: 'Rogelio'}
```

Como en los diccionarios, la comprensión de diccionarios está delimitada por los símbolos de agrupación `{}`. En esta comprensión se iteran los pares usuario-edad a través de `usuario_edad`. 

`items()` para signarle la llave y el valor a un nuevo diccionario con pares `edad-usuario`.

```python
ventas_agentes= {'Laura': [12000, 10500, 9800, 11100],
 'Daniel': [11000, 7800, 7200, 6500],
 'Alberto': [11200, 9500, 10800, 10100]}
[5]: ventas_promedio={k:sum(v)/len(v) for k,v in ventas_agentes.items()}
[6]: ventas_promedio
[6]: {'Laura': 10850.0, 'Daniel': 8125.0, 'Alberto': 10400.0}
```

# Conjuntos (Sets)

Un conjunto es una `colección no ordenada` de valores únicos. Los conjuntos pueden contener objetos no mutables como cadenas, enteros, números de tipo flotante y tuplas que contienen elementos no mutables.

Aunque los `conjuntos son iterables`, no es posible indexar sus elementos y como consecuencia no es posible obtener partes de un conjunto como en el caso de las listas.

```python
animales={'gato','ratón','perro','garza','perico','perro','pato'}

animales
#OUTPUT
#{'garza', 'gato', 'pato', 'perico', 'perro', 'ratón'}
```

> Se observa que  en el OUTPUT, el elemento 'perro' está escrito dos veces, pero al solicitar los elementos del conjunto, solo aparece una vez. Recuerda que los elementos del conjunto son únicos, por lo que no admiten duplicidades de elementos.
> 

## Cantidad de elementos en el conjunto

```python
len(animales)
#6
```

## Verificar si algún elemento está incluido en el conjunto

```python
'perro' in animales
#True
'gallo' in animales
#False
'gallo' not in animales
#True
```

## Conjuntos iterables

```python
for animal in animales:
	print(animal.upper(),end=' ')
#PERICO GATO GARZA PERRO RATÓN PATO
```

Los conjuntos son colecciones no ordenadas de elementos, por lo que el orden, en este caso, es irrelevante.

## `set`

Es posible crear un conjunto, a partir de otras colecciones de valores utilizando la función `set`.

```python
pares=list(range(0,15,2))+list(range(8,29,2))

pares
#[0, 2, 4, 6, 8, 10, 12, 14, 8, 10, 12, 14, 16, 18, 20]

set(pares)
#{0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20}
```

>💡 Observa que se eliminan los elementos repetidos cuando se usa `set`.



```python
pares2=list(range(0,28,2))

pares2
#[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]

set(pares) == set(pares2)
#False
```

>💡 El operador `==` verifica si los conjuntos son exactamente iguales. Si lo son, la expresión es evaluada como verdadera, si no lo son, será falsa. Otras formas de comparar conjuntos.



```python
set(pares) > set(pares2)
#False

set(pares) < set(pares2)
#True
```

>💡 Los operadores `>`, `<` verifican si un conjunto es subconjunto propio del otro. Es decir, para dos conjuntos A, B, diremos que A es un subconjunto propio de B, en código: `A< B`, si todos los elementos de A están en B, pero existe al menos un elemento en B que no está en A.



## `issubset`

Para verificar si un conjunto es subconjunto propio de otro

```python
{2,5,8}.issubset({5,9,8,2})
#True
```

> A es un `superconjunto` propio de B, y en código lo denotaremos como `A>B`, si todos los elementos de B están en A, pero existe al menos un elemento en A que no está en B
> 

```python
{2,4,6,8}>{4,8,6,2}
#False

{5,9,8,2}>{2,5,8}
#True
```

## Superconjunto impropio

```python
{2,4,6,8}>={4,8,6,2}
#True

{2,4,6,8,10}>{4,8,6,2}
#True

{2,8}>{4,8,6,2}
#False
```

# Operaciones con conjuntos

## Unión de conjuntos

### `union`

La unión de dos conjuntos, es un conjunto que tiene los elementos únicos de ambos conjuntos. Esta operación es posible con el operador &, o escribiendo el método tipo `union`.

```python
{'Laura','Daniel'} | {'Rogelio','Eva','Laura'}
#{'Daniel', 'Eva', 'Laura', 'Rogelio'}

{2,4,6,8}|{1,4,6,8,9}
#{1, 2, 4, 6, 8, 9}

{2,4,6}.union([1,2,3,4,5])
#{1, 2, 3, 4, 5, 6}
```

## Intersección de conjuntos

La intersección de dos conjuntos, es el conjunto que contiene a los elementos únicos, que tienen en común los dos conjuntos. Esta operación es posible con el operador &, o escribiendo el método
tipo `intersection`.

```python
{'Laura','Daniel'} & {'Rogelio','Eva','Laura'}
#{'Laura'}

{2,4,6,8}&{1,4,6,8,9}
#{4, 6, 8}

{1,3}&{2,4,6}
#set()
#⬆️No hay intersección por lo que Python regresa un conjunto vacío
```

```python
{2,4,6}.intersection([1,2,3,4,5])
#{2, 4}
```

## Diferencia de conjuntos

La diferencia entre dos conjuntos A, B, se denota A-B y se define como el conjunto cuyos elementos están en A pero no están en B

```python
{'Laura','Daniel'} - {'Rogelio','Eva','Laura'}
#{'Daniel'}

{2,4,6,8} - {1,4,6,8,9}
#{2}

{1,3} - {2,4,6}
#{1,3}

{2,4,6}.difference([1,2,3,4,5])
#{6}
```

## Diferencia simétrica de conjuntos

La diferencia simétrica entre dos conjuntos A, B, se denota A^B y se define como el conjunto formado por lo elementos que están en A, o en B, pero no en ambos a la vez.

```python
{'Laura','Daniel'} ^ {'Rogelio','Eva','Laura'}
#{'Daniel','Rogelio','Eva'}

{2,4,6,8} - {1,4,6,8,9}
#{1,2,9}

{1,3} - {2,4,6}
#{1,2,3,4,6}

{2,4,6}.symmetric_difference([1,2,3,4,5])
#{1,3,5,6}
```

## Conjuntos disjuntos

### `isdisjoint`

Dos conjuntos son disjuntos si no tienen elementos en común. Puedes verificar si dos conjuntos son disjuntos utilizando el método tipo `isdisjoint`.

```python
{1,3}.isdisjoint({2,4,6})
#True

{1,2,3}.isdisjoint({2,4,6})
#False
```

```python
numeros = {2,4,6}
impares = {3,5,7}
numeros |= impares #operador unión seguido de =

numeros
#{2, 3, 4, 5, 6, 7}
```

### `update`

El método tipo `update` se  usa cuando quieres realizar la operación unión con un conjunto.

```python
numeros.update(range(5,10))
numeros
#{2, 3, 4, 5, 6, 7, 8, 9}
```

### `add`

El método tipo `add` permite añadir elementos al conjunto. Si el argumento no está presente en el conjunto, lo añade. Si está, el conjunto no se modifica.

```python
numeros.add(11)
numeros.add(7)

numeros
#{2, 3, 4, 5, 6, 7, 8, 9, 11}
```

### `remove`

El método `remove`, quita el elemento que este en el argumento. Si este elemento no se encuentra en el conjunto, se produce un error tipo `KeyError`.

```python
numeros.remove(9)

numeros
#{2, 3, 4, 5, 6, 7, 8, 11}
```

### `discard`

El método `discard` también puede quitar elementos al conjunto, pero no provoca un error si el elemento no se encuentra presente.

```python
numeros.discard(9)

numeros
#{2, 3, 4, 5, 6, 7, 8, 11}
```

### `clear`

Este método deja vacío al conjunto que se está invocando.

```python
numeros.clear()

numeros
#set()
```