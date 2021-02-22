testing_playground - a learning environment for building TDD/BDD skills and other fun stuff, mainly focusing on CRUD api operations

# IMPORTANT

- Create a .env file and include the following:
  - DB_USERNAME
  - DB_HOST
  - DB_DATABASE
  - DB_PASSWORD

# Dependencies

- Chai
- Express.js
- PostgreSQL
- Faker

```javascript
    "devDependencies": {
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "faker": "^5.4.0"
  },
   "dependencies": {
    "axios": "^0.21.1",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "pg": "^8.5.1"
  }
```

# Installation

Use npm package manager to install dependencies

```bash
- npm install
```

# Run Scripts

It is recommended that you use the following `npm run` scripts to interact with the application

- `npm test` - Run all tests
- `npm server` - Start the express server

# Testing

```bash
- npm test
```

# Database

- You can shell into postgres into with either of the following two commands:

  1. sudo -u postgres psql postgres
  2. psql

- Initialize the schema by shelling into postgres and running the following command in the same directory of the schema.sql file:
  1. mariadb -u root < schema.sql
  2. mariadb -u root -p < schema.sql
