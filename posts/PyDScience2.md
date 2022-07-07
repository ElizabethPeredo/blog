---
title: 'Capítulo 2. Introducción a la programación con Python'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---

# Capítulo2. Introducción a la programación con Python.

# Operadores Aritméticos

| Símbolo | Expresión Algebraica | Expresión en Python | Ejemplo |
| --- | --- | --- | --- |
| Suma | + | a+b | a+b |
| Resta | - | a-b | a-b |
| Multiplicación | * | a * b| a*b |
| División | / | a/b | a/b |
| División parte entera | // | [ a/b ] | a//b |
| Módulo | % | a mod b | a%b |
| Exponente | ** | a^2 | a**b |

```bash
3/0
ZeroDivisionError Traceback (most recent call last)
<ipython-input-1-f6cc6d14333b> in <module>
----> 1 3/0
ZeroDivisionError: division by zero
```

## Prioridad que tienen las Operaciones

1. Paréntesis: ( )

2. Exponente: **

3. Multiplicación, División, División entera, Módulo: *, /, //, %

4. Suma, Resta: +, −

```bash
In[1]: 1+2**4%5
Out[1]: 2

# 2**4 ≡ 2^4 = 16
# 16%5 ≡ 16 mod5 = 1
# 1 + 1 = 2
```

# Función print, arreglos con comillas simples y dobles comillas

```python
print(“Hoy aprenderé a usar la función ‘print’”)
#OUTPUT: 
#Hoy aprenderé a usar la función ‘print’
```

```python
print(‘También aprenderé a dividir \
...: líneas de texto cuando las expresiones \
...: sean demasiado largas’)
#OUTPUT: 
#También aprenderé a dividir líneas de texto cuando las ex-presiones sean demasiado largas
```

```python
print(‘Hoy aprenderé\n a usar\n la función print’)
#OUTPUT: 
#Hoy aprenderé 
#a usar 
#la función print
```

```python
print(“““Aprender ‘Python’ es realmente “sencillo” ”””)
#Aprender ‘Python’ es realmente “sencillo”
```

<table>
<thead>
<tr>
<th></th>
<th>Descripción</th>
<th>Ejemplo</th>
</tr>		
</thead>

<tbody>
<tr>
<th>
\n
</th>
<td>Insertar un salto de línea</td>
<td>

```
print(’Linea1 1\n Linea 2’)
#OUTPUT
Linea 1
Line 2
</td>
</tr>
<tr>
```

<th>
\\
</th>
<td>Inserta una diagonal invertida (backslash)</td>
<td>

```
print(’\\’)
#OUTPUT /
```

</td>
</tr>
<tr id="6364bbde-5bed-42a0-83d0-077c59e8c217">
<th>\’</th>
<td>Inserta una comilla sencilla</td>
<td>

```
print(’\’’)
#OUTPUT’
```

</td>
</tr>
<tr id="91f8814a-f257-48e1-bcde-801fe3d717df">
<th>\”</th>
<td>Inserta una comilla doble</td>
<td>

```
print(’\”’)
#OUTPUT”
```

</td>
</tr>
<tr>
<th>\t</th>
<td>Inserta un espacio (tab) horizontal</td>
<td>

```
print(’Linea1 1\n Linea 2’)

#OUTPUT
Linea 1 Line 2
```

</td>
</tr>
</tbody>
</table>

# Input

En algunas situaciones es necesario que el usuario ingrese algún dato, por ejemplo: la edad, la es-tatura, el nombre, el número telefónico, etc. Aquí la función clave es input, que solicita al usuario la información específica que debe ingresar al programa

```python
In[1]: nombre=input(‘¿Cuál es tu nombre? ’)
¿Cuál es tu nombre? Juan
In[2]: nombre
Out[2]: ‘Juan’
In[3]: print(nombre)Juan
```

```python
In[1]: n1=int(input(‘Ingresa el primer número, de dos, para sumarlos ’))
Ingresa el primer número, de dos, para sumarlos 9

In[2]: n2=int(input(‘Ingresa el segundo número ’))
Ingresa el segundo número 2

In[3]: n1+n2
Out[3]: 11
```

# Declaraciones condicionales con If

```python
1    # ejemplo1_c2.py
2    ”””Comparación de enteros mediante sentencias If.”””
3
4    print('Ingresa tu edad y la de tu mejor amigo,\       para decirte la relación qué hay entre ellas ')
5    #Lee la primera edad 
6    edad1=int(input('Ingresa tu edad: '))
7
8    #Lee la segunda edad
9    edad2=int(input('Ingresa la edad de tu mejor amigo: '))
10
11   if edad1==edad2:
12      print(edad1,'es igual',edad2,'\n Tu amigo y tú, \       tienen la misma edad.')
13
14   if edad1 !=edad2:
15      print(edad1,' es diferente de',edad2,'\n Tu amigo y tú \       tienen edades diferentes.')
16
17   if edad1 < edad2:
18      print(edad1,' es menor que',edad2,'\n Tu amigo        es mayor que tú.')
19
20   if edad1 > edad2:
21      print(edad1,' es mayor que',edad2,'\n Tu amigo \       es menor que tú.')
22
23   if edad1 <= edad2:
24      print(edad1,' es menor o igual a',edad2,'\n Tu amigo \       tiene al menos, tu edad.')
25
26   if edad1 > edad2
27      print(edad1,' es mayor que',edad2,'\n Tu amigo \       tiene a lo más, tu edad.')

#OUTPUT
#Ingresa tu edad y la de tu mejor amigo para decirte la relación qué hay entre ellas
#Ingresa tu edad: 25
#Ingresa la edad de tu mejor amigo:27
#25 es diferente de 27 Tu amigo y tú tienen edades diferentes.
#25 es menor que 27 Tu amigo es mayor que tú.
#25 es menor o igual a 27 Tu amigo tiene al menos, tu edad
```

# Operadores y prioridad

![](/img/PyDS/C2/Untitled.png)

## Valor Máximo de un conjunto de datos

```python
”””Determina el valor máximo de cuatro números”””

no1=float(input(‘Ingresa el primer número: ’))
no2=float(input(‘Ingresa el segundo número: ’))
no3=float(input(‘Ingresa el tercer número: ’))
no4=float(input(‘Ingresa el cuarto número: ’))

maximo=no1
if no2>maximo:
	maximo=no2

if no3>máximo:
	maximo=n3

if no4>máximo:
	maximo=n4

print(‘El valor máximo es’, maximo)

#OUTPUT
#Ingresa el primer número 15
#Ingresa el segundo número 1
#Ingresa el tercer número 5
#Ingresa el cuarto número -10
#El valor máximo es 15.0
```