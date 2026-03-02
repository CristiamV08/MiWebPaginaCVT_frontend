# Frontend - Tusoftwareya

Este es el frontend de la plataforma Tusoftwareya, una aplicación web para mostrar y gestionar sistemas de negocio (restaurantes, bodegas, gimnasios, etc.).

## Stack Tecnológico

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos

## Configuración del Entorno

### Variables de Entorno

El proyecto utiliza variables de entorno para configurar la conexión con el backend:

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` y configura:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

**Importante:** 
- Las variables en Vite DEBEN empezar con el prefijo `VITE_`
- El archivo `.env` NO se sube a Git (está en `.gitignore`)
- Para producción, configura `VITE_API_URL` en tu plataforma de hosting (ej: Netlify)

### Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo (puerto 5177)
npm run dev

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/         # Componentes React
│   ├── Hero.jsx       # Sección hero principal
│   ├── Products.jsx   # Galería de productos/sistemas
│   ├── Pricing.jsx    # Planes de precios
│   ├── Features.jsx   # Características
│   ├── DemoForm.jsx   # Formulario de solicitud de prueba
│   └── ...
├── assets/            # Imágenes y recursos estáticos
├── App.jsx            # Componente principal
└── main.jsx           # Punto de entrada

public/
└── demo/              # Capturas de pantalla del demo
```

## Despliegue

Para desplegar en **Netlify**:

1. Conecta tu repositorio de GitHub
2. Configura las variables de entorno:
   - `VITE_API_URL` = URL de tu backend en producción
3. Build command: `npm run build`
4. Publish directory: `dist`

Ver [DEPLOYMENT.md](../DEPLOYMENT.md) para instrucciones detalladas.

## Características Principales

- 📱 Diseño responsive
- 🎨 Interfaz moderna con Tailwind CSS
- 🖼️ Galería de productos con imágenes grandes y atractivas
- 🔄 Integración con backend para formularios de prueba
- 🎥 Demo interactivo de sistemas
- 💰 Sistema de precios (Basic $30/mes, Premium $50/mes)
- ⏱️ Período de prueba de 15 días

## Licencia

Propiedad de Tusoftwareya
