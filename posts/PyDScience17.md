---
title: 'Analisis Exploratorio de Datos'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Analisis Exploratorio de Datos

# Analisis Exploratorio de Datos

## 1.- Introducción

Los dataframes no son nativos de Python, vienen de una libreria llamada **Pandas**

Lo primero que se necesita para trabajar con susodichos dataframes es... importar Pandas

```python
import pandas as pd
```

Ok, ahora vamos a crear un Dataframe que almacene todos los datos que vienen en nuestro archivo de Excel CSV

```python
df_train=pd.read_csv("train.csv")
```

## Importar  base de datos

### **head**

```python
df_train.head(20)
#OUTPUT: Muestra las 20 primeras filas
```

![Untitled](/img/PyDS/Analisis/Untitled.png)

### **shape**

```python
df_train.shape
#OUTPUT: (1460, 81) --> (filas, columnas)
```

Si quieremos ver una columna en especifico ponemos el nombre de la columna entre corchetes:

```python
df_train['Id']
#OUTPUT: 
#Muestra las 5 primeras filas
#Muestra las 5 últimas filas
```

![Untitled](/img/PyDS/Analisis/Untitled%201.png)

Para ver 2 columnas a la vez:

```python
df_train[['Id','SalePrice']]
#OUTPUT: 
#Muestra las 5 primeras filas
#Muestra las 5 últimas filas
```

![Untitled](/img/PyDS/Analisis/Untitled%202.png)

### mean

El método **mean** te da los promedios que quieres saber del DF

```python
df_train['SalePrice'].mean()
#OUTPUT:
#180921.19589041095
```

### **describe**

El método **Describe** te da un resumen de todo en el Dataframe

```python
df_train.describe()
```

![Untitled](/img/PyDS/Analisis/Untitled%203.png)

## 2.- Primeros pasos - traer todo lo importante

Importa todas las librerías que vas a necesitar

- pandas como pd
- matplotlib.pyplot como plt
- seaborn como sns
- numpy como np
- scipy.stats traer norm
- sklearn.preprocessing traer standardscaler
- scipy traer stats
- warnings
- y %matplotlib inline

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
from scipy.stats import norm
from sklearn.preprocessing import StandardScaler
from scipy import stats
import warnings

%matplotlib inline
```

Al final veremos que las columnas con mayor impacto son:

**Variables de Construcción**

- CalidadTotal
- AñoConstruccion

**Variables de Espacio**

- AreaSotano
- AreaVivienda

## 3.- Analisis de Precio de Ventas

```python
df_train['SalePrice'].describe()
```

![Untitled](/img/PyDS/Analisis/Untitled%204.png)

### Gráfica de **distplot**

Veremos que:

- Se desvía de la distribucion normal
- Tiene Skew positivo (oblicuidad)
- Muestra Peakedness (kurtosis??)

```python
sns.distplot(df_train['SalePrice'])
```

![Untitled](/img/PyDS/Analisis/Untitled%205.png)

Podemos conocer el skewness y la kurtosis de la gráfica usando los métodos **skew** y **kurt**

```python
sns.distplot(df_train['SalePrice']).kurt()
#OUTPUT:
#6.536281860064529
```

```python
sns.distplot(df_train['SalePrice']).skew()
#OUTPUT:
#1.8828757597682129
```

![Untitled](/img/PyDS/Analisis/Untitled%206.png)

### ScatterPlot de PrecioVenta vs AreaVivienda.

Nota como vamos a reducir el dataframe a solo 2 columnas para no tener que usar todo

Primero declara una variable var que contenga el area vivible

```python
var="GrLivArea"
```

Luego vamos a usar pd.concat para crear una tabla de solo 2 columnas con area vivible (var) y Precio de venta que se llame data

```python
data=pd.concat([df_train['SalePrice'],df_train[var]],axis=1)
data.head(20)
```

![Untitled](/img/PyDS/Analisis/Untitled%207.png)

**data.plot.scatter para crear una grafica de scatterplot.**

```python
data.plot.scatter(x =var,y='SalePrice',ylim=(0,800000));
```

![Untitled](/img/PyDS/Analisis/Untitled%208.png)

> El "PrecioVenta" y "GrLivArea" no tienen una relación tan lineal. A mayor  area habitable, mayor el PrecioVenta.
> 

### ScatterPlot de PrecioVenta vs AreaSotano.

```python
var='TotalBsmtSF'
data=pd.concat([df_train['SalePrice'],df_train[var]],axis=1)
data.plot.scatter(x =var,y='SalePrice',ylim=(0,800000));
```

<aside>
⚠️ axis=1
pega las dos columnas en el eje vertical

</aside>

![Untitled](/img/PyDS/Analisis/Untitled%209.png)

> El "PrecioVenta" y "TotalBsmtSF" no tienen una relación tan lineal. A mayor  area en sotano, mayor el PrecioVenta.
> 

### Relaciones categóricas

### Gráfica de boxplot

La gráfica de boxplot permite verificar el efecto de la Calidad sobre el precio de ventas.

```python
var = "OverallQual"
data=pd.concat([df_train['SalePrice'],df_train[var]],axis=1)
data.head(5)
```

![Untitled](/img/PyDS/Analisis/Untitled%2010.png)

En dos variables f y ax, se guarda el resultado de un plt.subplots ➡️  donde se define la nueva figura donde existirá la gráfica que se va a crear. 

```python
f,ax=plt.subplots(figsize=(8,6))
```

Definimos fig como una variable donde haremos un sns.boxplot (para guardar la grafica)
y definiremos el eje fig.axis de 0 a 8000000

### Precio de Venta vs Calidad

```python
f,ax=plt.subplots(figsize=(8,6))
fig=sns.boxplot(x=var,y='SalePrice',data=data)
fig.axis(ymin=0,ymax=800000)
```

![Untitled](/img/PyDS/Analisis/Untitled%2011.png)

> A mayor calidad mayor disparidad de precios existe (debido a que las cajas de colores se agrandan más).
> 

### Precio de Venta vs Año Construida

```python
var = "YearBuilt"
data=pd.concat([df_train['SalePrice'],df_train[var]],axis=1)
data.head(5)
```

```python
f,ax=plt.subplots(figsize=(16,8))
fig=sns.boxplot(x=var,y='SalePrice',data=data)
fig.axis(ymin=0,ymax=800000)
plt.xticks(rotation=90)
```

![Untitled](/img/PyDS/Analisis/Untitled%2012.png)

<aside>
⚠️ **plt.xticks(rotation=90)**
Todos los titulos de X rotan a 90°

</aside>

## 4.- Confirmando nuestra intuición

### 4.1.- Matriz de Correlación

Lo primero es armar una matriz de correlación (mapa de calor) para ver cuales son las variables más correlacionadas

### df_train.corr()

```python
corrmat=df_train.corr()
```

Luego unas f,ax para declarar un plt.subplots

```python
f,ax=plt.subplots(figsize=(12,9))
fig=sns.heatmap(corrmat,vmax=.8,square=True)
```

![Untitled](/img/PyDS/Analisis/Untitled%2013.png)

> Mientras más claro este  ⏹️, significa que mayor correlación hay.
Las correlaciones perfectas estan en la diagonal del gráfico.( Id con Id tienen correlación perfecta)
> 

### 4.2.- Matriz de Correlación con Números

```python
k=10
cols=corrmat.nlargest(k, 'SalePrice')['SalePrice'].index
cm = np.corrcoef(df_train[cols].values.T)
sns.set(font_scale=1.25)

#heatmap 
hm = sns.heatmap(cm, cbar=True, annot=True, square=True, fmt='.2f', annot_kws={'size': 10}, yticklabels=cols.values, xticklabels=cols.values)
plt.show()
```

cols:

![Untitled](/img/PyDS/Analisis/Untitled%2014.png)

cm: (se transpone)

![Untitled](/img/PyDS/Analisis/Untitled%2015.png)

![Untitled](/img/PyDS/Analisis/Untitled%2016.png)

**Podemos ver que:**

- Calidad, AreaVivienda y area Sotano estan muy fuertemente correlacionadas con PrecioVenta
- Las variables de garage están super correlacionadas
- Sotano y 1er piso son parecidas
- Y AñoConstruccion esta ligeramente correlacionada con PrecioVenta.

### 4.3.- Scatter Plots entre Sale Price y variables Correlacionados

Por utlimo, hagamos scatterplots usando seabron de todas las posibles relaciones que podríamos tener en nuestro dataset - entre las variables que nos importan claro.

```python
sns.set()
cols = ['SalePrice', 'OverallQual', 'GrLivArea', 'GarageCars', 'TotalBsmtSF', 'FullBath', 'YearBuilt']
sns.pairplot(df_train[cols], height=2.5)
plt.show()
```

<aside>
⚠️ set()
Para configurar el estilo

</aside>

![output.png](/img/PyDS/Analisis/output.png)