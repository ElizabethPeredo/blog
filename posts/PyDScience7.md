---
title: 'Capítulo 7. Programación con Numpy'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 7. Programación con Numpy.

NumPy es una de las librerías más populares de Python, ya que puede procesar listas de múltiples dimensiones que incluyen lazos anidados, o comprensión de listas con diversas sentencias for.

# 1. Arreglos de Datos

![Untitled](/img/PyDS/C7/Untitled.png)

```python
import numpy as np
```

## `array`

```python
factoriales = np.array([1,2,6,24,120,720])

type(factoriales)
#factoriales
#array([ 1, 2, 6, 24, 120, 720])
```

- `NumPy` separa cada valor del siguiente con una coma y un
espacio con alineación a la derecha.
- `NumPy` deja tantos lugares como sean necesarios, para que cada elemento cuente con el mismo campo, aunque en algunos casos, sean espacios en blanco. El ancho del campo queda determinado por el número que tenga la mayor cantidad de caracteres.

La función `array` copia automáticamente las dimensiones del argumento. Por ejemplo, el siguiente arreglo (array) está formado por tres filas y dos columnas.

```python
np.array([[3,4],[6,7],[10,11]])
#array([[ 3, 4],
#				[ 6, 7],
#				[10, 11]])
```

## Atributos

```python
import numpy as np

enteros = np.array([[9,10,11,12],[8,7,6,5]])
enteros
#array([[ 9, 10, 11, 12],
#				[ 8, 7, 6, 5]])

flotantes=np.array([[9**(1/2),10**(1/2),3.33,],[10/3,3.4,3.03]])
flotantes
#array([[3. , 3.16227766, 3.33 ],
#				[3.33333333, 3.4 , 3.03 ]])
```

### `dtype`

Puedes verificar el tipo de elemento generado con dtype.

```python
enteros.dtype
#dtype('int32') # en algunas plataformas puede ser int64

flotantes.dtype
#dtype('float64')
```

### `ndim`

El atributo ndim contiene el número de dimensiones del arreglo y el atributo shape contiene una tupla que especifica las dimensiones del arreglo.

```python
enteros.ndim
#2

flotantes.ndim
#2

enteros.shape
#(2, 4)
```

### `shape`

```python
flotantes.shape
#(2, 3)
```

### `size` and `itemsize`

```python
enteros.size
#8
enteros.itemsize
#4
flotantes.size
#6
flotantes.itemsize
#8
```

## Manipular arreglos

```python
for fila in flotantes:
	for columna in fila:
		print(columna, end=' ')
	print()

#3.0 3.1622776601683795 3.33
#3.3333333333333335 3.4 3.03
```

### `flat`

Puedes convertir un arreglo multidimensional en uno, de una dimensión con el atributo `flat`.

```python
for n in enteros.flat:
	print(n,end=' ')

#9 10 11 12 8 7 6 5
```

### `zeros`, `ones` y `full`

Estas funciones permiten rellenar arreglos con valores específicos:

```python
import numpy as np
np.zeros(5)
#array([0., 0., 0., 0., 0.])

np.ones((3,2),dtype = int)
#array([[1, 1],
#				[1, 1],
#				[1, 1]])

np.full((2,4),10)
#array([[10, 10, 10, 10],
#				[10, 10, 10, 10]])
```

### `arange`

La función `arange` permite crear arreglos con tamaño de paso entero.

![Untitled](/img/PyDS/C7/Untitled%201.png)

![Untitled](/img/PyDS/C7/Untitled%202.png)

```python
import numpy as np

np.arange(8)
#array([0, 1, 2, 3, 4, 5, 6, 7])

np.arange(3,8)
#array([3, 4, 5, 6, 7])

np.arange(12,2,-3)
#array([12, 9, 6, 3])
```

### `linspace`

Permite crear arreglos con tamaños de paso que no sea entero (float), con la función linspace:

```python
np.linspace(0.0,1.0,num =5)
#array([0.,0.25,0.5,0.75,1.])
```

### `reshape`

Si tienes un arreglo de una dimensión y quieres armar un arreglo de dos dimensiones debes utilizar el método reshape.

```python
np.arange(21,1,-1).reshape(4,5)
#array([[21, 20, 19, 18, 17],
#				[16, 15, 14, 13, 12],
#				[11, 10, 9, 8, 7],
#				[ 6, 5, 4, 3, 2]])
```

Si las dimensiones de los arreglos no están acopladas, puede resultar un mensaje de error.

```python
np.arange(0,1000,0.5).reshape(4,2000)
```

![Untitled](/img/PyDS/C7/Untitled%203.png)

## + 1000 elementos Numpy

Si el arreglo tiene 1,000 o más elementos, NumPy no muestra la totalidad de datos. Para no ocupar espacio la librería divide al arreglo permitiendo ver una parte de la información.

```python
np.arange(0,10000).reshape(5,2000)
#array([[ 0, 1, 2, ..., 1997, 1998, 1999],
#				[2000, 2001, 2002, ..., 3997, 3998, 3999],
#				[4000, 4001, 4002, ..., 5997, 5998, 5999],
#				[6000, 6001, 6002, ..., 7997, 7998, 7999],
#				[8000, 8001, 8002, ..., 9997, 9998, 9999]])
```

El mismo arreglo con 10,000 elementos, genera otro con 50 filas y 200 columnas.

```python
np.arange(0,10000).reshape(50,200)
#array([[ 0, 1, 2, ..., 197, 198, 199],
#				[ 200, 201, 202, ..., 397, 398, 399],
#				[ 400, 401, 402, ..., 597, 598, 599],
#				...,
#				[9400, 9401, 9402, ..., 9597, 9598, 9599],
#				[9600, 9601, 9602, ..., 9797, 9798, 9799],
#				[9800, 9801, 9802, ..., 9997, 9998, 9999]])
```

# 2. Operaciones con arreglos

`NumPy` posee una gran variedad de operadores que pueden aplicarse a los diferentes arreglos que puedes elaborar. Iniciaremos con algunas operaciones básicas que se aplican a cada valor del arreglo.

```python
import numpy as np
pares = np.arange(2,15,2)

pares
#array([ 2, 4, 6, 8, 10, 12, 14])
pares+1
#array([ 3, 5, 7, 9, 11, 13, 15])
pares*3
#array([ 6, 12, 18, 24, 30, 36, 42])
pares**(1/2)
#array([1.41421356, 2. , 2.44948974, 2.82842712, 3.16227766, 3.46410162, 3.74165739])
pares
#array([ 2, 4, 6, 8, 10, 12, 14])
```

## `+=`, o `-=`

```python
pares -=1

pares
#array([ 1, 3, 5, 7, 9, 11, 13])
```

```python
lista1 = np.arange(2,18,3)
lista1
#array([ 2, 5, 8, 11, 14, 17])

lista2 = np.linspace(-2,20,6)
lista2
#array([-2. , 2.4, 6.8, 11.2, 15.6, 20. ])

lista2-lista1
#array([-4. , -2.6, -1.2, 0.2, 1.6, 3. ])

lista2/lista1
#array([-1. , 0.48 , 0.85 ,1.01818182, 1.11428571, 1.17647059])
```

## Comparar arreglos

```python
lista1<lista2
#array([False, False, False, True, True, True])
lista2 >= 4
#array([False, False, True, True, True, True])
lista1 == lista2
#array([False, False, False, False, False, False])
```

## Cálculos con arreglos

```python
import numpy as np
ventas=np.array( [[554,606,710,851],[1244,898,416,1763], [841,655,1105,1067]])
ventas
#array([[ 554, 606, 710, 851],[1244, 898, 416, 1763],[ 841, 655, 1105, 1067]])
```

### sum, min, max, mean, std, var

```python
ventas.sum()
#10710
ventas.min()
#416
ventas.max()
#1763
ventas.mean()
#892.5
ventas.std()
#350.56656524355924
ventas.var()
#122896.91666666667
```

### Calculos por filas o por columnas

```python
'''COLUMNAS:'''
ventas.mean(axis=0)
#array([ 879.66666667, 719.66666667, 743.66666667, 1227. ])

'''FILAS:'''
ventas.mean(axis=1)
#array([ 680.25, 1080.25, 917. ])
```

![Untitled](/img/PyDS/C7/Untitled%204.png)

![Untitled](/img/PyDS/C7/Untitled%205.png)

### Funciones Universales

```python
import numpy as np
lista1 = np.arange(0,8)

lista1
#array([0, 1, 2, 3, 4, 5, 6, 7])
```

 **Raíz cuadrada**

```python
np.sqrt(lista1)
#array([0. , 1. , 1.41421356, 1.73205081, 2., 2.23606798, 2.44948974, 2.64575131])
```

> La función sqrt de NumPy regresa la raíz cuadrada de cada uno de los elementos del arreglo. Esto lo habías hecho anteriormente, pero utilizando la potencia 1/2.
> 

**Multiplicar**

```python
np.multiply(lista2,2)
#array([ 6, 8, 10, 12, 14, 16, 18, 20])
```

Existen otras formas de multiplicar. Pero primero cambiemos las dimensiones de lista2 en un arreglo de 2 filas y 4 columnas:

```python
lista3 = lista2.reshape(2,4)
lista3
#array([[ 3, 4, 5, 6], [ 7, 8, 9, 10]])
```

Un nuevo arreglo es:

```python
lista4 = np.array([2,-4,6,-8])
lista4
#array([ 2, -4, 6, -8])
```

Entonces, la multiplicación de los arreglos lista3 y lista4 es:

```python
np.multiply(lista3,lista4)
#array([[ 6, -16, 30, -48], [ 14, -32, 54, -80]])
```

[Numpy (**Universal functions)**](/img/PyDS/C7/Numpy%20(Universal%20functions)%208add3cdf714a4aa794c87a9db382b5c2.md)

# 3. Indexando y cortando arreglos

Para indexar los elementos de un arreglo, es posible utilizar la misma sintaxis empleada en listas y tuplas, pero con la significativa diferencia, que ahora el índice puede tener más argumentos. 

```python
import numpy as np
ventas=np.array ([[ 554, 606, 710, 851], [1244, 898, 416, 1763], [ 841, 655, 1105, 1067]])

ventas
'''
array([[ 554, 606, 710, 851], 
				[1244, 898, 416, 1763], 
				[ 841, 655, 1105, 1067]])
'''
```

|  | Col 0 | Col 1 | Col 2 | Col 3 |
| --- | --- | --- | --- | --- |
| Fila 0 | lista[0,0] | lista[0,1] | lista[0,2] | lista[0,3] |
| Fila 1 | lista[1,0] | lista[1,1] | lista[1,2] | lista[1,3] |
| Fila 2 | lista[2,0] | lista[2,1] | lista[2,2] | lista[2,3] |

```python
ventas[2,1]
#655
ventas[1,3]
#1763

'''Fila con índice 1'''
ventas[1]
#array([1244, 898, 416, 1763])

'''Fila con índice 0 y 1'''
ventas[0:2]
#array([[ 554, 606, 710, 851], 
#				[1244, 898, 416, 1763]])

'''Fila con índice 2 y 3'''
ventas[1:3]
#array([[1244, 898, 416, 1763],
#				[ 841, 655, 1105, 1067]])
```

## Seleccionar columnas `[:,n1:n2]`

```python
ventas[:,0]
#array([ 554, 1244, 841])

'''Con índices 1 y 2'''
ventas[:,1:3]
#array([[ 606, 710],
#				[ 898, 416],
#				[ 655, 1105]])

'''Con índices 0 y 2'''
ventas[:,[0,2]]
#array([[ 554, 710],
#				[1244, 416],
#				[ 841, 1105]])
```

>📌 Los arreglos que regresa NumPy de la forma array([[argumentos]]), son llamados vistas(views) o copias superficiales (shallow copies).

## `view`

```python
import numpy as np
impares = np.arange(3,18,2)

impares
#array([ 3, 5, 7, 9, 11, 13, 15, 17])

impares2=impares.view()
impares2
#array([ 3, 5, 7, 9, 11, 13, 15, 17])
```

### Modificaremos un elemento del arreglo

```python
impares[1]*=100
impares
#array([ 3, 500, 7, 9, 11, 13, 15, 17])

impares2
#array([ 3, 5, 7, 9, 11, 13, 15, 17])
```

---

>⚠️ Otros métodos de NumPy para los arreglos son `reshape` y `resize`. Ambos permiten la interacción de arreglos de dos dimensiones con arreglos de una dimensión.

## `reshape`

`reshape` produce una vista (`view`) o copia superficial del arreglo original con nueva dimensión. Este método `**no modifica al
arreglo original**`.

```python
import numpy as np
ventas = np.array([[ 500, 600, 550, 800], [1200, 800, 400,1000]])

ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])

ventas.reshape(1,8)
#array([[ 500, 600, 550, 800, 1200, 800, 400, 1000]])

ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])
```

## `resize`

El método `resize **modifica la forma del arreglo original`.**

```python
ventas.resize(1,8)
ventas
#array([[ 500, 600, 550, 800, 1200, 800, 400, 1000]])
```

---

>⚠️ Para el caso específico de cambiar un arreglo multidimensional, en otro de una dimensión, los métodos `flatten` y `ravel` realizan esta tarea.

## `flatten`

El método `flatten` genera una copia profunda del arreglo original. Para verificar que no comparte información, el siguiente código modifica un elemento en la copia.

```python
vector_ventas[0]=1500

vector_ventas
#array([[1500, 600, 550, 800, 1200, 800, 400, 1000]])

ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])
```

## `ravel`

El método ravel genera una vista (`view`) del arreglo original, por lo que comparten los mismos datos.

```python
ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])
reacomodar_ventas = ventas.ravel()

reacomodar_ventas
#array([[ 500, 600, 550, 800, 1200, 800, 400, 1000]])

reacomodar_ventas[0] =1000

reacomodar_ventas
#array([[1000, 600, 550, 800, 1200, 800, 400, 1000]])

ventas
#array([[1000, 600, 550, 800], [1200, 800, 400, 1000]])
```

## Transpuesta de un arreglo `arreglo.T`

La transpuesta de un arreglo con `n filas y m columnas` es otro arreglo que resulta de cambiar las filas del primero en las columnas del segundo, de tal manera que el arreglo resultante tiene m filas y n columnas. Para hacer esta tarea Python utiliza el método T para generar la transpuesta de un arreglo.

```python
ventas = np.array([[ 500, 600, 550, 800], [1200, 800, 400,1000]])

ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])

ventas.T
#array([[ 500, 1200], [ 600, 800], [ 550, 400], [ 800, 1000]])
```

La transpuesta no modifica al arreglo original.

```python
ventas
#array([[ 500, 600, 550, 800], [1200, 800, 400, 1000]])
```

Con el arreglo anterior

```python
ventas
'''
array([[ 500, 600, 550, 800],
			[1200, 800, 400, 1000]])
'''
```

Para añadirle una fila, al final.

```python
ventas2 = np.array([[1100,1000,950,1100]])
np.vstack((ventas,ventas2))
'''
array([[1000, 600, 550, 800],
				[1200, 800, 400, 1000],
				[1100, 1000, 950, 1100]])
'''
```

Estas opciones no cambian al arreglo original

```python
ventas
'''
array([[ 500, 600, 550, 800],
			[1200, 800, 400, 1000]])
'''
```

Para añadir dos columnas a ventas

```python
ventas3 = np.array([[1100,900],[800,900]])
np.hstack((ventas,ventas3))
'''
array([[ 500, 600, 550, 800, 1100, 900],
			[1200, 800, 400, 1000, 800, 900]]
'''
```

# 4. Pandas

![Untitled](/img/PyDS/C7/Untitled%206.png)

Pandas es la librería más popular de Python para trabajar con datos de tipo homogéneo, a través de sus índices. En este apartado revisarás dos colecciones de librerías útiles para el tratamiento estadístico de datos: `Series` y `Dataframes`

Series de Pandas permite trabajar con arreglos unidimensionales. Series utiliza arreglos con índices enteros que inician en 0.

```python
import pandas as pd
tiempo_web = pd.Series([160,256,98,108])
tiempo_web

''' OUTPUT:
0 160
1 256
2 98
3 108
dtype: int64
'''
```

Pandas muestra el resultado en dos columnas con los índices alineados a la izquierda y los valores alineados a la derecha. Series también muestra el tipo de datos al final del arreglo.

## Crear una serie con el mismo elemento

```python
pd.Series(3.1416,range(5))
''' OUTPUT:
0 3.1416
1 3.1416
2 3.1416
3 3.1416
4 3.1416
dtype: float64
'''
```

> Esto permite tener 5 elementos con el contenido de 3.1416
> 

## Acceso a algún elemento

```python
tiempo_web[1]
#256
```

## Métodos clásicos

```python
tiempo_web.count()
#4
'''PROMEDIO DE LA SERIE'''
tiempo_web.mean()
#155.5
tiempo_web.min()
#98
tiempo_web.max()
#256
tiempo_web.std()
#72.30260484012085
```

## `describe`

Todas estas tareas se pueden solicitar con `describe`.

```python
tiempo_web.describe()
''' OUTPUT:
count 4.000000
mean 155.500000
std 72.302605
min 98.000000
25% 105.500000
50% 134.000000
75% 184.000000
max 256.000000
dtype: float64
'''
```

## `index`

Para personalizar los índices en Series.

```python
tiempo_web=pd.Series([160,256,98,108],index= ['Laura','Daniel','Alberto','Eva'])
tiempo_web
''' OUTPUT:
Laura 160
Daniel 256
Alberto 98
Eva 108
dtype: int64
'''

tiempo_web['Eva']
#108
tiempo_web[3]
#108
```

## Definir un arreglo Series con un diccionario

```python
tiempo_web=pd.Series({'Laura':160,'Daniel':256, 'Alberto':98,'Eva':108})

tiempo_web
''' OUTPUT:
Laura 160
Daniel 256
Alberto 98
Eva 108
dtype: int64
'''
```

## Llamar a los elementos

```python
tiempo_web['Alberto']
#98
```

### Llamar como atributos

Cuando los índices son cadenas, Pandas añade los identificadores a los atributos de Series, de manera que es posible llamar a los elementos con la siguiente notación.

```python
tiempo_web.Alberto
#98
```

## Atributos incorporados en Series es el tipo de dato(`dtype`), los valores(`values`) y los índices(`index`)

```python
tiempo_web.dtype
#dtype('int64')

tiempo_web.values
#array([160, 256, 98, 108], dtype=int64)

tiempo_web.index
#Index(['Laura', 'Daniel', 'Alberto', 'Eva'], dtype='object')
```

## `contain`

Para verificar si alguna letra está contenida en alguno de los elementos, el método contain para cadenas puede realizar esta tarea.

```python
ingredientes = pd.Series(['Leche','Mantequilla',
 'Harina','Azúcar'])

ingredientes
'''OUTPUT:
0 Leche
1 Mantequilla
2 Harina
3 Azúcar
dtype: object
'''

ingredientes.str.contains('a')
''' OUTPUT:
0 False
1 True
2 True
3 True
dtype: bool
'''
```

# 5. Dataframes

Un `**DataFrame**` es un arreglo de dos dimensiones. Y cada columna del DataFrame es un arreglo tipo Series, justo como en la sección anterior. Por lo tanto, todos los atributos de Series son aplicables al DataFrame.

```python
import pandas as pd
reg_peso = {'Vanesa':[68,67,66,65],'Kevin':[89,89,90,88], 'Fernanda':[59,60,60,62],'Patricia':[70,68,67,65]}
peso = pd.DataFrame(reg_peso)
peso

'''
  Vanesa	Kevin	Fernanda	Patricia
0	   68	    89	   59	      70
1	   67	    89	   60	      68
2	   66	    90	   60	      67
3	   65	    88	   62	      65
'''
```

## Añadir índices personalizados

>📌 `**Index**` permite personalizar los indices en series.

```python
peso.index = ['Mes 1','Mes 2','Mes 3','Mes 4']
peso
'''
      Vanesa Kevin Fernanda Patricia
Mes 1 68 89 59 70
Mes 2 67 89 60 68
Mes 3 66 90 60 67
Mes 4 65 88 62 65

'''
```

## Seleccionar la información de cualquier individuo

```python
peso['Fernanda']
'''
Mes 1 59
Mes 2 60
Mes 3 60
Mes 4 32
Name: Fernanda, dtype: int64
'''
```

```python
peso.Patricia
'''
Mes 1 70
Mes 2 68
Mes 3 67
Mes 4 65
Name: Patricia, dtype: int64
'''
```

## `loc`

Atributo para acceder a una fila según su nombre

```python
peso.loc['Mes 1']
'''
Vanes 68
Kevin 89
Fernanda 59
Patricia 70
Name: Mes 1, dtype: int64
'''
```

## `iloc`

Atributo para acceder a una fila según su número de índice

```python
peso.iloc[1]
[10]: Vanesa 67
 Kevin 89
 Fernanda 60
 Patricia 68
 Name: Mes 2, dtype: int64
```

## Para requerir arreglos

```python
peso.loc['Mes 1':'Mes 3']
'''
Vanesa Kevin Fernanda Patricia
Mes 1 68 89 59 70
Mes 2 67 89 60 68
Mes 3 66 90 60 67
'''
```

> Cuando utilizas los índices numéricos con `iloc`, el índice superior no se incluye.
> 

```python
peso.loc[0:2]
'''
Vanesa Kevin Fernanda Patricia
Mes 1 68 89 59 70
Mes 2 67 89 60 68
'''
```

## Extraer filas específicas

### Con filas específicas

```python
peso.loc[['Mes 1','Mes 3']]
'''
      Vanesa Kevin Fernanda Patricia
Mes 1 68 89 59 70
Mes 3 66 90 60 67
'''
```

### Con índices numéricos

```python
peso.loc[[0, 2]]
'''
      Vanesa Kevin Fernanda Patricia
Mes 1 68 89 59 70
Mes 3 66 90 60 67
'''
```

### Con meses específicos y pacientes específicos

```python
peso.loc['Mes 2':'Mes 3',['Vanesa','Patricia']]
'''
      Vanesa Patricia
Mes 2 68 68
Mes 3 66 67
'''
```

## Selección con índices

```python
peso.iloc[[0, 2], 0:3]
'''
    Vanesa Kevin Fernanda
Mes 1 68 89 59
Mes 3 66 90 60
'''
```

## Indexación booleana

```python
peso[peso>=70]
'''
Vanesa Kevin Fernanda Patricia
Mes 1 NaN 89 NaN 70
Mes 2 NaN 89 NaN NaN
Mes 3 NaN 90 NaN NaN
Mes 4 NaN 88 NaN NaN
'''
```

Ahora, los pesos mayores a 65kg, pero menores a 80kg.

```python
peso[(peso>65)&(peso<80)]
'''
Vanesa Kevin Fernanda Patricia
Mes 1 68.0 NaN NaN 70.0
Mes 2 67.0 NaN NaN 68.0
Mes 3 66.0 NaN NaN 67.0
Mes 4 NaN NaN NaN NaN
'''
```

## `at` e `iat`

Los atributos at e iat permiten llamar a un valor único del DataFrame. Como antes, at, usa los
índices personalizados e iat utiliza los índices numéricos.

```python
peso.at['Mes 3','Patricia']
#67
peso.iat[2,0]
#66
```

### Para modificar

```python
peso.at['Mes 4','Kevin']=85
peso.at['Mes 4','Kevin']
#85
peso.iat[1,2]=59
peso.iat[1,2]
#59
peso
'''
    Vanesa Kevin Fernanda Patricia
 Mes 1 68 89 59 70
 Mes 2 67 89 59 68
 Mes 3 66 90 60 67
 Mes 4 65 85 62 65
'''
```

## `describe()`

```python
peso.describe()
'''
       Vanesa Kevin Fernanda Patricia
count 4.000000 4.000000 4.000000 4.000000
mean 66.500000 88.250000 60.000000 67.500000
std 1.290994 2.217356 1.414214 2.081666
min 65.000000 85.000000 59.000000 65.000000
25% 65.750000 88.000000 59.000000 66.500000
50% 66.500000 89.000000 59.500000 67.500000
75% 67.250000 89.250000 60.500000 68.500000
max 68.000000 90.000000 62.000000 70.000000
'''
```

## `set_option`

Para cambiar la cantidad decimales en la presentación llama a la función `set_option`.

### `precision`

Función para cambiar la cantidad de decimales

```python
pd.set_option('precision',1)
peso.describe()
'''
			Vanesa Kevin Fernanda Patricia
count 4.0 4.0 4.0 4.0
mean 66.5 88.2 60.0 67.5
std 1.3 2.2 1.4 2.1
min 65.0 85.0 59.0 65.0
25% 65.8 88.0 59.0 66.5
50% 66.5 89.0 59.5 67.5
75% 67.2 89.2 60.5 68.5
max 68.0 90.0 62.0 70.0
'''
```

## Llamar al arreglo de promedios en el DataFrame

```python
peso.mean()
'''
Vanesa 66.5
Kevin 88.2
Fernanda 60.0
Patricia 67.5
dtype: int64
'''
```

## Transpuesta del DataFrame

```python
peso.T
'''
       Mes 1 Mes 2 Mes 3 Mes 4
Vanesa 68 67 66 65
Kevin 89 89 90 85
Fernanda 59 59 60 62
Patricia 70 68 67 65
'''
```

## `.T.describe()`

```python
peso.T.describe()
'''
     Mes 1 Mes 2 Mes 3 Mes 4
count 4.0 4.0 4.0 4.0
mean 71.5 70.8 70.8 69.2
std 12.6 12.8 13.2 10.6
min 59.0 59.0 60.0 62.0
25% 65.8 65.0 64.5 64.2
50% 69.0 67.5 66.5 65.0
75% 74.8 73.2 72.8 70.0
max 89.0 89.0 90.0 85.0
'''
```

## `T.mean()`

El peso promedio por mes.

```python
peso.T.mean()
'''
Mes 1 71.5
Mes 2 70.8
Mes 3 70.8
Mes 4 69.2
dtype: float64
'''
```

## `sort_index()`

DataFrame también permite ordenar la información por filas o por columnas. 

`**sort_index**` ordena los objetos por etiquetas a lo largo del eje dado.

```python
peso.sort_index(ascending=False)
'''
			Vanesa Kevin Fernanda Patricia
Mes 4 65 85 62 65
Mes 3 66 90 60 67
Mes 2 67 89 59 68
Mes 1 68 89 59 70
'''
```

### Para ordenar las columnas en orden ascendente

```python
peso.sort_index(axis=1)
'''
		Fernanda Kevin Patricia Vanesa
Mes 1 62 85 65 68
Mes 2 60 90 67 67
Mes 3 59 89 68 66
Mes 4 59 89 70 65
'''
```

### Ordenar los valores de acuerdo a alguna fila o columna específica

```python
peso.sort_values(by='Mes 1', axis=1,ascending=False)
'''
		Kevin Patricia Vanesa Fernanda
Mes 1 89 70 68 59
Mes 2 89 68 67 59
Mes 3 90 67 66 60
Mes 4 85 65 65 62
'''
```

Con las mismas condiciones, pero utilizando la transpuesta:

```python
peso.T.sort_values('Mes 1',ascending=False)
'''
			Mes 1 Mes 2 Mes 3 Mes 4
Kevin 89 89 90 85
Patricia 70 68 67 65
Vanesa 68 67 66 65
Fernanda 59 59 60 62
'''
```

Llamar a los valores ordenados del mes 1:

```python
peso.loc['Mes 1'].sort_values(ascending=False)
'''
Kevin 89
Patricia 70
Vanesa 68
Fernanda 59
'''
```