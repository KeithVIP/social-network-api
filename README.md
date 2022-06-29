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

## First Walkthrough Video

https://drive.google.com/file/d/1FIDFMD1djW_nAVX51QmKarixMYFBqaNe/view

## Second Walthrough Video

https://drive.google.com/file/d/1jfoUxHn6mvMghFbQVTBpPzR0j8LLRKoU/view

## Third Walkthrough Video

https://drive.google.com/file/d/1hjOSw_-NAedJoMZJibmLCy6X0aLPwzu-/view


## Questions
Please feel free to email keithvip@gmail.com for any further questions!