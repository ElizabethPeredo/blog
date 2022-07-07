---
title: 'Capítulo 8. Cadenas'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 8. Cadenas.

# 1. Dando formato a las cadenas

| f | flotantes |
| --- | --- |
| d | decimal |
| c | caracter |
| s | string |

`f-string` para dar formato a los
resultados de salida

```python
f'{3.141592:0.3f}'
#'3.141'
```

## Tipos de formato

### Enteros

```python
f'{150:d}'
#'150'
```

### Caracter entero con su caracter alfabético

![Untitled](/img/PyDS/C8/Untitled.png)

```python
f'{66:c} {98:c}'
#B b
```

### Cadenas (strings)

```python
f'{"Este curso está de":s} {100}'
#'Este curso está de 100'
```

>⚠️ Por default, Python da una alineación a la derecha, a los valores; y a las cadenas, a la izquierda.


### `f`-string

Para dar formato al texto de salida, se pode especificar el número de caracteres para una cadena añadiendo espacios en blanco o se puede encerrar los resultados entre corchetes.

![Untitled](/img/PyDS/C8/Untitled%201.png)

```python
f'[{314:10d}]'
#'[          314]'

```

![Untitled](/img/PyDS/C8/Untitled%202.png)

![Untitled](/img/PyDS/C8/Untitled%203.png)

```python
f'[{"Alineación":15}{3.14:10f}]'
#'[Alineación     3.140000]'
```

```python
f'[{"Alineación":15}]'
#'[Alineación     ]'
```

![Untitled](/img/PyDS/C8/Untitled%204.png)

```python
f'[{3.14:10f}]'
#'[ 3.140000]'
```

- Cuando no indicas la cantidad de decimales que requieres, Python añade los 6 lugares decimales por default.
- Los números que aparecen después de los dos puntos (:) indican la longitud del campo. Esta longitud ya incluye la cantidad de caracteres de la cadena. Por ejemplo, en el snippet [7], la cadena Alineación ocupa 10 caracteres y añade otros 5 en forma de espacios en blanco.
- También puedes alinear a la cadena con los símbolos > y <.

```python
f'[{"Alineación":12}{3.14:<10f}]'
#'[Alineación  3.140000  ]'

'''ALINEACIÓN A LA DERECHA (>)'''
f'[{"Alineación":>15}]'
#'[     Alineación]'

f'[{3.14:<10f}]'
#'[3.140000  ]'
```

### `f`-string: Centrar

```python
'''ALINEACIÓN AL CENTRO (^)'''

f'[{"Alineación":^12}{3.14:^10f}]'
#'[ Alineación 3.140000 ]'

'[{"Alineación":^15}]'
#'[  Alineación  ]'

f'[{3.14:^10.1f}]'
#'[     3.1    ]'
```

### `f`-string: Mostrar signo

```python
f'[{150:+10d}]'
#'[ +150]'
```

### `f`-string: Agregar ceros en los espacios en blanco

```python
f'[{150:+010d}]'
#'[+000000150]'
```

Regularmente a los números positivos no se les agrega el signo +. Pero, si requieres dejar el espacio en blanco para este tipo de números, utiliza un código como el siguiente.

```python
print(f'{27:d}\n{27: d}\n{-27: d}')
'''OUTPUT:
27
 27
-27
'''
```

### `f`-string: Comas para indicar miles o millones

```python
f'{111222333:,d}'
#'111,222,333'
f'{444555666.777:,.3f}'
#'444,555,666.777'
```

### `format`

```python
'{:0.4f}'.format(3.141592)
#'3.1416'

'''equivalente'''
f'{3.141592:0.4f}'
```

```python
'{} {}'.format('Nombre', 'Apellido')
#'Nombre Apellido'
```

- Repetir una cadena asignando valores enteros consecutivos

```python
'{0} {0} {0} {1} {2}'.format('Vamos','sigue','adelante')
#'Vamos Vamos Vamos sigue adelante'
```

- Trabajar con variables

```python
'{nombre} {apellido}'.format(nombre='Rogelio',apellido='García')
#'Rogelio García'
'{apellido} {nombre}'.format(nombre='Rogelio',apellido='García')
#'García Rogelio'
```

## Concatenar cadenas

- Usar símbolo `+` para concatenar cadenas

```python
s1='Hola'
s2='mundo'
s1 +=' '+s2
s1
#'Hola mundo'
```

- Repetir una misma cadena, de manera similar al snippet

```python
eco='feliz '
eco*=4
yo='estoy'
estado=yo+' '+eco

estado
#'estoy feliz feliz feliz feliz '
```

---

# 2. Otras opciones para las cadenas

```python
enunciado = '\t \n me gusta escuchar música alegre \t\t \n'
enunciado
#'\t \n me gusta escuchar música alegre \t\t \n'
```

## `strip`

Si requieres eliminar todos los espacios en blanco (esto incluye tabulaciones y saltos de línea), al inicio y al final del enunciado. El método strip realiza esta tarea.

```python
enunciado.strip()
#'me gusta escuchar música alegre'
```

## `lstrip`

Para eliminar los espacios en blanco a la izquierda (inicio) de la cadena

```python
enunciado.lstrip()
#'me gusta escuchar música alegre \t\t \n'
```

## `rstrip`

Para eliminar espacios de la derecha (final) de la cadena.

```python
enunciado.rstrip()
#'\t \n me gusta escuchar música alegre'
```

>⚠️ No es necesario volver a llamar a la variable enunciado para aplicar, en cada caso, las diferentes variantes del método `strip`. Esto ocurre porque la cadena original nunca se modifica (es inmutable).


## `capitalize`

El método capitalize, cambia la primera letra de una cadena por una mayúscula. Si la letra ya
es mayúscula, no se presenta ningún cambio.

```python
'me gusta eschuchar música alegre'.capitalize()
#'Me gusta eschuchar música alegre'
```

## `title`

El método title, cambia la primera letra de cada palabra de una cadena por una mayúscula. Si la
letra ya es mayúscula, en alguna de las palabras, en éstas, no se presenta ningún cambio.

```python
'me gusta eschuchar música alegre. bailemos'.title()
#'Me Gusta Eschuchar Música Alegre. Bailemos'
```

## Comparaciones

```python
'Python' == 'python'
#False
'Python' != 'python'
#True
'Python' > 'python'
#False
'Python' < 'python'
#True
'Python' >= 'python'
#False
'Python' <= 'python'
#True
```

## Buscar Cadenas

## `count`

Para contar el número de veces que aparece un trozo de cadena (substring) en una cadena más
grande, Python cuenta con el método count

```python
enunciado='quizás si quizás no quizás es una posibilidad'
enunciado.count('quizás')
#3
```

### `count`(palabra, inicio_de_busqueda)

![Untitled](/img/PyDS/C8/Untitled%205.png)

```python
enunciado.count('quizás',8)
#2
```

### `count`(palabra, inicio_de_busqueda, fin_de_busqueda)

![Untitled](/img/PyDS/C8/Untitled%206.png)

```python
enunciado.count('quizás',8,18)
#1
```

## `index`

El método `index` busca una subcadena dentro de una cadena, e indica el primer índice en donde aparece. Si la subcadena no está incluida, ocurre un error del tipo ValueError.

```python
enunciado.index('quizás')
#0
```

> El resultado indica que la cadena 'quizás' aparece en la primera palabra de la cadena
> 

## `rindex`

El método `rindex` realiza la misma tarea que `index`, pero inicia la búsqueda desde la parte final de la cadena.

![Untitled](/img/PyDS/C8/Untitled%207.png)

```python

enunciado.rindex('quizás')
#20
```

## `in` o `not in`

Para conocer si en la cadena se encuentra una subcadena, es posible utilizar los operadores `in` o `not in`.

```python
'Si' in enunciado
#False
'Si' in enunciado
#True
'Si' not in enunciado
#True
```

## `startswith` y `endswith`

Los métodos `startswith` y `endswith` regresan `True` si la cadena inicia o termina, respectivamente, con alguna subcadena específica.

```python
enunciado.startswith('quizás')
#True
enunciado.startswith('si')
#False
enunciado.endswith('posibilidad')
#True
enunciado.endswith('una')
#False
```

## tokenizar

>📎 Al leer un segmento de texto, automáticamente nuestra percepción visual nos hace mirarlo como
un conjunto de palabras individuales, a este proceso le llamaremos `tokenizar` y a cada palabra la llamaremos `token`.


### `split`

El método `split` sin argumentos tokeniza una cadena separando palabras con cada
espacio en blanco o como en este caso, con una coma, al finalizarla función regresa una lista de tokens

```python
letras='A,b,e,c,e,d,a,r,i,o'
letras.split(',')
#['A', 'b', 'e', 'c', 'e', 'd', 'a', 'r', 'i', 'o']
```

### `split(',',número_max_divisiones)`

```python
letras.split(',',4)
#['A', 'b', 'e', 'c', 'e,d,a,r,i,o']
```

### join

El método `join` concatena las cadenas en sus argumentos el cual debe ser un iterable y contienen
sólo cadenas, en otro caso ocurrirá una excepción tipo error del tipo `TypeError`.

```python
unir_palb=['p','a','l','a','b','r','a']
','.join(unir_palb)
#'p,a,l,a,b,r,a'
```

## Unir elementos de una lista

```python
','.join([str(n) for n in range(1,11)])
#'1,2,3,4,5,6,7,8,9,10'
```

## `splitlines`

El método `splitlines` regresa una lista de cadenas que representan líneas de texto.

```python
verso="""Ayer pensé en tí,
 creí que aquí estabas,
 y cuando mi rostro volví,
 note que me mirabas"""
verso
#'Ayer pensé en tí,\ncreí que aquí estabas,\ny cuando
# mi rostro volví,\nnote que me mirabas'

verso.splitlines()
#['Ayer pensé en tí,',
# 'creí que aquí estabas,',
# 'y cuando mi rostro volví,',
# 'note que me mirabas']
```

```python
verso.splitlines(True)
#['Ayer pensé en tí,\n',
# 'creí que aquí estabas,\n',
# 'y cuando mi rostro volví,\n',
# 'note que me mirabas']
```

## `isdigit`

Para verificar si un caracter es de cierto tipo (números dígitos)

```python
'123'.isdigit()
#True
'3.1416'.isdigit()
#False
'-34'.isdigit()
#False
```

## `isalnum`

Para verificar si un caracter es de cierto tipo (caracteres alfabéticos y numéricos)

```python
'Code84'.isalnum()
#True
'3.1416'.isalnum()
#False
'Calle 5 No 314'.isalnum()
#False
```

## raw strings

- Dentro de los caracteres que no son alfanuméricos, uno de ellos que es de bastante utilidad y al que está dedicado este espacio es la diagonal invertida o `backslash`.
- Esta estrategia permite utilizar la diagonal invertida como un carácter alfanumérico, sin el problema de que se confunda con alguna secuencia de escape.

```python
ubicación=r'C\usuario\documentos\praticas\mi_archivo.txt'
ubicación
#'C\\usuario\\documentos\\praticas\\mi_archivo.txt'
```

# 3. Expresiones Regulares

Una expresión regular es un patrón de coincidencia de texto, que tiene una sintaxis muy específica. Un ejemplo de una expresión regular son los números de un teléfono. Contienen 10 dígitos y los dos primeros indican la región del país. Así que al leer un número telefónico es posible reconocer la región a la que pertenece y si está bien escrito (dígitos completos)

Otros casos de expresiones regulares son: el código postal, el número de seguro social, el registro federal de contribuyente (RFC), la clave única de registro de población (CURP), las direcciones de correo electrónico, etc. Al verificar que todos estos objetos cumplen con el patrón adecuado, estarás dando una validación de los datos ingresados.

```python
import re
```

## `fullmatch`

```python
código = '9400354'
'Código correcto' if re.fullmatch(código,'9400355') else 'Código incorrecto'
#'Código incorrecto'
'Código correcto' if re.fullmatch(código,'9400354') else 'Código incorrecto'
#'Código correcto'
```

Las expresiones regulares, en general contienen símbolos especiales llamados meta caracteres como: \, @, #, $ * y signos de agrupación como [ ], { }, ( )

## `r-strings`

```python
'Teléfono correcto' if re.fullmatch(r'\d{10}', '5512312312') else 'Teléfono incorrecto'
#'Teléfono correcto'
'Teléfono correcto' if re.fullmatch(r'\d{10}', '12312312') else 'Teléfono incorrecto'
#'Teléfono incorrecto'
```

```python
'Escritura válida' if re.fullmatch('[A-Z][a-z]*','rogelio') else 'Escritura no válida'
#'Escritura no válida'
'Escritura válida' if re.fullmatch('[A-Z][a-z]*','Laura') else 'Escritura no válida'
#'Escritura válida'
'Escritura válida' if re.fullmatch('[A-Z][a-z]*','Rogelio') else 'Escritura no válida'
#'Escritura válida'
```

## `[^a-z]`

Al escribir `[^a-z]`, estarás verificando si algún caracter no coincide con las letras minúsculas.

```python
'Correcto' if re.fullmatch('[^a-z]','O') else 'Incorrecto'
#'Correcto
'Correcto' if re.fullmatch('[^a-z]','w') else 'Incorrecto'
#'Incorrecto'
'Correcto' if re.fullmatch('[^a-z]','o') else 'Incorrecto'
#'Incorrecto'
```

Para verificar si al menos una letra minúscula aparece en el nombre, puedes utilizar `[a-z]+`

```python
'Correcto' if re.fullmatch('[A-Z][a-z]+','Eva') else 'Incorrecto'
#'Correcto'
'Correcto' if re.fullmatch('[A-Z][a-z]+','E') else 'Incorrecto'
#'Incorrecto'
```

## `d{n1,n2}`

Para verificar si las expresiones contienen al menos cuatro dígitos

```python
'Correcto' if re.fullmatch(r'\d{4,}','9875') else 'Incorrecto'
#'Correcto
'Correcto' if re.fullmatch(r'\d{4,}','987654321') else 'Incorrecto'
#'Correcto'
'Correcto' if re.fullmatch(r'\d{4,}','1.002') else 'Incorrecto'
#'Incorrecto'
```

Para verificar si las expresiones contienen entre `n1` y `n2` dígitos.

```python
'Correcto' if re.fullmatch(r'\d{8,10}','12') else 'Incorrecto'
#'Incorrecto
'Correcto' if re.fullmatch(r'\d{8,10}','123456789') else 'Incorrecto'
#'Correcto'
'Correcto' if re.fullmatch(r'\d{8,10}','123456789012') else 'Incorrecto'
#'Incorrecto'
```

## re.`sub`

Son patrones de busqueda definidos con una sintaxis formal.

La función `sub` requiere de tres argumentos

- El modelo de coincidencia, en este ejemplo el salto de línea (`'\n'`)
- El texto de reemplazo, en este ejemplo, la coma (`', '`)
- La cadena donde será buscado el modelo (`'Salto 1\nSalto 2\nSalto 3'`)

```python
import re
re.sub(r'\n',', ','Salto 1\nSalto 2\nSalto 3')
#'Salto 1, Salto 2, Salto 3'
```

## re.`split`

La función `split` puede tokenizar una cadena utilizando una expresión regular al especificar un delimitador y regresar una cadena. Haremos una separación utilizando como delimitador, una coma, o una coma seguida por espacios en blanco.

```python
import re
re.split(r',\s*','s, e,p,a, r, a, d,o')
#['s', 'e', 'p', 'a', 'r', 'a', 'd', 'o']
```

```python
re.split(r',\s*','s, e,p,a, r, a, d,o', maxsplit=2)
#['s', 'e', 'p,a, r, a, d,o']
```

## `search`

La función `search` busca en una cadena la primera coincidencia de una expresión regular

```python
import re
busca1=re.search('texto', 'Esto es solo texto de prueba')
busca1.group() if busca1 else 'no se encontró'
#'texto'

busca2=re.search('no', 'Esto es solo texto de prueba')
busca2.group() if busca2 else 'no se encontró'
#'no se encontró'
```

En el siguiente caso, al módulo `re` se le agrega una bandera que ignora si la coincidencia en la cadena está escrita con mayúsculas o minúsculas.

```python
busca3=re.search('GUIDO','Guido Van Rossum',flags=re.IGNORECASE)
busca3.group() if busca3 else 'no se encontró'
#'Guido'
```

El meta caracter `^` al principio de una cadena regular, es un ancla que indica a Python buscar la expresión que coincide solo con el inicio de la cadena. Si la encuentra, la muestra

```python
buscador=re.search('^Guido','Guido Van Rossum es el creador de Python',flags=re.IGNORECASE)
buscador.group() if buscador else 'no se encontró'
#'Guido'

buscador=re.search('^Rossum','Guido Van Rossum es el creador de Python',flags=re.IGNORECASE)
buscador.group() if buscador else 'no se encontró'
#'no se encontró'
```

El meta caracter `$` al final de una cadena regular, es un ancla que indica a Python buscar la expresión que coincide solo al final de la cadena. Si la encuentra, la muestra.

```python
buscador=re.search('Rossum$','Guido Van Rossum es el creador de Python',flags=re.IGNORECASE)
buscador.group() if buscador else 'no se encontró'
#'no se encontró'

buscador=re.search('Python$','Guido Van Rossum es el creador de Python',flags=re.IGNORECASE)
buscador.group() if buscador else 'no se encontró'
#'Python'
```

## `findall` y `finditer`

`findall` encuentra todas las subcadenas en una cadena y `finditer` que realiza la misma tarea que `findall`. La gran diferencia es que `finditer` regresa una evaluación floja de objetos que coinciden.

```python
import re
usuario='Francisco García, Tel_casa:52-1234-1234, Celular:52-4321-4321'
re.findall(r'\d{2}-\d{4}-\d{4}',usuario)
#['52-1234-1234', '52-4321-4321']
```

```python
for telefono in re.finditer(r'\d{2}-\d{4}-\d{4}', usuario):
print(telefono.group())
#52-1234-1234
#52-4321-4321
```

# 4. Pandas y Expresiones Regulares

El RFC sin homoclave (sin registro oficial), consta de 4 letras y 6 dígitos. Las letras están vinculadas al nombre de la persona y los dígitos con la fecha de nacimiento.

```python
import pandas as pd
rfc=pd.Series({'Usuario1': 'COG891201','Usuario2': 'GUHA911020'})
rfc
'''OUTPUT:
Usuario1 COG891201
Usuario2 GUHA911020
dtype: object
'''
```

Para definir la expresion regular y determinar las coincidencias

```python
rfc.str.match(r'\w{4}\d{6}')
'''OUTPUT:
Usuario1 False
Usuario2 True
dtype: bool
'''
```

> El Usuario1 no tiene registrado de manera correcta su RFC. El método match aplica la expresión regular `\w{4}\d{6}` a cada elemento de Series, validando si los elementos tienen exactamente 4 letras y 6 dígitos.
> 

>⚠️  Observa que no es necesario escribir un ciclo para revisar cada uno de los elementos, `match` lo realiza de manera automática.


## Ejemplo 1

Ahora crearemos una cadena que contiene los nombres de tres países, su código ISO 3 y el prefijo telefónico.

```python
códigost=pd.Series(['México, MEX 52','Colombia, COL 57','Chile, CHL 56'])
códigost
'''OUTPUT:
0 México, MEX 52
1 Colombia, COL 57
2 Chile, CHL 56
dtype: object
'''

códigost.str.contains(r' [A-Z]{3}')
'''OUTPUT:
0 True
1 True
2 True
dtype: bool
'''

códigost.str.match(r' [A-Z]{3}')
'''OUTPUT:
0 False
1 False
2 False
dtype: bool
'''
```

- La función `contains`se usa para mostrar que los tres elementos de Series contienen subcadenas que coinciden con `[A-Z]{3}`.Es decir, la cadena tiene 3 letras mayúsculas.
- `match` se usa para mostrar si alguno de los elementos en Series coincide completamente con `[A-Z]{3}`. Aunque las letras mayúsculas si aparecen, también aparecen espacios en blanco y números, por lo que no hay, en ningún caso una coincidencia completa.

[Pandas para los que vienen de Excel](/img/PyDS/C8/Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b.md)