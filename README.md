https://lu5h0cr.github.io/Nutanix-NCA-6.10---Test-Simulator/

# Simulador Nutanix NCA 6.10 v2Quantyra

Simulador web de práctica para el examen **Nutanix Certified Associate NCA 6.10**, desarrollado como uno de los primeros proyectos de prueba de **Quantyra**.

El objetivo del simulador es ayudar al usuario a estudiar y practicar preguntas tipo examen en un entorno oscuro, cómodo para sesiones nocturnas y enfocado en la concentración.

---

## Características principales

* Modo oscuro para reducir fatiga visual.
* Banco de preguntas cargado desde `questions.js`.
* Selección de cantidad de preguntas:

  * 25 preguntas
  * 50 preguntas
  * 100 preguntas
  * Todas las preguntas disponibles
* Modo aleatorio predeterminado.
* Preguntas mezcladas automáticamente.
* Opciones de respuesta mezcladas automáticamente.
* Soporte para preguntas de una o varias respuestas correctas.
* Dos modos de uso:

  * **Modo práctica**
  * **Modo examen real**

---

## Modos disponibles

### Modo práctica

En este modo, el usuario puede responder una pregunta y al avanzar se muestra la respuesta correcta.

Este modo está pensado para estudiar, reforzar conceptos y aprender de los errores durante la práctica.

### Modo examen real

En este modo, el usuario responde cada pregunta y al presionar siguiente solo se guarda su respuesta.

La respuesta correcta no se muestra durante el examen.

Al finalizar, el sistema muestra el resultado total del examen.

Este modo está pensado para simular una experiencia más cercana a una prueba real.

---

## Estructura del proyecto

```text
Simulador_Nutanix_NCA610_v2Quantyra/
│
├── index.html
├── questions.js
└── README.md
```

### `index.html`

Contiene la estructura visual, estilos y lógica principal del simulador.

### `questions.js`

Contiene el banco de preguntas, opciones de respuesta y respuestas correctas.

### `README.md`

Documento informativo del proyecto.

---

## Cómo usarlo localmente

1. Descargar o clonar este repositorio.
2. Abrir el archivo `index.html` en un navegador web moderno.
3. Seleccionar el modo de prueba.
4. Elegir la cantidad de preguntas.
5. Iniciar el simulador.

No se requiere servidor, base de datos ni instalación adicional.

---

## Cómo publicarlo en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir los archivos:

   * `index.html`
   * `questions.js`
   * `README.md`
3. Ir a:

```text
Settings > Pages
```

4. En **Build and deployment**, seleccionar:

```text
Deploy from a branch
```

5. Elegir la rama:

```text
main
```

6. Elegir carpeta:

```text
/root
```

7. Guardar los cambios.

GitHub generará una dirección parecida a:

```text
https://usuario.github.io/nombre-del-repositorio/
```

---

## Recomendaciones de uso

Para una mejor experiencia:

* Usar el simulador desde computadora, tablet o celular.
* Practicar primero en modo práctica.
* Luego realizar intentos en modo examen real.
* Repetir el examen con preguntas aleatorias para evitar memorizar únicamente el orden de las respuestas.
* Revisar las respuestas incorrectas y reforzar los temas relacionados.

---

## Nota importante

Este simulador es una herramienta de estudio independiente.

Las preguntas fueron organizadas con fines educativos y de práctica. Se recomienda validar el contenido con documentación oficial de Nutanix y materiales actualizados antes de presentar un examen real.

---

## Proyecto

Desarrollado como prueba inicial de producto para:

**Quantyra**

**DATA. INSIGHT. PRECISION. GROWTH.**
