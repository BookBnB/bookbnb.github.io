---
id: intro
title: Análisis Postmortem
slug: /
---

## Contract tests

Se podrían hacer tests de contrato contra Algolia para verificar que las respuestas sean las esperadas, y entre los microservicios para chequear sus respectivos contratos.

## Proxy

Es deseable quitar los proxies del core, para que solo maneje lógica de negocio. Con Kubernetes esto es bastante sencillo de realizar.

## Flujo asincrónico

Mejoras de UI/UX cuando se acepta, rechaza o cancela una reserva. Deberia haber un estado intermedio en la DB que sea "Esperando confirmación de rechazo/aceptación/cancelación" como para poder mostrar en la UI ese cambio y que no queden los botones de los estados previos.


## Cancelaciones

Las cancelaciones por parte de los huéspedes son gratis, se puede evaluar desarrollar esa parte del modelo de negocio para tener distintos tipos de cancelaciones.

## Mejora de proceso

Sprints y planificación quedaron muy en el aire sobre el final del proyecto. Se puede prestar más atención a esa parte del proceso.
