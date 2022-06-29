# Social-Network-API

## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Usage
* Install MongoDB ([MongoDB Website](https://docs.mongodb.com/manual/installation/))
* Clone the repo
* Install dependencies with `npm -i`
* Run `npm start` to run the server and make the API live
* Use [Insomnia](https://insomnia.rest/) to test the REST API.

## Models
- User
- Thought
- Reaction 

## Endpoints
**User**
- Create a user:        `POST /api/users`
- Get all users:        `GET /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Create a thought:     `POST /api/thoughts`
- Get all thoughts:     `GET /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

## Packages
* express
* moment
* mongoose

## Server Start Video

https://drive.google.com/file/d/1fhWapYwz9MwtN_haqlL57EkeQW2VENjz/view

## User Routes Video

https://drive.google.com/file/d/1uwFH-2mf4q9elhcn8uEXkovBUsBdAAiY/view

## Friends Routes Video

https://drive.google.com/file/d/12ylaBgpiQD8ZWhFsF3UBIprtYCLPN-40/view

## Thoughts Routes Video

https://drive.google.com/file/d/1swxQHFEbNJJJhagsnlgxGH5xdlgFxS7S/view

## Reactions Routes Video

https://drive.google.com/file/d/1frmn1_Z9XC5XZNQoFsEWO4kKYmYd_m7F/view


## Questions
Please feel free to email keithvip@gmail.com for any further questions!