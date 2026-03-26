# **OBLIVION ROBOTICS CLUB — CLIENT**

This directory contains the **FRONTEND APPLICATION** for the **OBLIVION ROBOTICS CLUB WEBSITE**.
The CLIENT is built with **REACT, TYPESCRIPT, and TAILWIND CSS**, providing a modern, scalable, and maintainable **USER INTERFACE** for the CLUB'S PLATFORM.

The CLIENT communicates with the **EXPRESS BACKEND API** to fetch and display data such as CLUB PROJECTS, EVENTS, MEMBERS, and ANNOUNCEMENTS.

## **TECH STACK**

The CLIENT APPLICATION uses the following **TECHNOLOGIES**:

* REACT – UI LIBRARY for building interactive USER INTERFACES
* TYPESCRIPT – STRONGLY TYPED JAVASCRIPT for safer and maintainable code
* VITE – FAST DEVELOPMENT SERVER and BUILD TOOL
* TAILWIND CSS – UTILITY-FIRST CSS FRAMEWORK for rapid UI development
* REACT ROUTER *(planned)* – CLIENT-SIDE ROUTING for page navigation

## **PROJECT STRUCTURE**

```
src/
│
├── components/     # REUSABLE UI COMPONENTS (buttons, cards, forms, etc.)
├── pages/          # MAIN APPLICATION PAGES (Home, About, Projects, Events)
├── layouts/        # LAYOUT COMPONENTS (Navbar, Footer, Page wrappers)
├── services/       # API COMMUNICATION LOGIC (requests to backend)
├── types/          # TYPESCRIPT INTERFACES and TYPES
├── assets/         # IMAGES, ICONS, and STATIC RESOURCES
├── styles/         # GLOBAL STYLES and TAILWIND CONFIGURATION
│   └── global.css
├── App.tsx         # MAIN APPLICATION COMPONENT
└── main.tsx        # REACT ENTRY POINT
```

---

## **DEVELOPMENT SETUP**

### **INSTALL DEPENDENCIES**

```
npm install
```

**RUN DEVELOPMENT SERVER**

```
npm run dev
```

The DEVELOPMENT SERVER will start at:

```
http://localhost:5173
```

---

## **CODE ORGANIZATION PHILOSOPHY**

The FRONTEND follows a **COMPONENT-BASED ARCHITECTURE**:

* COMPONENTS are small REUSABLE UI PIECES
* PAGES represent full VIEWS of the WEBSITE
* LAYOUTS define shared STRUCTURES like NAVIGATION and FOOTER
* SERVICES manage COMMUNICATION with the BACKEND API
* TYPES ensure TYPE SAFETY across the PROJECT

This structure helps maintain **CLEAN SEPARATION OF CONCERNS**, making it easier for MULTIPLE DEVELOPERS to collaborate.
