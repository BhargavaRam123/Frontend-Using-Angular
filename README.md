# Angular Practice Project

A comprehensive practice project to learn and implement basic Angular concepts and functionality.

## Project Overview

This project covers fundamental Angular topics through practical implementation. Each feature demonstrates core Angular concepts with simple, easy-to-understand examples.

## Topics Covered

### 1. Components and Templates

- Creating components using Angular CLI
- Component structure (TypeScript class, HTML template, CSS styles)
- Component lifecycle hooks (ngOnInit, ngOnDestroy)
- Template syntax and interpolation `{{ }}`

### 2. Data Binding

- **One-way binding**: Property binding `[property]` and event binding `(event)`
- **Two-way binding**: Using `[(ngModel)]` for form inputs
- String interpolation for displaying dynamic content

### 3. Directives

- **Structural Directives**:
  - `*ngIf` - Conditional rendering
  - `*ngFor` - Loop through arrays
  - `*ngSwitch` - Switch case statements
- **Attribute Directives**:
  - `ngClass` - Dynamic CSS classes
  - `ngStyle` - Dynamic inline styles

### 4. Services and Dependency Injection

- Creating services with `@Injectable` decorator
- Injecting services into components
- Sharing data between components using services
- HTTP client service for API calls

### 5. Routing and Navigation

- Setting up Angular Router
- Creating routes and navigation links
- Route parameters and query parameters
- Route guards (basic implementation)

### 6. Forms

- **Template-driven forms**: Using `ngModel` and form validation
- **Reactive forms**: Using FormBuilder, FormGroup, and FormControl
- Form validation and error handling
- Custom validators

### 7. Pipes

- Built-in pipes (date, currency, uppercase, lowercase)
- Creating custom pipes
- Using pipes in templates

### 8. Component Communication

- Parent to child communication using `@Input()`
- Child to parent communication using `@Output()` and EventEmitter
- ViewChild and ViewChildren for accessing child components

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── user-list/
│   │   ├── user-form/
│   │   └── product-catalog/
│   ├── services/
│   │   ├── user.service.ts
│   │   └── product.service.ts
│   ├── pipes/
│   │   └── custom-pipe.ts
│   ├── models/
│   │   ├── user.model.ts
│   │   └── product.model.ts
│
│
```

## Features to Implement

### 1. User Management System

- Display list of users using `*ngFor`
- Add new users with reactive forms
- Edit existing users with template-driven forms
- Delete users with confirmation dialog
- Search and filter users using pipes

### 2. Product Catalog

- Product listing with image, name, and price
- Category-based filtering using `*ngIf` and `*ngFor`
- Shopping cart functionality
- Product details page with routing

### 3. Navigation System

- Header component with navigation menu
- Multiple pages (Home, Users, Products, About)
- Active route highlighting
- Breadcrumb navigation

### 4. Dynamic Styling

- Theme switcher using `ngClass`
- Dynamic button states
- Responsive design with Angular Flex Layout
- CSS animations and transitions
