# IDE API

## Project deployment

1. Make file `.env` and paste:
```
# NodeJS
NODE_ENV='development' or 'production'

# Server
SERVER_PORT=8084

# Google
GOOGLE_ID= GOOGLE-ID
GOOGLE_SECRET= GOOGLE-SECRET

# Database
DATABASE_HOST='ide-api-mongodb' # Docker compose db address
DATABASE_PORT='27017'  # Docker compose db port
DATABASE_NAME='ide'

# Logger
LOGGER_PATH_COMBINED='./runtime.log'
LOGGER_PATH_ERRORS='./errors.log'

# VK
VK_APP_ID= VK Aplication id
VK_APP_SECRET= VK Aplication secret key
VK_TOKEN= VK user token
VK_GROUP_ID= VK group id (For example: -134802759)
``` 
2. Install dependencies: `npm i` or `yarn install`
3. Build: `npm run build` or `yarn run build` 
3. Run: `docker-compose up --build -d`

## TODO

### [Auth](src/api/auth/README.md)

### [User](src/api/user/README.md)

### [News](src/api/news/README.md)
