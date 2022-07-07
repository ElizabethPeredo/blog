---
title: 'Capítulo 12. Procesamiento de Lenguaje Natural'
date: 'Julio 5, 2022'
type: 'Python'
cover_image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
---
# Capítulo 12. Procesamiento de Lenguaje Natural.

# 1. Instalación del módulo TextBlob

```powershell
conda install -c confa-forge textblob
ipython -m textblob.download_corpora
```

# 2. TextBlob

TextBlob es la clase fundamental para NLP con el módulo textblob. El siguiente código crea tu primer TextBlob.

```python
from textblob import TextBlob
texto = 'Y cuando despertó. Todo a su alrededor era luminoso'
blob = TextBlob(texto)
blob
TextBlob("Y cuando despertó. Todo a su alrededor era luminoso")
```

# 3. Detección de lenguaje y traducción

# 4. Visualizando frecuencias de palabras