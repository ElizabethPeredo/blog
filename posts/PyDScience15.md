---
title: 'Capítulo 15. Introducción a Machine learning'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 15. Introducción a Machine learning.

> 📌 Machine Learning es un tema grande y complejo que puede emplearse en muchos problemas pero que se caracteriza por plantear soluciones sutiles, es decir, en lugar de utilizar la experiencia del programador para resolver alguna situación específica para tales problemas, la programación está orientada a aprender de los datos.


# 1. Tipos de Machine Learning

Existen básicamente dos tipos de Máquinas de Aprendizaje (Machine Learning)

## Machine Learning Supervisado

Si los datos para trabajar tienen etiquetas

Un ejemplo de este tipo de aprendizaje es la identificación de personas mediante el reconocimiento facial. El algoritmo se entrena con un conjunto de fotos de los integrantes de una empresa. Al momento de ingresar a las instalaciones, el algoritmo reconoce a los miembros de la empresa y también a aquellos que no lo son.

El aprendizaje supervisado emplea dos técnicas específicas

1. La clasificación en donde se aplican técnicas de análisis multivariado como el análisis de cluster o análisis de discriminación
2. El pronóstico, donde se aplican técnicas de regresión. Y que puede ser regresión simple, múltiple o bayesiana.

## Machine Learning No Supervisado

Si los datos para trabajar no tienen etiquetas o si se pretende realizar una reducción de variables.

Este tipo de aprendizaje lo pueden utilizar los reclutas que buscan candidatos para postularlos en algún puesto específico. El algoritmo debe realizar sugerencias de aquellas personas cuyo currículum se adapta más a un perfil específico. En términos académicos, el algoritmo podría ser útil para identificar estudiantes con características comunes que puedan tener problemas de reprobación o deserción.

El aprendizaje no supervisado emplea también técnicas del análisis de clúster y de reducción de dimensiones como análisis de componentes principales entre otros métodos

## La secuencia de un estudio típico de Ciencia de Datos:

- Cargar la base de datos
- Exploración básica de datos
- Transformación de datos
- Separación de datos para entrenamiento y prueba
- Creación de un modelo
- Entrenamiento y prueba del modelo
- Ajuste y evaluación del modelo
- Realizar predicciones

# 2. Machine Learning Supervisado. Clasificación y Pronóstico

## Scikit-Learn

Scikit-Learn (o sklearn) es una librería de Python para Machine Learning. Las técnicas que emplea están encapsuladas, por lo que no es fácil acceder a la intrincada complejidad de los algoritmos
que utiliza. Con sklearn es posible entrenar y probar el modelo.

La base de datos Digits contiene 1797 imágenes de los números dígitos escritos a mano. El objetivo es predecir el dígito de una imagen específica. Como hay 10 dígitos, este es un problema de
clasificación múltiple.

### `k- nearest neighbors`, `k-NN`

![Untitled](/img/PyDS/C15/Untitled.png)

Se requiere predecir a que clase se deben asignar las muestras A, B y C. Si seleccionamos como parámetro k = 4, el algoritmo k-NN realizará la asignación utilizando los cuatro vecinos más cercanos de cada muestra. Entonces:

- Los cuatro vecinos más cercanos a la muestra A son todos círculos verdes. Así, se estima que A pertenece a la clase círculos verdes.
- Los cuatro vecinos más cercanos a la muestra B son todos triángulos azules. Así, se estima que B pertenece a la clase triángulos azules.
- En el caso de la muestra C, no es evidente la clase a la cual hay que asignarla. Pero siguiendo el algoritmo k-NN, de los 4 vecinos más cercanos, 3 son triángulos azules. Por lo que la muestra C debe asignarse a la clase triángulos azules

```python
%matplotlib inline
import matplotlib.pyplot as plt
from sklearn import datasets, svm, metrics
from sklearn.model_selection import train_test_split
```

# 3. Cargar la base de datos

## `load_digits`

La función load_digits() del módulo sklearn.datasets regresa un objeto de scikit-learn que contiene la información de la base de datos Digits. Si quieres conocer esta descripción, puedes escribir
print(digits.DESCR).

```python
digits=datasets.load_digits()
```

La base de datos contiene 1797 muestras (imágenes de los dígitos), cada una con 64 valores en un rango de 0 a 16 y que representan la intensidad de un pixel. Con Matplotlib, es posible visualizar las intensidades en escalas de grises, desde le blanco (0) hasta el negro (16).

![Untitled](/img/PyDS/C15/Untitled%201.png)

## `target`

El arreglo objetivo (target) contiene las etiquetas de las imágenes. El arreglo es llamado target, debido a que compararás un método de identificación con las etiquetas de las imágenes que sumiremos correctas. Esto es, si el método dice que la imagen es 8 y coincide con la etiqueta 8, la clasificación será correcta, pero, puede ocurrir que no lo sea.

```python
digits.target[::100]
#array([0, 4, 1, 7, 4, 8, 2, 2, 4, 4, 1, 9, 7, 3, 2, 1, 2, 5])
```

# 4. Transformación de datos

# 5. Exploración básica de datos

# 6. Separación de datos para Entrenamiento y Prueba

# 7. Creación del modelo

# 8. Entrenamiento y prueba del modelo

# 9. Pronóstico de clases de dígitos

# 10. Ajuste y evaluación del modelo

# 11. Validación Cruzada K-Fold

# 12. Regresión Lineal Múltiple

# 13. Cargar la base de datos

# 14. Exploración básica de datos

# 15. Separación de datos para entrenamiento y prueba

# 16. Creación, entrenamiento del modelo

# 17. Prueba del modelo

# 18. Ajuste y evaluación del modelo

# 19. Comparando diferentes modelos

# 20. Machine Learning No Supervisado. Reducción de Dimensiones