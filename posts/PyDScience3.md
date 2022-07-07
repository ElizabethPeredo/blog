---
title: 'Capítulo 3. Control y desarrollo de programas con Phyton'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 3. Control y desarrollo de programas con Phyton.

> 
# 1. Pseudocódigo

> El pseudocódigo es el empleo de un lenguaje cotidiano para plantear la estrategia que debe emplearse para resolver un problema. Como el nombre lo dice, es un código falso, pero representa el puente perfecto, para llegar al punto de iniciar a programar


# 2. Sentencias de Control

> Cuando las sentencias en un programa se ejecutan en el orden en que se escriben, se dice que el programa realiza una ejecución secuencial. Existen algunas sentencias en Python que especifican que tarea se debe ejecutar, ya que no específicamente debe ser la siguiente que está escrita. A esto se le llama transferencia de control y están establecidas por las sentencias de control de Python.


![Untitled](/img/PyDS/C3/Untitled.png)

# 3. Sentencias de decisión y repetición

Para tomar decisiones, Python tiene tres tipos de sentencias que ejecutan el código de acuerdo a
una condición que puede ser evaluada como falsa o verdadera.

> 📌 **Sentencia if**
Esta sentencia realiza una acción, cuando la condición es verdadera; y la ignora, cuando es falsa.

> 📌 **Sentencia if…else**
Esta sentencia realiza una acción, cuando la condición es verdadera; y realiza la otra acción
cuando es falsa.

> 📌 **Sentencia if…elif…else**
Esta sentencia realiza una de diferentes acciones dependiendo como hayan sido calificadas
las otras condiciones.

Para aquellos problemas que requieren algún proceso iterativo, Python con dos sentencias de repetición

> 📌 **Sentencia while**
Esta sentencia indica que la acción se repite mientras que la condición se mantenga como verdadera.

> 📌 **Sentencia for**
Esta sentencia permite repetirla acción para cada elemento en un conjunto de elementos. Útil
para realiza una acción, cuando la condición es verdadera; y realiza la otra acción cuando es falsa.


## 3.1. Sentencia if

> ✅ El usuario proporciona su año de nacimiento
La cantidad debe leerse como un entero
Si la variable 2021 – año de nacimiento, es mayor o igual a 25, el programa debe mostrar: Posible cliente


![Untitled](/img/PyDS/C3/Untitled%201.png)

## 3.2. Sentencias if…else, if…elif…else

La sentencia if…else realiza dos diferentes tipos acciones, y el resultado depende si la condición es evaluada como verdadera o como falsa.

```python
nac=1985
if 2021-nac > = 25:
	print('Posible cliente')
else:
	print('No es candidato')

#Posible cliente
```

```python
nac=1999
if 2021-nac > = 25:
	print('Posible cliente')
else:
	print('No es candidato')

#No es candidato
```

![Untitled](/img/PyDS/C3/Untitled%202.png)

Cuando la sentencia es evaluada como verdadera la acción print(‘Posible cliente’) se ejecuta. En otro caso (si es falsa), el programa ejecuta print(‘No es candidato’).

```python
nac=1999
edad=2021-nac
if edad > = 25:
	cliente='Si'
else:
	cliente='No'

cliente
#'Si'
```

**Un pseudocódigo clasificar niños, adolescentes, jóvenes, adultos y adultos mayores es:**

> 💡 `Si la edad de la persona es mayor o igual a 60
Mostrar: Adulto Mayor
Si la edad de la persona es mayor o igual a 27
Mostrar: Adulto
Si la edad de la persona es mayor o igual a 18
Mostrar: Joven
Si la edad de la persona es mayor o igual a 12
Mostrar: Adolescente
En otro caso,
Mostrar: Infante`


```python
edad=24
if edad > = 60:
	print('Adulto mayor')
elif edad > = 27:
	print('Adulto')
elif edad > = 18:
	print('Joven')
elif edad > = 12:
	print('Adolescente')
else:
	print('Infante')

Joven
```

![Untitled](/img/PyDS/C3/Untitled%203.png)

## 3.3. Sentencia While

La sentencia while permite realiza una acción mientras que una condición se mantenga como verdadera.

> 💡 Iniciar con potencia=4
Mientras que potencia sea menor o igual a 817
Potencia=potencia*4


```python
potencia=4
while potencia < = 817:
	potencia = potencia * 4

potencia
#OUTPUT:
#1024
```

**En este caso :**

a. El procedimiento inicia con un valor inicial potencia=4, al entrar al lazo, la sentencia evalúa la condición: potencia < =817 (verdadera) y asigna a la nueva variable potencia, el valor de potencia almacenado multiplicado por cuatro, esto es 4^2. Ahora potencia = 4^2=16.

b. Con el valor de potencia =16, la sentencia evalúa la condición: potencia < =817 (verdadera) y asigna a la nueva variable potencia, el valor de potencia almacenado multiplicado por cuatro, esto es 4^3. Ahora potencia = 4^3=64.

c. Este ciclo se repite hasta que la condición potencia < =817 sea falsa.

![Untitled](/img/PyDS/C3/Untitled%204.png)

## 3.4. Sentencia for

Como en el caso de while, for repite una o varias acciones. La sentencia for realiza la acción para cada elemento en una sucesión de elementos. Tal sucesión de elementos puede ser una lista de valores, que no necesariamente debe estar ordenada o pueden ser caracteres, ya que una palabra es una lista de caracteres.

```python
for caracter in 'Palabra':
	print(caracter, end=' ')

#OUTPUT:
#P a l a b r a
```

1. En el snippet [1] la sentencia for asigna la letra P del arreglo Palabra y se lo asigna a la variable caracter.
2. Enseguida, muestra el caracter P seguido de dos espacios
3. El siguiente paso es asignar la letra a la variable caracter,
4. Enseguida, muestra el caracter a seguido de dos espacios
5. Esto continua con cada uno de los elementos (caracteres) del arreglo Palabra.

![Untitled](/img/PyDS/C3/Untitled%205.png)

```python
fact=1
for nmro in [1,2,3,4,5]:
	fact=fact*nmro
fact

#OUTPUT:
#120
```

### Ejemplo 1:

A una pequeña tienda de autoservicio entran 8 personas a consumir diversos productos. La siguiente lista describe los consumos (en pesos) realizados por los clientes

[130,85,210,45,153,78.5,264.5,94]

Elabora un programa que calcule el consumo promedio realizada por estos clientes.

```python
# ejemplo1_c3.py
'''Uso de la sentencia for para calcular el consumo promedio'''

#Fase inicial
suma_tot=0
contador_clientes=0
consumos=[130,85,210,45,153,78.5,264.5,94]

#Fase de ejecución
for consumo in consumos:
	suma_tot += consumo
	contador_clientes += 1

#Fase final
consumo_prom=suma_tot/contador_clientes
print(f'El consumo promedio es de {consumo_prom}')

#OUTPUT:
#El consumo promedio es de 132.5
```

> 💡 El formato de cadena (formatted string o f-string),
cuya función es la de cambiar el valor numérico del promedio en una cadena de caracteres


### Ejemplo 2:

Supongamos que ahora en la tienda solicitan el gasto promedio de los clientes que ingresan en un lapso de 4 horas. Así, ya no es posible dejar fija la lista pues el número de clientes puede ser grande, pequeño, pero incluso, puede ser cero.

Cuando esto ocurre es posible utilizar un valor especial, al que llamaremos valor centinela. Este valor tiene el propósito de indicarle al programa que no habrá más datos de ingreso. Cuando se implementa
esta estrategia el programa seguirá solicitando datos hasta que sea introducido el valor centinela.

Un valor centinela no debe tener las mismas características de los datos de ingreso. Para nuestro ejemplo, una posibilidad es seleccionar el valor -1 o cualquier otro valor negativo.

```python
'''Uso de la sentencia for con centinela para el consumo promedio'''

#Fase inicial
suma_tot = 0
contador_clientes = 0

#Fase de ejecución
consumo = float(input('Ingresa el consumo, -1 para finalizar: '))

while consumo != -1:
	suma_tot += consumo
	contador_clientes += 1
	consumo = float(input('Ingresa el consumo, -1 para finalizar: '))

#Fase final
if consumo != 0:
	consumo_prom=suma_tot/contador_clientes
	print(f'La venta promedio es de {consumo_prom:.2f}')
else:
	print('No hubo consumidores')

#OUTPUT:
#Ingresa el consumo, -1 para finalizar: 598
#Ingresa el consumo, -1 para finalizar: 365
#Ingresa el consumo, -1 para finalizar: 1000
#Ingresa el consumo, -1 para finalizar: 100
#Ingresa el consumo, -1 para finalizar: 400
#Ingresa el consumo, -1 para finalizar: 365
#Ingresa el consumo, -1 para finalizar: -1
#La venta promedio es de 471.33
```

> 💡 **:.2f**
Tiene como finalidad mostrar el resultado con dos
cifras decimales significativas.


### Ejemplo 3:

En una tienda de autoservicio hay un promotor en la sección de productos lácteos. La empresa para la que trabaja, le otorga un premio económico si rebasa $200 de ventas (venta meta) por cliente. 

La empresa cuenta con un registro en donde están marcadas las ventas de 8 clientes que adquirieron algunos de los productos de la marca. Por cada cliente que rebasó la cantidad meta se escribe 1, y si no la rebasa se escribe 2. Si número de clientes que rebasan la venta meta es más de a mitad, se le otorga el premio al promotor. Se requiere de un programa que señale si al promotor se le debe asignar el premio económico.

Antes de escribir el programa, es necesario hacer algunas reflexiones que perfeccionarán el pseudocódigo y facilitarán las tareas y el orden en que deben realizarse.

```python
# ejemplo3_c3.py
‘‘‘Uso de sentencias anidadas’’’

#Fase inicial
reb = 0
noreb = 0

#Fase de ejecución
for registro in range(1,9):
	resultado = int(input('Ingresa el resultado (1=si > =200, 2= si < 200) '))
	if resultado==1:
		reb+=1
	else:
		noreb+=1

#Fase final
print('Número de clientes que rebasaron la venta meta',reb)
print('Número de clientes que no rebasaron la venta meta',noreb)

if reb > 4:
	print('Premio al promotor')

#OUTPUT:
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Número de clientes que rebasaron la venta meta 5
#Número de clientes que no rebasaron la venta meta 3

#Premio al promotor
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Ingresa el resultado (1=si > =200, 2= si < 200)2
#Ingresa el resultado (1=si > =200, 2= si < 200)1
#Número de clientes que rebasaron la venta meta 2
#Número de clientes que no rebasaron la venta meta 6
```

### Notes:

```python
for x in range(-5,6):
	print(x, end = ’ ’)

#-5 -4 -3 -2 -1 0 1 2 3 4 5
```

Este ciclo genera una lista de valores enteros, desde -5 hasta 5, pero con un tamaño de paso 2. La opción for interpreta perfectamente el recorrido del ciclo con números enteros. Incluso si es hacia atrás. ⬇️

```python
for x in range(-5,6,2):
	print(x, end = ’ ’)

#-5 -3 -1 1 3 5
```

```python
for x in range(5,-5,-3):
	print(x, end = ’ ’)

#5 2 -1 -4
```

## ALTERAR EL FLUJO - break

```python
for n in range(1,11):
	if n==8:
		break
	print(n,end=’ ’)

#OUTPUT:
#1 2 3 4 5 6 7
```

## ASIGNACIONES DE AUMENTO

![Untitled](/img/PyDS/C3/Untitled%206.png)

# 4. Operadores Booleanos

En programación existen operadores booleanos que permiten poner condiciones que mezclan operadores como los que ya has utilizado > , < , > =, < =, == y !=.

## 4.1. Operador Booleano and

```python
registro_email='Si'
salario_mens=25000
if registro_email=='Si' and salario_mens> =20000:
	print('Posible cliente. Enviar información')

#Posible cliente. Enviar información
```

La función clave en este código en and. La sentencia if será calificada como verdadera, solo cuando registro_email e ingreso_mens> =20000 sean verdaderas.

| p | q | p and q |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | F |
| F | F | F |

## 4.2. Operador Booleano or

```python
título='Si'
experiencia_años=4
if título=='Si' or experiencia_años> =5:
	print('Realizar entrevista')

#Realizar entrevista
```

Esto indica que, si alguna proposición es calificada como verdadera, la sentencia if la calificará como verdadera, y en consecuencia será falsa, solo si ambas son falsas.

| p | q | p or q |
| --- | --- | --- |
| V | V | V |
| V | F | V |
| F | V | V |
| F | F | F |