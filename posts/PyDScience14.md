---
title: 'Capítulo 14. Computación cognitiva'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 14. Computación cognitiva.

# 1. Servicios de Watson de IBM

Watson es una supercomputadora de IBM. Esta computadora tiene una capacidad de cálculo de
80 teraflops, es decir, 80 × 1012 operaciones de punto flotante por segundo. Esta gran capacidad
de cálculo permite analizar gran cantidad de información y utilizar algoritmos complejos de inteligencia artificial (IA) y procedimientos como procesamiento de lenguaje natural y minería de datos.

Watson de IBM es una plataforma de cómputo cognitivo basado en la nube y que ha sido utilizada
en diferentes problemas del mundo real. Los sistemas de cómputo cognitivo simulan el reconocimiento depatrones y la capacidad del cerebro humano para tomar de decisiones, además de aprender la forma en que el cerebro mismo consume aún más información.

Watson ofrece un conjunto de técnicas que puedes incorporar en tus aplicaciones. En este capítulo
utilizarás técnicas como traducción, y la conversión voz a texto y texto a voz.

## Voz a texto

Este servicio de Watson, convierte archivos de audio y los transcribe a texto. El servicio puede distinguir entre múltiples voces. Este servicio lo puedes utilizar para implementar aplicaciones controladas por voz, transcribir audio en vivo, entre otras aplicaciones. En la plataforma de Watson puedes utilizar el demo de prueba, para este servicio:

[Speech to Text Demo](https://speech-to-text-demo.ng.bluemix.net/)

## Texto a voz

Este servicio sintetiza voz de texto. Puedes utilizar de síntesis de voz con marcas de lenguaje (Speech Synthesis Markup Language, SSML) para embeber instrucciones en el control de texto como inflexión, cadencia, pitch, entre otras opciones. Hasta hoy, este servicio soporta la síntesis en idiomas como inglés, francés, español, alemán, italiano portugués y japonés. El demo de este servicio está en la dirección:

[Watson Text to Speech Demo](https://www.ibm.com/demos/live/tts-demo/self-service/home)

## Traductor

El servicio de traducción tiene dos componentes:

- Traducción entre lenguajes
- Identifica el idioma del texto entre casi 60 lenguajes diferentes

Para utilizar el demo de Watson:

[Language Translator Demo](https://www.ibm.com/demos/live/watson-language-translator/self-service)

Para inscribirse en el cloud services de Watson, entra en esta dirección:

[Sign up for IBM Cloud](https://cloud.ibm.com/registration?target=%2Fdeveloper%2Fwatson%2Fdashboard)

Recibirás un email con la información necesaria para confirmar el registro de tu cuenta. Después de hacerlo, ya puedes ingresar al tablero de Watson en:

[IBM Watson](https://cloud.ibm.com/developer/watson/dashboard)

IBM proporciona un kit para desarrolladores con Python (software development kit, SDK). Este kit es un módulo que contiene las clases que te permitirán interactuar con los servicios de Watson. Puedes crear objetos específicos para servicios específicos.

```powershell
pip install –upgrade watson-developer-cloud
pip install pyaudio
pip install pydub
```

# 2. Ejemplo de un traductor básico