# IPCBL Framework - Integrated Project & Context-Based Learning

## Overview

This is a modern web application presenting academic research on the Integrated Project & Context-Based Learning (IPCBL) framework for ICT education. The application is built as a single-page academic website showcasing research conducted by J. Muller and JJ Greeff from Belgium Campus and NWU.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom academic color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Strategy**: RESTful API with `/api` prefix routing
- **Module System**: ES modules throughout the application
- **Development**: Hot Module Replacement (HMR) via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling between sections
- **Hero Section**: Academic-styled header with research details
- **Content Sections**: Modular sections for Introduction, Methodology, Framework, Implementation, Results, Authors, Future Work, and Resources
- **UI Elements**: Professional academic styling with custom color scheme

### Backend Components
- **Route Registration**: Centralized route management system
- **Storage Interface**: Abstract storage layer with CRUD operations
- **Error Handling**: Global error middleware with status code management
- **Development Tools**: Request logging and response tracking

### Database Schema
- **Users Table**: Basic user management with UUID primary keys
- **Authentication Ready**: Password field and username uniqueness constraints
- **Extensible Design**: Schema prepared for additional research-related entities

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **Route Processing**: Express server handles requests through registered routes
3. **Data Operations**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: Client-side caching and synchronization via TanStack Query

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **drizzle-orm & drizzle-zod**: Database ORM with validation
- **express**: Node.js web framework

### Development Tools
- **Vite**: Build tool with HMR and development server
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Academic Features
- **Font Integration**: Google Fonts (Inter, Source Sans Pro) for professional typography
- **Responsive Design**: Mobile-first approach with academic presentation standards
- **SEO Optimization**: Meta tags and Open Graph properties for research discoverability

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Local development with HMR and error overlays
- **Production**: Optimized builds with external package bundling
- **Database**: Environment-based connection via `DATABASE_URL`

### Hosting Considerations
- **Static Assets**: Frontend served from `dist/public`
- **API Endpoints**: Express server handles `/api/*` routes
- **Database**: Serverless PostgreSQL via Neon for scalability
- **Session Management**: Ready for PostgreSQL-based session storage

This application represents a modern approach to academic research presentation, combining professional web development practices with educational content delivery for the IPCBL framework research.