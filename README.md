# Alpha Project API

- to install package of project run `npm install`
- to start project in development run `npm run dev`
- to format code run `npm run format`

### API List

#### Authentication API

- Sign up: [POST] `/api/auth/signup`

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

- Sign in: [POST] `/api/auth/signin`

```
// example data in request
{
  email: 'abc@gmail.com',
  password: 'alpha@123',
}
```

#### Appointment API

- Create a new Appointment: [POST] `api/appointment`

```
// Example data in request
{
  doctor: '6290efe4f4c54fb3a5ebdb41',
  appointmentAt: 1654088400000 // milliseconds
}
```

- Get appointments of doctor: [GET] `api/appointment/doctor/:id`
- Get appointments of user: [GET] `api/appointment/user/:id`
- Update an appointment: [PATCH] `api/appointment/:id`

```
// Example data in request
{
  appointmentAt: 1654088407000 // milliseconds
}
```

- Delete an appointment: [DELETE]: `api/appointment/:id`

#### Chatting API

- Get all conversations of user: [GET] `api/conversation/user`
- Get a conversation info with someone: [GET] `api/conversation/user/:userId`
- Create new a conversation: [POST] `api/conversation`

```
// Example data in request
{
  user: '6290efe4f4c54fb3a5ebdb41' // id of the user you want to chat
}
```

- Get list messages of a conversation: [GET] `api/message/conversation/:conversationId`
- Create new a message: [POST] `api/message`

```
// Example data in request
{
  conversation: '6292468f24d7122d8e99035b', //id of conversation
  message: 'Hello world',
  type: 'text' | 'photo' | file // default: 'text'
}
```
#### Major API
- Get list of major: [GET] `/api/major`
- Create new a major: [POST] `/api/major`
```
// Example data in request
{
  title: 'Pre-medicine'
}
```
#### User API
- Get info of a user: [GET] `/api/user/:id`
- Update info of auth user: [PATCH] `/api/user`
```
// Example data in request
{
  avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
  dateOfBirth: '07/06/2001',
  address: '470 Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng',
  gender: 'Male',
  data: {
    blood: ABRh+,
    height: 170cm,
    weight: 70kg
  }
}
```
#### Doctor API
- Get info of a doctor: [GET] `/api/doctor/:id`,
- Update info of a doctor: [PATCH] `/api/doctor`
```
// Example data in request
{
  avatar: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
  dateOfBirth: '01/09/2001',
  degree: 'Master',
  workplace: {
    address: '470 Trần Đại Nghĩa, Đà Nẵng',
    latitute: 15.9750106,
    longitude: 108.2532374
  },
  experience: '4 years in neurology',
  description: 'A doctor with 4 years experience in neurology',
  awards: [
    'Edison Award',
    'Gonin Medal'
  ],
  major: '62938efd40693865985d9704'
}
```
