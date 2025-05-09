# ✈️ Buscador de Reservas

Aplicación web construida con **React + TypeScript**, que permite a un usuario buscar, visualizar y navegar reservas activas de viajeros.
El frontend se conecta a una **API REST pública** que retorna datos en tiempo real.
<br/><br/>
## 🧠 ¿Qué hace la aplicación?

🔍 Permite **buscar** reservas activas filtrando **por nombre del pasajero o número** de reserva en un mismo buscador.

📋 Muestra una lista paginada con los resultados.

💬 Indica si hay carga en proceso, errores o ningún resultado.

↔️ Permite navegar por páginas con botones "Anterior" y "Siguiente" debido al paginado.
<br/><br/>
## 🧰 Tecnologías y herramientas usadas
React 18 + TypeScript

- Vite como bundler

- Tailwind CSS para estilos utilitarios

- API REST pública brindada por ASSIST 365

- Componentes y hooks reutilizables y escalables

- Control de estados limpio con useState, useEffect y useCallback
<br/><br/>
## 🧩 Decisiones técnicas
El input de búsqueda es **unificado** para evitar fragmentación en la experiencia del usuario.

Se aplicó **debounce** en la búsqueda para mejorar el **rendimiento** y evitar pegadas innecesarias a la API.

El paginado es manejado por estado local y se reinicia al cambiar la búsqueda.
<br/><br/>
## ⏳ ¿Qué mejoraría con más tiempo?
- Agregaria test unitarios

- Añadiria mas estilos y transiciones

- Separaria mejor la lógica del filtrado, delegando más en el backend para lograr mayor optimizacion

- Implementar cache para evitar refetches innecesarios
<br/><br/>
## 🚀 ¿Cómo levantar el proyecto?
```
1. Cloná el repositorio:

bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

2. Instalá las dependencias:
  npm install

3. Ejecutá el proyecto en entorno de desarrollo:
   npm run dev
