# Notion Clone

A Notion-like application built to learn modern technologies including React, GoLang, Docker, and n8n.

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** GoLang (Clean Architecture)
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose
- **Automation:** n8n

## 📁 Project Structure

```
.
├── backend/                 # Go backend service
│   ├── cmd/                # Application entry points
│   ├── internal/
│   │   ├── domain/         # Entities & business rules
│   │   ├── usecase/        # Application business logic
│   │   ├── repository/     # Data access layer
│   │   └── delivery/       # HTTP handlers & routes
│   ├── pkg/                # Shared utilities
│   └── tests/              # Integration tests
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   └── types/          # TypeScript types
│   └── tests/              # Frontend tests
├── docker/                 # Docker configurations
├── n8n/                    # n8n workflow configurations
└── docker-compose.yml      # Container orchestration
```

## 🚀 Getting Started

### Prerequisites

- Docker & Docker Compose
- Go 1.21+
- Node.js 18+
- Make

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Notion-Clone.git
   cd Notion-Clone
   ```

2. **Start all services with Docker**
   ```bash
   make docker-up
   ```

3. **Or run locally for development**
   ```bash
   # Start database
   make db-up
   
   # Start backend (in one terminal)
   make backend-dev
   
   # Start frontend (in another terminal)
   make frontend-dev
   ```

### Running Tests (TDD)

```bash
# Run all tests
make test

# Run backend tests
make test-backend

# Run frontend tests
make test-frontend

# Run tests with coverage
make test-coverage
```

## 📋 Features Roadmap

### Phase 1 - MVP
- [ ] User authentication (register/login)
- [ ] Create, read, update, delete pages
- [ ] Basic rich text editor
- [ ] Nested pages (hierarchy)
- [ ] Sidebar navigation

### Phase 2 - Enhanced
- [ ] Real-time collaboration
- [ ] Page sharing
- [ ] Search functionality
- [ ] Trash & restore

### Phase 3 - Automation
- [ ] n8n integration for workflows
- [ ] Automatic backups
- [ ] Notifications

## 🧪 TDD Approach

This project follows Test-Driven Development:

1. **Red** - Write a failing test
2. **Green** - Write minimal code to pass
3. **Refactor** - Improve code quality

## 📚 Clean Architecture

The backend follows Clean Architecture principles:

- **Domain Layer:** Core business entities and rules
- **Use Case Layer:** Application-specific business logic
- **Repository Layer:** Data access abstractions
- **Delivery Layer:** External interfaces (HTTP, gRPC)

## 📝 License

MIT License
