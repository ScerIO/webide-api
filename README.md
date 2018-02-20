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
``` 
2. Install dependencies: `npm i` or `yarn install`
3. Build: `npm run build` or `yarn run build` 
3. Run: `docker-compose up --build -d`

## TODO

### Api list

- [x] Auth
- [x] User
- [ ] News

### Auth

#### Sign In

- [x] Google
- [x] Token
- [ ] Login & password 

#### Sign Up

- [x] Google
- [ ] Login & password

#### Restore

- [ ] Restore password by email

### User

- [x] Base implementation
- [ ] Edit first name
- [ ] Edit last name
- [ ] Edit picture (Avatar)
- [ ] Change password 

### News

- [ ] Base implementation
- [ ] All posts
- [ ] Pagination
- [ ] Detail data
- [ ] Make post
- [ ] Edit post
- [ ] Remove post