# The Design Studio - A complete system for interactive 3D models

The Design Studio is a complete system for 3D configurators, designed for companies to upload and edit interactive 3D models on the web. On behalf of the design studio Studio3D, we developed a platform that helps clients present their 3D models online. The Design Studio offers a range of tools for managing model appearance, environments, interactivity, AR, and more.

Technologies used in the project include PostgreSQL, Go, JavaScript, Svelte, and Three.js.

![3D-configurator](/the-design-studio-hero.webp)

## Viewer Component
At the core of the Design Studio is the 3D configurator. It is used internally by clients to manage models, test scenes, and create materials from textures, as well as externally by end users to interact with models—rotating them, changing materials, viewing dimensions, exporting, and more. It is built to present high-quality and realistic models in optimal environments.

The configurator is implemented as a web component to simplify integration for clients. It can be easily embedded and allows for fully customizable interfaces, enabling user-specific options like changing the model or material. The configurator is built on top of Google's model-viewer library.

## Multitenant Architecture
The Design Studio is a multitenant system with several global functionalities. Studio3D needs to access an overview of all tenants and, if necessary, navigate into any tenant environment without switching accounts—this is known as a supertenant role. They also require the ability to share content, such as materials, across different tenants.

Unlike traditional multitenant systems, these requirements increase complexity. To address this, we opted for a single database for all tenants, using unique identifiers to distinguish content between them. This approach provides the flexibility to maintain tenant separation while allowing the supertenant to bypass system-imposed boundaries.

## Results
The project has provided Studio3D with a unique and competitive product. The configurator represents a foundational tool for the future of digital object presentation. The Design Studio is a fully-fledged system that streamlines the creation and workflow of interactive 3D models with unique materials.