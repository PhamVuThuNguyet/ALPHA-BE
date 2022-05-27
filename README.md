# Alpha Project API
- to install package of project run `npm install`
- to start project in development run `npm run dev`
- to format code run `npm run format`

### API List
#### Authentication API
+ Sign up: `/api/auth/signup`
```
// example data in request
{
  email: 'abc@gmail.com',
  password: 'alpha@123',
  firstName: 'ALPHA',
  lastName: 'BETA',
  role?: 'doctor' | user
}
```
+ Sign in: `/api/auth/signin`
```
// example data in request
{
  email: 'abc@gmail.com',
  password: 'alpha@123',
}
```
