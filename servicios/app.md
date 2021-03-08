---
id: app
title: Aplicación
---

La aplicación fue desarrollada de manera nativa en Kotlin utilizando como entorno [Android Studio](https://developer.android.com/studio) con el soporte de la herramienta [Gradle](https://gradle.org/).

## Instalación

Para su instalación, basta con descargar Android Studio de la página anteriormente proporcionada, clonar el [repositorio con el código](https://github.com/BookBnB/android-app) e instalar un emulador de Android (se puede hacer con Android Studio) o poseer un dispositivo físico.

## Ambientes

Mediante la herramienta Gradle configuramos en Android Studio dos ambientes:

- Release: Inicialmente apuntaba a https://bookbnb-master.herokuapp.com/v1/, luego se migró a okteto. Para usar esta configuración se debe poseer una cuenta en la consola de google play developer (accedida de manera paga) por lo que usamos otro ambiente.
- Development: Inicialmente apuntaba a https://bookbnb-develop.herokuapp.com/v1/. Al migrar a okteto, apunta a https://bookbnb-core-service-seblaz.cloud.okteto.net/v1/. Es la configuración por defecto en Android Studio.

## Arquitectura

Se utilizó una arquitectura [MVVM](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93modelo_de_vista) incluyendo bindings para facilitar la comunicación entre view y view models.


## Distribución

Para la distribución utilizamos una herramienta provista por Firebase llamada [App Distribution](https://firebase.google.com/docs/app-distribution) que nos permite realizar un build de un APK, seleccionar un grupo de "testers" y subirlo sin necesidad de una cuenta paga. El último APK generado puede encontrarse [aquí]() y es el mismo que se encuentra en dicha herramienta.
