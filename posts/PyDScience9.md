---
title: 'Cap铆tulo 9. Archivos'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Cap铆tulo 9. Archivos.

> 馃搶 TXT (texto plano), JSON (JavaScript Object Notation), y CSV (coma-separated values)

# 9.2 Archivos TXT

Cada sistema operativo tiene su propio instrumento para indicar cuando termina el archivo. A este elemento se le llama `end-on-file marker`.

Por cada archivo que se abre, Python genera un archivo tipo objeto que le permite interactuar con el archivo original.

## Crear un archivo de tipo TXT

```python
with open('seguidores.txt',mode='w') as seguidores:
	seguidores.write('@charlidamelio D鈥橝melio 108.1\n')
	seguidores.write('@addisonre Addison 76.4\n')
	seguidores.write('@zachking Zach 56.6\n')
	seguidores.write('@bellapoarch Bella 56.3\n')
```

La sentencia with de Python

- Gestiona un recurso (un archivo tipo objeto para seguidores.txt) y asigna este objeto a una variable (seguidores).
- Otorga permisos a la aplicaci贸n para manipular el recurso a trav茅s de la variable.
- Llama al instrumento end-on file marker, para liberar el recurso cuando el programa finaliza.

## `open`

La funci贸n `open` tiene dos argumentos: el primero es el nombre del archivo, el segundo es el modo, que puede ser de lectura o escritura. En este caso w. Este modo indica que el archivo se abre para escribir (write). El archivo se guarda por default, en la misma carpeta en donde se escribe el c贸digo con extensi贸n TXT.

La sentencia `with` asigna el objeto generado por open a la variable seguidores, por medio de as. Dentro de la sentencia with, la variable interact煤a con el archivo con el m茅todo write, que se presenta 4 veces en el c贸digo para anexar los datos de los usuarios.

> 馃搼 seguidores.txt

```
@charlidamelio D鈥橝melio 108.1
@addisonre Addison 76.4
@zachking Zach 56.6
@bellapoarch Bella 56.3
```


```python
with open('seguidores.txt', mode = 'r') as seguidores:
	print(f'{"Handle" :<20}{"Nombre" :<10}{"num_seg" :>10}')
	for record in seguidores:
		handle,nombre,num_seg = record.split()
		print(f'{handle:<20}{nombre:<10}{num_seg:>10}')

'''OUTPUT:
N煤mero          Nombre       Puntos
@charlidamelio  D鈥橝melio     108.1
@addisonre      Addison       76.4
@zachking       Zach          56.6
@bellapoarch    Bella         56.3
'''
```

## Cambiar datos

Observa que cambiar un solo registro requiere:

- Copiar el registro que se quiere modificar en un archivo temporal
- Escribir la modificaci贸n que ha de realizarse
- Copiar la actualizaci贸n en el archivo temporal
- Renombrar al archivo temporal con el nombre original

```python
seguidores=open('seguidores.txt','r')
temporal=open('temporal.txt','w')
with seguidores,temporal:
	for record in seguidores:
		handle,nombre,num_seg = record.split()
		if handle!='@charlidamelio':
			temporal.write(record)
		else:
			nuevo_nombre=' '.join([handle, 'Charlie', num_seg])
			temporal.write(nuevo_nombre +'\n')
```

> 鈿狅笍 La desventaja de esto, es que se genera un archivo nuevo que ocupa espacio en la memoria. La ventaja es que la informaci贸n original no se modifica. Aunque esta rutina puede resultar inc贸moda, tiene un mejor rendimiento cuando el archivo tiene una gran cantidad de registros y se requieren hacer m煤ltiples modificaciones.


# 9.3 Archivos JSON

Los archivos JSON (JavaScript Object Notation) son archivos de texto con un formato ligero f谩cil de leer y de escribir para los programadores y f谩cil de interpretar por Python. Este tipo de archivos describen objetos que utilizan algunas compa帽铆as para interactuar con algunos servicios en la nube.

Los objetos tipo JSON son similares a los diccionarios de Python. Cada objeto JSON contiene un lista con elementos agrupados con llaves, { }. Los elementos son nombres clave y sus valores separados por comas.

Por ejemplo: `{'handle':@charlidamelio, 'name':'Charlie', 'puntos': 108.1}`

## Consideremos el siguiente diccionario

> 馃搼 seguidores.json

```json
seguidores_dicc={'seguidores\n':[
{'handle':'@charlidamelio', 'name':'Charlie', 'num_seg':108.1},
{'handle':'@addisonre', 'name':'Addison', 'num_seg':76.4},
{'handle':'@zachking', 'name':'Zach', 'num_seg':56.6},
{'handle':'@bellapoarch', 'name':'Bella', 'num_seg':56.3}]}
```


```python
import json
with open('seguidores.json','w') as seguidores:
	json.dump(seguidores_dicc,seguidores)
```

## `dump`

La funci贸n `dump` del m贸dulo json se usa para
serializar al diccionario seguidores_dicc dentro del archivo.

```python

with open('seguidores.json','r') as seguidores:
	seguidores_json=json.load(seguidores)
seguidores_json
```

> 馃搼 seguidores.json

```
{'seguidores':
[{'handle': '@charlidamelio', 'name': 'Charlie', 'num_seg': 108.1},
{'handle': '@addisonre', 'name': 'Addison', 'num_seg': 76.4},
{'handle': '@zachking', 'name': 'Zach', 'num_seg': 56.6},
{'handle': '@bellapoarch', 'name': 'Bella', 'num_seg': 56.3}]}
```


## obtener la lista del diccionario asociada a la llave

```python
seguidores_json['seguidores']
'''
[{'handle': '@charlidamelio', 'name': 'Charlie', 'num_seg': 108.1},
{'handle': '@addisonre', 'name': 'Addison', 'num_seg': 76.4},
{'handle': '@zachking', 'name': 'Zach', 'num_seg': 56.6},
{'handle': '@bellapoarch', 'name': 'Bella', 'num_seg': 56.3}]}
'''
```

## obtener los registros individuales

```python
seguidores_json['seguidores'][0]
#{'handle': '@charlidamelio', 'name': 'Charlie', 'num_seg': 108.1}
seguidores_json['seguidores'][3]
#{'handle': '@bellapoarch', 'name': 'Bella', 'num_seg': 56.3}
```

> 鈿狅笍 Otra forma de serializar y deserializar es con el m贸dulo pickle de Python. Sin embargo, la documentaci贸n de Python hace algunas advertencias acerca del m贸dulo pickle:

鈥? Los archivos pickle pueden ser hackeados f谩cilmente, por lo que no es nada confiable
abrir archivos con este formato.
鈥? El protocolo de pickle puede llevar a una serializaci贸n profundamente compleja de objetos de Python que pueden derivar en la interacci贸n no autorizada con otras aplicaciones, particularmente si los datos fueron creados con objetivos fraudulentos de un experto.


![Untitled](/img/PyDS/C9/Untitled.png)

# 9.4 Manipulaci贸n de Excepciones

Existen varios tipos de excepciones que pueden ocurrir cuando trabajas con archivos, por ejemplo:

- Excepciones del tipo FileFoundError, ocurren cuando intentas abrir un archivo que no
se encuentra
- Excepciones del tipo PermissionsError, suceden si, por ejemplo, quieres guardar un
archivo en una carpeta en la cual no tienes permiso para hacerlo.
- Excepciones del tipo ValueError, con mensaje de error 鈥業/O/operation on closed file鈥? que
pasan cuando intentas en escribir en un archivo que ya ha sido cerrado.

Y otras excepciones que ya se han presentado como `ZeroDivisionError` cuando se presenta una divisi贸n entre cero.

![Untitled](/img/PyDS/C9/Untitled%201.png)

Y la excepci贸n del tipo `ValueError`, que ocurre, por ejemplo, cuando tratas de convertir un arreglo en un entero.

```python
int('hola mundo')
```

![Untitled](/img/PyDS/C9/Untitled%202.png)

En ambos casos la ejecuci贸n del programa se detiene para mostrar el mensaje de error. Para dar continuidad a la ejecuci贸n del programa, si es que hay m谩s tareas por realizar. La estrategia es reconocer cuando ocurre la excepci贸n y manipularla para que el programa siga con la totalidad de las tareas. Aqu铆 est谩 un ejemplo que evita la excepci贸n ZeroDivisionError.

## Ejemplo 1

```python
"""Manipulaci贸n de la excepci贸n ZeroDivisionError"""
while True:
#diferentes casos de divisi贸n
 try:
 numerador=int(input('Ingresa el numerador'))
 denominador=int(input('Ingresa el denominador'))
 cociente=numerador/denominador
 except ValueError:
 print('Debes ingresar dos n煤meros enteros\n')
 except ZeroDivisionError:
 print('Hay una divisi贸n entre cero\n')
 else:
 print(f'{numerador:.1f}/{denominador:.1f}={cociente:.1f}')
 break

'''OUTPUT (Algunos resultados):
Ingresa el numerador 26
Ingresa el denominador 12.3
Debes ingresar dos n煤meros enteros

Ingresa el numerador 132
Ingresa el denominador 0
Hay una divisi贸n entre cero

Ingresa el numerador 36
Ingresa el denominador 9
36.0/9.0=4.0
'''
```

> 馃挕 La condici贸n `try` es seguida de una o m谩s excepciones, cada `except` especifica un tipo de excepci贸n a manipular. Despu茅s del 煤ltimo except, una condici贸n opcional else, se ejecuta, si ninguna excepci贸n ocurre.


> El ejemplo 1, trata de dividir dos n煤meros enteros, por lo que pide al usuario introducir dos n煤meros: numerador y denominador. Si alguno de los dos n煤meros no es entero, se
comete una excepci贸n tipo `ValueError`, y solicita al usuario ingresar nuevamente los valores. Si se asigna al denominador el valor de cero, ocurre una excepci贸n del tipo `ZeroDivisionError`, por lo que vuelve a solicitar al usuario introducir nuevos valores. Cuando se introducen los dos valores son enteros y el denominador no es cero, el programa muestra la divisi贸n de los dos valores.
> 

# 9.5 Archivos CSV

```python
import csv
with open('seguidores.csv', mode='w',newline='w') as seguidores:
	writer=csv.writer(seguidores)
	writer.writerow(['@charlidamelio', 'Charlie', 108.1])
	writer.writerow(['@addisonre', 'Addison', 76.4])
	writer.writerow(['@zachking', 'Zach', 56.6])
	writer.writerow(['@bellapoarch', 'Bella', 56.3])
```

> 馃挕 La extensi贸n en el archivo `.csv`, indica que al archivo tendr谩 un formato de archivo CSV. 
La funci贸n `writer` del m贸dulo csv regresa un objeto que escribe datos CSV en el archivo objeto especificado.
Cada llamada del m茅todo `writerow` recibe un iterable que almacena en el archivo. Este m茅todo utiliza listas para cada registro. Por default writerow delimita los valores con comas, peo puedes utilizar un delimitador personalizado.


> 馃搼 seguidores.csv

```
@charlidamelio,Charlie,108.1
@addisonre Addison,76.4
@zachking,Zach,56.6
@bellapoarch,Bella,56.3
```


> 鈿狅笍 Los archivos CSV no contienen espacios en blanco despu茅s de las comas, aunque algunas veces este detalle mejora la lectura de los archivos.


## leer los datos de un archivo

```python
with open('seguidores.csv','r', newline='') as seguidores:
	print(f'{"Handle":<20}{"Nombre":<10}{"Seguidores":>10}')
	lectura=csv.reader(seguidores)
	for record in lectura:
		handle, nombre, num_seg=record
		print(f'{handle:<20}{nombre:<10}{num_seg:>10}')

'''OUTPUT:
Handle           Nombre   Seguidores
@charlidamelio   Charlie  108.1
@addisonre       Addison   76.4
@zachking        Zach      56.6
@bellapoarch     Bella     56.3
'''
```

> 馃挕 La funci贸n reader del m贸dulo csv regresa un objeto que lee los datos del formato CSV del archivo objeto.


> 馃挕 Si alg煤n campo dentro del archivo necesita alguna coma, es posible hacer una modificaci贸n sencilla, por ejemplo:
`writer.writerow(['@charlidamelio', "D鈥橝melio, Charlie", 108.1])`


# 9.6 Lectura de archivos CSV con DataFrame de Pandas

```python
import pandas as pd
datosgym=pd.read_csv('datos_gimnasio.csv')
pd.set_option('precision',1) # muestra solo un valor decimal

datosgym.head()
'''
codigo_user G茅nero Peso Cintura Pulso Lagartijas Sentadilla Saltos
0 usuario1    M    86.6   91.4    50     5         162       60
1 usuario2    M    85.7   94.0    52     2         110       60
2 usuario3    M    87.5   96.5    58     12        101       101
3 usuario4    F    73.5   88.9    62     12        105       37
4 usuario5    M    85.7   88.9    46     13        155       58
'''
```

## `head`

El m茅todo `head` de DataFrame muestra por default las primeras 5 filas del conjunto de datos.

```python
pd.set_option('precision',1) # muestra solo un valor decimal
datosgym.head()

'''
  codigo_user G茅nero Peso Cintura Pulso Lagartijas Sentadilla Saltos
0 usuario1      M    86.6   91.4   50       5          162     60
1 usuario2      M    85.7   94.0   52       2          110     60
2 usuario3      M    87.5   96.5   58      12          101    101
3 usuario4      F    73.5   88.9   62      12          105     37
4 usuario5      M    85.7   88.9   46      13          155     58
'''

```

## `tail`

Para mostrar las 煤ltimas 5 filas utiliza el m茅todo `tail` de DataFrame

```python
datosgym.tail()

'''
codigo_user G茅nero Peso Cintura Pulso Lagartijas Sentadilla Saltos
15 usuario16 M 91.6 94.0 62 12 210 120
16 usuario17 F 79.8 94.0 54 4 60 25
17 usuario18 M 71.2 81.3 52 11 230 80
18 usuario19 F 70.8 83.8 54 15 225 73
19 usuario20 F 62.6 83.8 68 2 110 43
'''
```

## Modificar los encabezados del DataFrame

```python
datosgym.columns=['C贸digo','G茅nero','Peso','Cintura','Pulso',
 'Lagartijas','Sentadillas','Saltos']
datosgym.head()

'''
C贸digo G茅nero Peso Cintura Pulso Lagartijas Sentadillas Saltos
0 usuario1 M 86.6 91.4 50 5 162 60
1 usuario2 M 85.7 94.0 52 2 110 60
2 usuario3 M 87.5 96.5 58 12 101 101
3 usuario4 F 73.5 88.9 62 12 105 37
4 usuario5 M 85.7 88.9 46 13 155 58
'''
```

## `describe`

La funci贸n `describe` de Pandas premite obtener un resumen de las estad铆sticas descriptivas del conjunto de datos.

```python
datosgym.describe()
'''
Peso Cintura Pulso Lagartijas Sentadillas Saltos
count 20.0 20.0 20.0 20.0 20.0 20.0
mean 81.0 89.9 56.1 9.4 145.6 70.3
std 11.2 8.1 7.2 5.3 62.6 51.3
min 62.6 78.7 46.0 1.0 50.0 25.0
25% 72.9 83.8 51.5 4.8 101.0 39.5
50% 79.8 88.9 55.0 11.5 122.5 54.0
75% 86.9 94.0 60.5 13.2 210.0 85.2
max 112.0 116.8 74.0 17.0 251.0 250.0
'''
```

Para revisar las estad铆sticas de las mujeres (g茅nero F)

```python
(datosgym.G茅nero == 'F').describe()
'''
count 20
unique 2
top True
freq 11
Name: G茅nero, dtype: object
'''

```

Donde

- `count`, es el total de elementos en el conjunto de datos
- `unique`, es el n煤mero de valores 煤nicos (hay 2, F y M)
- `top`, es el valor m谩s frecuente que ocurre en los resultados
- `freq`, es el n煤mero de ocurrencias del valor top.

La visualizaci贸n es 煤til para entender el comportamiento de los datos. Pandas puede interactuar con Matplotlib para elaborar gr谩ficos descriptivos. Para hacer un diagrama, primero debes
habilitar Matplotlib de Python.

```python
import matplotlib.pyplot as plt
%matplotlib
histogram=datosgym.hist()
```