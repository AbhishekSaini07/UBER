# `/users/register` Endpoint Documentation

## Description

This endpoint is used to register a new user. It performs input validation and creates a new user in the database. Passwords are securely hashed before storing.

## Endpoint

`POST /users/register`

This endpoint is defined in [`user.routes.js`](C:/Users/abhis/Downloads/UBER/Backend/routes/user.routes.js).

## Request Payload

The request expects a JSON payload with the following structure:

- `fullname`: An object containing:
  - `firstname`: A string, **required**, minimum of 3 characters.
  - `lastname`: A string, optional, minimum of 3 characters.
- `email`: A string, **required**, must be a valid email address and at least 5 characters.
- `password`: A string, **required**, minimum of 6 characters.

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response Payload

The response will contain a JSON payload with the following structure:

- `token`: A string, the JWT token.
- `user`: An object containing:
  - `_id`: A string, the user ID.
  - `fullname`: An object containing:
    - `firstname`: A string, the user's first name.
    - `lastname`: A string, the user's last name.
  - `email`: A string, the user's email address.
  - `socketId`: A string or null, the user's socket ID.

Example:

```json
{
  "token": "jwt-token-string",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## Error Response

If there are validation errors, the response will contain a JSON payload with the following structure:

- `errors`: An array of error objects, each containing:
  - `msg`: A string, the error message.
  - `param`: A string, the parameter that caused the error.
  - `location`: A string, the location of the parameter (e.g., "body").

Example:

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# `/users/login` Endpoint Documentation

## Description

This endpoint is used to authenticate an existing user. It verifies user credentials and returns a JWT token along with the user details.

## Endpoint

`POST /users/login`

This endpoint is defined in [`user.routes.js`](C:/Users/abhis/Downloads/UBER/Backend/routes/user.routes.js).

## Request Payload

The request expects a JSON payload with the following structure:

- `email`: A string, **required**, must be a valid email address and at least 5 characters.
- `password`: A string, **required**, minimum of 6 characters.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```
## Response Payload

The response will contain a JSON payload with the following structure:

- `token`: A string, the JWT token.
- `user`: An object containing:
  - `_id`: A string, the user ID.
  - `fullname`: An object containing:
    - `firstname`: A string, the user's first name.
    - `lastname`: A string, the user's last name.
  - `email`: A string, the user's email address.
  - `socketId`: A string or null, the user's socket ID.

Example:

```json
{
  "token": "jwt-token-string",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```


## Error Response

If the email or password is invalid, the response will contain a JSON payload with the following structure:

Example:

```json
{
  "message": "Invalid email or password"
}
```

