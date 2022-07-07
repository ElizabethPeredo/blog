---
title: 'Capítulo 11. Recursiones, iteraciones, búsqueda y ordenamiento'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 11. Recursiones, iteraciones, búsqueda y ordenamiento.

# 1. Algoritmos Recursivos e Iterativos

## Ejemplo 1

La sucesión de Fibonacci

![Untitled](/img/PyDS/C11/Untitled.png)

```python
def Fibonacci(n):
	if n in (0,1):
		return n
	else:
		return Fibonacci(n-1)+Fibonacci(n-2)
for n in range (31):
	print(f'k({n})={Fibonacci(n)}')

'''OUTPUT:
k(0)=0
k(1)=1
k(2)=1
k(3)=2
k(4)=3
k(5)=5
k(6)=8
k(7)=13
k(8)=21
...
k(27)=196418
k(28)=317811
k(29)=514229
k(30)=832040
'''
```

## Ejemplo 2

Series geométricas.

Las series geométricas finitas, son una suma de potencias de un número r, que pueden estar multiplicadas por otro número a. Estas series (sumas) tienen la forma

$$
a+ar+ar^2 +ar^3 +…+ar^{n−1} = a(1+r+r^2+r^3+…+r^{n−1})
$$

Esta serie se puede ver de una forma recursiva. Utilizaremos la variable s en lugar de k (por aquello de las sumas). Los elementos de la sucesión se describen de la siguiente manera

$$
s_1 = a\\
s_{2} = a + ar = s_1 + ar\\
s_3 = a + ar + ar^2 = s_2 + ar^2\\
s_4 = a+ar+ar^2 +ar^3 =s_3 +ar^3\\
$$

Entonces, para cualquier número natural n,

$$
⁍
$$

El siguiente ejemplo es la construcción de una serie geométrica con a=3, r=1/2 y n=20

```python
a=3
r=1/2
def serie_geom(n):
	if n == 0: 
		return n
	else:
		return serie_geom (n - 1) + a * r ** (n - 1)

for n in range (1, 21):
    print(f's({n})={serie_geom (n)}')

'''OUTPUT:
s(1)=3.0
s(2)=4.5
s(3)=5.25
s(4)=5.625
s(5)=5.8125
s(6)=5.90625
s(7)=5.953125
s(8)=5.9765625
s(9)=5.98828125
s(10)=5.994140625
s(11)=5.9970703125
s(12)=5.99853515625
s(13)=5.999267578125
s(14)=5.9996337890625
s(15)=5.99981689453125
s(16)=5.999908447265625
s(17)=5.9999542236328125
s(18)=5.999977111816406
s(19)=5.999988555908203
s(20)=5.999994277954102
'''
```

Con los valores asignados, la suma es:

$$
3(1+½+(½)^2+(½)^3+...+(½)^19)=5.999994277954102
$$

## Ejemplo 3

Número factorial

$$
n! = n(n−1)(n−2)(n−3)...(3)(2)(1) 
$$

$$
1! = 1\\
2! = (2)(1) = 2\\
3! = (3)(2)(1) = 6\\
4! = (4)(3)(2)(1) = 24 
$$

$$
1! = 1\\
2! = (2)1! = 2\\
3! = (3)2! = 6\\
4! = (4)3! = 24
$$

$$
n! = n(n−1)!
$$

```python
def factorial(n): 
    if n<=1:
        return 1
    return n*factorial(n-1)

for i in range(1,21): print(f'{i}!={factorial(i)}')

'''
1!=1
2!=2
3!=6
4!=24
5!=120
6!=720
┆
17!=355687428096000
18!=6402373705728000
19!=121645100408832000
20!=2432902008176640000
'''
```

```python
def Fibonacci_iterativo(n): 
    suma=0
    aux=1
	
    for j in range(0,n):
        aux, suma=suma, suma+aux 
    return suma

print(Fibonacci_iterativo(7))
#13
```

$$
Cuando j = 0, aux = 1, suma = 0, suma + aux = 1\\
Cuando j = 1, aux = 0, suma = 1, suma + aux = 1\\
Cuando j = 2, aux = 1, suma = 1, suma + aux = 2\\
Cuando j = 3, aux = 1, suma = 2, suma + aux = 3 
$$

```python
factorial=1
for n in range(20,1,-1):
	factorial *= n

print(factorial)
#2432902008176640000
```

# 2. Búsqueda

Este método es llamado de búsqueda lineal, y se presenta a continuación:

```python
def busqueda_lineal(datos, dato_buscar):
	for indice, valor in enumerate (datos):
		if valor == dato_buscar: return indice
	return -1
datos = [1.70, 1.65, 1.58, 1.81, 1.84, 1.78, 1.68, 1.72]
print('El número que buscas tiene índice:',busqueda_lineal(datos, 1.81))

#El número que buscas tiene índice: 3
```

> Este programa revisa cada valor de la lista, si lo encuentra, regresa el índice de  la lista donde se encuentra el valor. Si no lo encuentra regresa -1.
> 

## Implementación de la búsqueda binaria

```python
"""Implementación de la búsqueda binaria"""
import numpy as np
datos = [1.70, 1.65, 1.58, 1.81, 1.84, 1.78, 1.68, 1.72]
def busqueda_binaria(datos, dato_buscar):
    bajo = 0
    alto = len (datos) - 1
    medio = (bajo + alto + 1) // 2
    localizacion=-1
    
    while bajo <= alto and localizacion == -1:
        print (elementos_restantes (datos, bajo, alto))
        print (' ' * medio, end='')
        print (' * ')

    if dato_buscar == datos[medio]:
        localizacion = medio
    elif dato_buscar < datos[medio]:
        alto = medio - 1
    else:
        bajo = medio + 1

    medio = (bajo + alto + 1) // 2
    return localizacion

def elementos_restantes(datos, bajo, alto):
	return ' ' * bajo + ' '.join (str (s) for s in datos[bajo:alto + 1])

def main():
    datos = np.random.randint (10, 91, 15)
    datos.sort ()
    print (datos, '\n')
    buscar_key = int (input ('Ingresa un valor entero (-1 para salir): '))

    while buscar_key != -1:
        localizacion = busqueda_binaria (datos, buscar_key)
        if localizacion == -1:
            print (f'{buscar_key} no se encuentra\n')
        else:
            print (f'{buscar_key} está en la posición {localizacion}\n')
        buscar_key = int (input ('Ingresa un valor entero (-1 para salir): '))

if __name__ == '__main__':
	main ()

'''
[13 28 30 44 47 48 50 57 70 78 81 81 82 86 88]
'''
```

> Este programa genera un arreglo con 1,048,575
elementos $(2^{20} − 1)$, en el peor de los casos, requiere de un máximo de 20 comparaciones para encontrar el valor de búsqueda. Esta es la gran diferencia entre la eficiencia del algoritmo de búsqueda lineal y el de búsqueda binaria.
> 

# 3. Ordenamiento

```python
import numpy as np

def ordenamiento_inser(datos):
    for n in range (1, len (datos)):
        insertar = datos[n]
        mover_dato = n

    while mover_dato > 0 and datos[mover_dato - 1] > insertar:
        datos[mover_dato] = datos[mover_dato - 1]
        mover_dato -= 1
        datos[mover_dato] = insertar

datos = np.array ([1.85, 1.70, 1.58, 1.83, 1.80, 1.75, 1.70,
1.90, 1.65]) 
print (f'Arreglo sin orden: {datos}\n')
#Arreglo sin orden: [1.85 1.7 1.58 1.83 1.8 1.75 1.7 1.9 1.65]

ordenamiento_inser (datos)
print (f'\nArreglo ordenado: {datos}\n')
#Arreglo ordenado: [1.58 1.65 1.7 1.7 1.75 1.8 1.83 1.85 1.9 ]
def ordenamiento_sel(datos):
 for indice1 in range(len(datos) - 1):
    peque = indice1
    for indice2 in range(indice1 + 1, len(datos)):
        if datos[indice2] < datos[peque]:
            peque = indice2
            datos[peque], datos[indice1] = datos[indice1], datos[peque]

datos = np.array ([1.85, 1.70, 1.58, 1.83, 1.80, 1.75, 1.70,
1.90, 1.65])

print (f'Arreglo sin orden: {datos}\n')
#Arreglo sin orden: [1.85 1.7 1.58 1.83 1.8 1.75 1.7 1.9 1.65]

ordenamiento_sel (datos)
print (f'\nArreglo ordenado: {datos}\n')
#Arreglo ordenado: [1.58 1.65 1.7 1.7 1.75 1.8 1.83 1.85 1.9 ]
```

## Ordenamiento por inserción

```python
import numpy as np

def ordenamiento_inser(datos):
    for n in range (1, len (datos)):
        insertar = datos[n]
        mover_dato = n

    while mover_dato > 0 and datos[mover_dato - 1] > insertar:
        datos[mover_dato] = datos[mover_dato - 1]
        mover_dato -= 1
        datos[mover_dato] = insertar

datos = np.array ([1.85, 1.70, 1.58, 1.83, 1.80, 1.75, 1.70, 1.90, 1.65]) 
print (f'Arreglo sin orden: {datos}\n')
#Arreglo sin orden: [1.85 1.7 1.58 1.83 1.8 1.75 1.7 1.9 1.65]

ordenamiento_inser (datos)import numpy as np
datos = np.array ([1.85, 1.70, 1.58, 1.83, 1.80, 1.75, 1.70, 1.90, 1.65]) 

def ordenamiento_mezcla(datos):
	arreglo_ordenado (datos, 0, len (datos) - 1)

def arreglo_ordenado(datos, bajo, alto):
    if (alto - bajo) >= 1:
        medio1 = (bajo + alto) // 2 
        medio2 = medio1 + 1
    
def mezcla(datos, izq, medio1, medio2, der): 
    izq_indice = izq
    der_indice = medio2
    indice_combinado = izq
    mezclado = [0] * len (datos)

    print (f'mezcla: {subarreglo (datos, izq, medio1)}')
    print (f' {subarreglo (datos, medio2, der)}')

    while izq_indice <= medio1 and der_indice <= der: 
        if datos[izq_indice] <= datos[der_indice]:
            mezclado[indice_combinado] = datos[izq_indice]
            indice_combinado += 1
            izq_indice += 1
        else:
            mezclado[indice_combinado] = datos[der_indice]
            indice_combinado += 1
            der_indice += 1

        if izq_indice == medio2:
            mezclado[indice_combinado:der+1]= datos[der_indice:der+1]
        else:
            mezclado[indice_combinado:der +1]= datos[izq_indice:medio1+1]

    datos[izq:der+1] = mezclado[izq:der+1]
    print (f' {subarreglo (datos, izq, der)}\n')

def subarreglo(datos, bajo, alto):
    temporal = ' ' * bajo
    temporal += ' '.join (str (item) for item in datos[bajo:alto+1])
    return temporal

datos = np.array ([1.85, 1.70, 1.58, 1.83, 1.80, 1.75,1.70, 1.90, 1.65])
print (f' Arreglo sin orden: {datos}\n')
print (f'\nArreglo ordenado: {datos}\n')
#Arreglo ordenado: [1.58 1.65 1.7 1.7 1.75 1.8 1.83 1.85 1.9 ]
```

## Ordenamiento por mezcla

Este procedimiento es más complejo, ya que, si la lista tiene más elementos, cada subarreglo se dividiría otros arreglos más
pequeños hasta llegar a subarreglos de tamaño 2, para luego comenzar a mezclarse con los otros subarreglos.

```python
import numpy as np

def ordenamiento_mezcla(datos):
	arreglo_ordenado (datos, 0, len (datos) - 1)

def arreglo_ordenado(datos, bajo, alto):
"""Split datos, sort subarrays and mezcla them into sorted array."""
	if (alto - bajo) >= 1:
		medio1 = (bajo + alto) // 2 medio2 = medio1 + 1

# output split step
print (f'split:
print (f'
print (f'
{subarreglo (datos, bajo, alto)}')
{subarreglo (datos, bajo, medio1)}')
{subarreglo (datos, medio2, alto)}\n')
 arreglo_ordenado (datos, bajo, medio1)
 arreglo_ordenado (datos, medio2, alto)

mezcla (datos, bajo, medio1, medio2, alto)

def mezcla(datos, izq, medio1, medio2, der): izq_indice = izq
der_indice = medio2
indice_combinado = izq
mezclado = [0] * len (datos)

print (f'mezcla: {subarreglo (datos, izq, medio1)}')
print (f' {subarreglo (datos, medio2, der)}')

	while izq_indice <= medio1 and der_indice <= der: if datos[izq_indice] <= datos[der_indice]:
		mezclado[indice_combinado] = datos[izq_indice] indice_combinado += 1
		izq_indice += 1
	else:
		mezclado[indice_combinado] = datos[der_indice] indice_combinado += 1
		der_indice += 1

	if izq_indice == medio2:
		mezclado[indice_combinado:der+1]= datos[der_indice:der+1]
	else:
		mezclado[indice_combinado:der +1]= datos[izq_indice:medio1+1]

	datos[izq:der+1] = mezclado[izq:der+1]
	print (f' {subarreglo (datos, izq, der)}\n')

def subarreglo(datos, bajo, alto):
	temporal = ' ' * bajo
	temporal += ' '.join (str (item) for item in datos[bajo:alto+1]) return temporal

'''
Arreglo sin orden: [1.85 1.7 1.58 1.83 1.8 1.75 1.7 1.9 1.65]
'''
```

- Los métodos de ordenamiento por selección y por inserción realizan operaciones y tiempos similares, por lo que también su eficiencia es similar.
- Comparados con el método de ordenamiento por mezclas quedan en amplia desventaja, cuando la cantidad de elementos por ordenar es grande.