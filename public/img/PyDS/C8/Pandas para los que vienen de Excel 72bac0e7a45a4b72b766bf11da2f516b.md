# Pandas para los que vienen de Excel

<aside>
🟢 **INDEX:**

</aside>

Como la mayoría de ustedes tienen algo de familiaridad con Excel, vamos a ver varios ejemplos de como ciertos conceptos básicos de hoja de cálculo pueden ser realizados con pandas.
Lo primero será importar pandas

```python
import pandas as pd
```

y Numpy

```python
import numpy as np
```

# Los elementos de Pandas vs Excel

DataFrame = hoja de trabajo
Series = Columna
Index = Encabezado de fila
NaN = celda vacia

# Importar datos a Pandas

Vamos trayendo nuestros datos del restaurand a un datafarme (desde csv)

```python
restdf=pd.read_excel("Datos Restaurante.xlsx")
restdf.head(20)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled.png)

Y nuestros costos a un segundo dataframe (desde excel)

```python
preciosdf=pd.read_csv("Precios Restaurant.csv")
preciosdf.head(20)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%201.png)

# Operaciones en Pandas

Vamos creando una columan nueva de ganancias que será igual a precio menos costo de precios y costos

```python
preciosdf["Precio"]=preciosdf["Precio"].str.replace("$","").astype("float")
preciosdf["Costo"]=preciosdf["Costo"].str.replace("$","").astype("float")
```

> OUTPUT: (WARNING)
`<ipython-input-8-e6b1883cfc52>:1: FutureWarning: The default value of regex will change from True to False in a future version. In addition, single character regular expressions will*not* be treated as literal strings when regex=True.
preciosdf["Precio"]=preciosdf["Precio"].str.replace("$","").astype("float")`
> 

```python
preciosdf.head(20)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%202.png)

```python
preciosdf["Ganancias"] = preciosdf["Precio"]-preciosdf["Costo"]
preciosdf.head(20)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%203.png)

## `drop`

<aside>
💡 Asociado a un dataframe pandas, devuelve una copia del mismo tras eliminar las filas o columnas indicadas

</aside>

### Elimar columna

```python
restdf=restdf.drop("Hora de Cobro",axis=1)
restdf
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%204.png)

## Filtro de datos

Arma un nuevo dataframe con todos los platillos de más de 100 pesos de precio (usando filtros)

```python
precioscarosdf=preciosdf[preciosdf["Precio"]>100]
precioscarosdf.head(30)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%205.png)

Arma una nueva columna que clasifique platillos en alto/bajo margen, según si su ganancia es mayor a 100 pesos

```python
preciosdf["Margen"]=np.where(preciosdf["Ganancias"]>100,"Alto","Bajo")
preciosdf.head(10)
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%206.png)

## Cambiar nombre de columna

Cambiale el nombre a la columna de Atendió por Mesero en el df de Restaurant

```python
restdf=restdf.rename(columns={"Atendió":"Mesero"})
```

![Untitled](Pandas%20para%20los%20que%20vienen%20de%20Excel%2072bac0e7a45a4b72b766bf11da2f516b/Untitled%207.png)

## Merging o Vlookup

Vamos a juntar los 2 dataframes usando un left join

Cuales son las diferencias entre merge de Python y Vlookup de Excel?

## Quitar duplicados

Crea un nueva Serie con la columna de "Mesero" - obten los valores únicos

## Tablas Dinámicas

Pandas también nos permite analizar datos mediante tablas dinámicas
Vamos creando una tabla dinámica que nos muestre las ventas por categoría

Ahora una tabla dinámica que nos muestre las ventas por categoría y por tipo en la columna

Crea una tabla dináica que muestre las ventas por tipo y categoría (filas), y por mesero (columnas)

Crea una tabla dinámica que muestre las ventas promedio por mesero