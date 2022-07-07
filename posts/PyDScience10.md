---
title: "Capítulo 10. Programación orientada a objetos"
date: "Julio 5, 2022"
type: "Python"
cover_image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
---
# Capítulo 10. Programación orientada a objetos.

# 1. Métodos y Clases

![Untitled](/img/PyDS/C10/Untitled.png)

```python
class Mascota:
	#atributos
	tipo='pequeño'
	raza='chihuahua'
	tarea='guardián'
perro=Mascota() #Objeto
""" Atributos de objeto."""
print(perro.raza)
#chihuahua
print(perro.tarea)
#guardián
```

>⚠️ Una convención en Python al definir los nombres de las clases, es que el nombre de la clase debe
empezar con una letra mayúscula.


## `setattr`

Para cambiar alguno de los atributos

```python
setattr(perro, 'tarea', 'amigo')
print(perro.raza)
print(perro.tarea)
chihuahua
amigo
```

## `delattr`

Para borrar alguno de los atributos

```python
delattr(perro,'tarea')
```

## Definir los atributos para cada objeto

```python
eva=Registro()
laura=Registro()
luis=Registro()
eva.edad = 30
eva.experiencia = 6
eva.edo_civ = 'soltera'
laura.edad = 32
laura.experiencia = 5
laura.edo_civ = 'casada'
luis.edad = 28
luis.experiencia = 1
luis.edo_civ = 'soltero'
```

## Ver atributos

```python
print(luis.experiencia)
print(eva.edo_civ)
print(laura.edad)
```

![Untitled](/img/PyDS/C10/Untitled%201.png)

## Método

>📌 Un `método` es una función que realizará el objeto y que está definida dentro de una clase.


```python
class Oferta:
	def descuento(self):
	self.costo=1200
	self.desc=0.15
```

> La clase se llama Oferta, y el método descuento
> 

```python
rebaja=Oferta()
rebaja.descuento()
```

> **↪** Indican que el objeto esta en la clase Oferta y va a utilizar el método descuento.
> 

Para mostrar la rebaja puedes usar nuevamente la función `print`:

```python
print(rebaja.costo*rebaja.desc)
#180
```

```python
class Nombre_clase:
	def nombre_metodo(self):
		self.nombre_variable=valor_o_tarea
```

# 2. La clase Cuenta

```python
from decimal import Decimal
class Cuenta:
		def __init__(self,nombre,ahorro):
	if ahorro < Decimal('0.00'):
raise ValueError('El capital inicial debe ser >=$0.00')
self.nombre=nombre
self.ahorro=ahorro
def deposito(self,cantidad):
if cantidad < Decimal('0.00'):
raise ValueError('La cantidad debe ser positiva')
self.ahorro+=cantidad
```

>📌 El método  `__init__` cambia la forma de inicializar el método. Cuando la clase se aplica a un objeto, es lo que primero se ejecuta.


Aplicaremos esta clase a un caso particular con el fin de observar el comportamiento de la rutina.

```python
cuenta1=Cuenta('Juan',2000)
```

En este caso se define el objeto cuenta1 en la clase Account, con parámetros Juan y 2000. Juan es quien abre la cuenta de ahorro con un capital inicial de $2000. Para verificar:

```python
print(cuenta1.nombre)
#Juan
print(cuenta1.ahorro)
#2000
```

Si Juan hace un depósito de $2000, entonces, el programa debe acumular esta cantidad en el ahorro:

```python
cuenta1.deposito(500)
print(cuenta1.ahorro)
#2500
```

Al tratar de ingresar en ahorro una cantidad negativa:

```python
cuenta1.deposito(-1000)
```

![Untitled](/img/PyDS/C10/Untitled%202.png)

# 3. Herencia

A la clase inicial se le llama padre, y a las otras se les llama clases hijos, de aquí el nombre de herencia.

# 4. La clase Personal

```python
class Personal:
		pass

	def __init__(self,nombre,profesión,cargo):
		self.nombre=nombre
		self.profesión=profesión
		self.cargo=cargo

	def detalle(self):
		return '{} es un {} y tiene el cargo de {}'.format(self.nombre,

self.profesión, self.cargo)
```

> El constructor **init** indica que los objetos para la clase Personal deben tener 3 parámetros, nombre, profesión y cargo. Al llamar a algún objeto en esta clase, regresa el método llamado detalle, que muestra la información básica que tiene algún elemento del personal.
> 

Ahora se muestran otras dos clases con la peculiaridad de que ambas llaman a la estructura de la clase Personal. Al hacer esto, tales clases heredan la estructura de la primera.

```python
class pers_nuevo(Personal):
	def contratacion(self,contrato):
		return '{} tiene contrato: {}'.format(self.nombre,contrato)

class pers_advo(Personal):
	def contratacion(self,contrato):
		return '{} tiene contrato: {}'.format(self.nombre,contrato)
```

Ahora utilizaremos el constructor para diseñar un objeto de la clase pers_nvo que tiene los atributos de Personal y el método detalle.

```python
ingeniero=pers_nuevo('Paco','Ingeniero en Sistemas',"Supervisión")
print(ingeniero.detalle())
#Paco es un Ingeniero en Sistemas y tiene el cargo de Supervisión
```

También puedes solicitar del objeto ingeniero, con los atributos de las otras clases

```python
print(ingeniero.contratacion('Temporal'))
#Paco tiene contrato: Temporal
```

## Ejemplo 2

```python
from decimal import Decimal
class Cuenta:
def __init__(self,nombre,capital): if capital < Decimal('0.00'):
raise ValueError('El capital inicial debe ser >=$0.00') self.nombre=nombre
self.capital=capital
def informacion(self):
return '{} tiene en su cuenta ${}'.format(self.nombre,self.capital)
```

```python
class Ahorro(Cuenta):
	def cantidad(self,deposito):
		if deposito < Decimal('0.00'):
			raise ValueError('La cantidad a depositar debe ser positiva')
		self.capital+=deposito
		return '{} tiene ahora en su cuenta {}'.format(self.nombre,self.capital)
```

```python
class Gasto(Cuenta):
	def cantidad(self,retiro):
		if retiro < Decimal('0.00'):
			raise ValueError('La cantidad a retirar debe ser positiva')
		#if retiro>capital:
			#raise ValueError('No tiene fondos suficientes')
		self.capital-=retiro
		return '{} tiene ahora en su cuenta {}'.format(self.
		nombre, self.capital)
```

```python
cuenta1=Ahorro('Juan',2000)
print(cuenta1.informacion())
Juan tiene en su cuenta $2000 print(cuenta1.capital)
#2000
cuenta1.cantidad(1500)
'Juan tiene ahora en su cuenta 3500'
cuenta2=Gasto('Paco',5000)
print(cuenta2.informacion())
#Paco tiene en su cuenta $5000
cuenta2.cantidad(50)
'Paco tiene ahora en su cuenta 4950'
print(cuenta2.capital)
#4950
```

Ahora el usuario retira 5000:

```python
cuenta2.cantidad(5000)
'Paco tiene ahora en su cuenta -50'
```

Para terminar la parte de la herencia, es posible verificar si las clases Gasto y Ahorro son clases hijo
o subclases de Cuenta

```python
print(issubclass(Ahorro,Cuenta))
#True
print(issubclass(Gasto,Cuenta))
#True
print(issubclass(Gasto,Ahorro))
#False
```

> Cuenta y Ahorro funcionan de manera independiente, aunque tengan una misma clase origen.
> 

# 5. Métodos de clase

Al utilizar este método se antepone el método `@classmethod`. Una característica importante es que, al invocarlo, no es necesario crear el objeto.

```python
class Emergencia:
	def __init__(self,tipo):
		self.tipo=tipo def __repr__(self):
		return f'Emergencia({self.tipo !r})'

	@classmethod
	def Colombia(cls):
		return cls(['Accidente','Policía','Marque 123'])
	
	@classmethod
	def Salvador(cls):
		return cls(['Accidente','Policía','Marque 911'])
	
	@classmethod
	def Paraguay(cls):
		return cls (['Bomberos', 'Policía', 'Marque 131'])

print(Emergencia.Paraguay())
Emergencia(['Bomberos', 'Policía', 'Marque 131'])
```

> En este tipo de métodos utiliza la palabra reservada clc en lugar de self. Observa que no hay definido un objeto, por lo que el método trabaja con los valores definidos entre las distintas clases.
> 

```python
class Emergencia:
	def __init__(self,emergencia,numero):
		self.emergencia=emergencia self.numero=numero

	def __repr__(self):
		return(f'Emergencia({self.emergencia}, 'f'{self.numero})')
	
	def pais(self):
		return self.pais_emergencia(self.numero)
	
	@staticmethod
	def paises(A):
		return f'Costa Rica, Ecuador, El Salvador, E.U., México'
		nueva_emergencia=Emergencia(['Policía','Ambulancia','Bomberos'],911)

print(nueva_emergencia.emergencia)
['Policía', 'Ambulancia', 'Bomberos'] print(nueva_emergencia.numero)
#911
print(nueva_emergencia.paises(911))
#Costa Rica, Ecuador, El Salvador, E.U., México
```

> El ejemplo muestra el tipo de emergencia que puede atenderse cuando se llama al número 911. En la segunda parte se utiliza un método estático que trabaja de manera independiente a la primera parte. Cuando se invoca, aparecen algunos países que emplean al número 911 como número de emergencia. Este número, aunque es el mismo que en el método de instancia, refieren a dos tareas diferentes. De aquí que se haya empleado el método estático.
> 

# 6. Polimorfismo

El `polimorfismo` se define como la capacidad que tienen los objetos, en diferentes clases, para usar un comportamiento o un atributo con el mismo nombre, pero con diferente valor.

![Untitled](/img/PyDS/C10/Untitled%203.png)

```python
class Matematicas: num_creditos = 8 def creditos(self):
	print('Matemáticas tiene 8 créditos')
class Idioma: num_creditos = 5 def creditos(self):
	print('Idioma tiene 5 créditos')
#Hay un objeto con diferentes valores
#Hay dos clases con el mismo atributo
```

Para probar el código, se crea un objeto, en este caso asignatura

```python
asignatura=Matematicas()
asignatura.creditos()
```

## Ejemplo 1

```python
class Pais:
	def moneda(self):
		print('Cada país tiene una moneda propia')
class honduras(Pais):
	def moneda(self):
		print('En Honduras, la divisa es la Lempira')
class nicaragua(Pais):
	def moneda(self):
		print('En Honduras, la divisa es el Córdova')
class paraguay(Pais):
	def moneda(self):
		print('En Paraguay, la divisa es el Guaraní')

#Para mostrar los resultados
divisa=Pais()
divisa.moneda()

#Cada país tiene una moneda propia
divisa_nicaragua=nicaragua()
divisa_nicaragua.moneda()
```

## Ejemplo 2

En esta parte se definen las clases que se importan de las librerías commissionemployee y decimal respectivamente.

```python
"""Pago a empleado por comisión."""
from commissionemployee import CommissionEmployee
from decimal import Decimal
```

### `super`

El método `super()`, se utiliza para llamar métodos definidos y en la herencia múltiple. Este método se utiliza solo
en subclases y se caracteriza por brindar más atención a tales subclases.

```python
class SalariedCommissionEmployee(CommissionEmployee):
	def __init__(self, first_name, last_name, gross_sales, commission_rate, base_salary):
	"""Atributos para un empleado que gana comisión."""
		super ().__init__ (first_name, last_name, gross_sales, commission_rate) self.base_salary= base_salary
	# validate via property
```

```python
@property
def base_salary(self): return self._base_salary

@base_salary.setter
def base_salary(self, salary):
"""Escribe el salario base o un ValueError si es inválido.""" if salary  <  Decimal ('0.00'):
raise ValueError ('El salario base debe ser >= to 0')
self._base_salary = salary
```

> En estas líneas puedes observar dos clases con el mismo nombre (polimorfismo). 
La primera está precedida de `@property`. Esto indica que la clase `base_salary` definida es de solo lectura cuando clase base_salary ya tiene asignado un valor. Si se va a ingresar un nuevo valor para clase `base_salary`, se debe utilizar la segunda clase. La segunda está precedida por `@base_salary.setter`. 
Python define dos tipos de métodos uno llamado de adquisición u obtención (`getter`) y otro llamado de colocación (`setter`). Esto significa que la clase base_salary debe proporcionar (colocar) un valor a la variable. Observa que este método valida el salario base, si no es válido muestra una excepción del tipo `ValueError`.
> 

Aquí se definen la clase earnings, esta es la ganancia del empleado debida al tanto por ciento de la comisión. Este método regresa el salario más la comisión ganada.

```python
def earnings(self):
"""Calculate earnings."""
return super ().earnings() + self.base_salary
```

## método `__**repr__**`

El método `__**repr__`** es una representación formal de un string (cadena) para Python. `__**str__`** está más orientado a ser entendido por los usuarios, mientras que **repr** está más orientado a ser interpretado por Python.

```python
def __repr__(self):
"""Muestra la cadena para repr()."""
return ('Salaried' + super ().__repr__ () +
f'\nsalario base : {self.base_salary:.2f}')
```

A continuación, se muestra un ejemplo de la manera en que funciona este programa

```python
s = SalariedCommissionEmployee('Eva', 'García', Decimal
('5000.00'), Decimal ('0.1'), Decimal('3000.00'))
print(s.first_name,s.last_name,s.ssn,s.gross_sales,s.commission_rate,s.base_salar y)
print(f'{s.earnings():0.2f}')
#Eva García ABCD800808 5000.00 0.1 3000.00
#3500.00
```