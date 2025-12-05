# 📄 Proyecto React – EV08

## GA1-220501096-03-AA1-EV08 – Eventos y estado local en React

### CV Dinámico e Interactivo

Este proyecto corresponde a la evidencia **EV08**, en la cual se implementan **eventos** y **estado local (useState)** dentro del proyecto de hoja de vida (CV) construido previamente en React.

El objetivo principal es hacer que el CV sea **interactivo**, permitiendo al usuario mostrar/ocultar secciones y agregar nuevas tecnologías al stack dinámicamente.

---

## 🚀 Funcionalidades añadidas en esta evidencia

### ✔ 1. Componente **ToggleHabilidades**

- Permite **mostrar u ocultar** la sección de habilidades.
- Usa `useState` para manejar la visibilidad.
- Utiliza **renderizado condicional**.

### ✔ 2. Componente **FormularioTecnologia**

- Permite **agregar tecnologías nuevas** al stack mediante un formulario.
- Usa inputs controlados (`useState`).
- Maneja eventos:
  - `onChange` → para actualizar el input
  - `onSubmit` → para agregar la tecnología sin recargar la página
- El dato ingresado se envía al componente padre (App.jsx) mediante **props y funciones callback**.

### ✔ 3. Manejo de estado en **App.jsx**

- Se creó el estado global `tecnologias`.
- Se implementó `agregarTecnologia()` para modificar ese estado.
- Se actualizó el flujo de datos mediante **props**.
- El stack se renderiza de manera dinámica.

### ✔ 4. Actualización del archivo **cvData.js**

- Se separaron los datos estáticos del CV.
- Se agregaron las tecnologías iniciales que luego pasan al estado dinámico.

---

## 📁 Estructura de carpetas relevante

src/
├── components/
│ ├── ToggleHabilidades.jsx
│ ├── FormularioTecnologia.jsx
│ ├── StackTecnologias.jsx
│ ├── Habilidades.jsx
│ ├── ...
│
├── data/
│ └── cvData.js
│
├── App.jsx
└── main.jsx

---

## 🛠 Tecnologías utilizadas

- React con Vite
- JavaScript ES6+
- JSX
- Hooks (useState)
- Git y GitHub
- HTML y CSS

---

## 📸 Capturas de funcionamiento

### 🔹 Formulario de agregar tecnologías

_(Incluye aquí tu imagen)_

### 🔹 Sección de habilidades con botón de mostrar/ocultar

_(Incluye aquí tu imagen)_

---

## 🧪 ¿Cómo ejecutar el proyecto?

1️⃣ Clonar el repositorio (si aún no está clonado):

```bash
git clone <url-del-repo>
```
