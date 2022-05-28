# Alpha Project API
- to install package of project run `npm install`
- to start project in development run `npm run dev`
- to format code run `npm run format`

### API List
#### Authentication API
+ Sign up: [POST] `/api/auth/signup`
```
// example data in request
{
  email: 'abc@gmail.com',
  password: 'alpha@123',
  firstName: 'ALPHA',
  lastName: 'BETA',
  role?: 'doctor' | 'user'
}
```
+ Sign in: [POST] `/api/auth/signin`
```
// example data in request
{
  email: 'abc@gmail.com',
  password: 'alpha@123',
}
```
#### Appointment API
+ Create a new Appointment: [POST] `api/appointment`
```
// Example data in request
{
  doctor: '6290efe4f4c54fb3a5ebdb41',
  appointmentAt: 1654088400000 // milliseconds
}
```

+ Get appointments of doctor: [GET] `api/appointment/doctor/:id`
+ Get appointments of user: [GET] `api/appointment/user/:id`
+ Update an appointment: [PATCH] `api/appointment/:id`
```
// Example data in request
{
  appointmentAt: 1654088407000 // milliseconds
}
```
+ Delete an appointment: [DELETE]: `api/appointment/:id`
