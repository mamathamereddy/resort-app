### Resort app with react and contententful

Running the app:

1. cd <project_folder>

2. Install packages

```
npm i
```

3. To run the app:

```
npm start
```

### `About the application`

The application is designed on idea of displaying hotel rooms and setup a filter functionality so thet the use can filter as of their requirement

in the project we use

`react-router`for routing
`react-context`api for state managent
`contentful`headless CMS for data managment
and `netlify`to host the application

### `what in the world it is build`

First and foremost the application is responsive since i donot want to jump back and forth for every section

### `Home page`

For the nav bar on a smaller screen size i have a toggle button but once we are on bigger screens we will have a traditional nav bar
right after the nav bar on home page we will have a hero component that will have a background image and in middle of hero component we will have a banner that has a link to route to our rooms page.

below the hero we will have a`serice section`
where we use react-icons to display the services that the hotel provide

`featured room`
After that we will have a featured room section that wil have data for all the rooms of hotel but some rooms hotel wants to show as fetured so this will display the featured rooms

In both the pages for featured and our rooms together we will be using a room component to display that specific room and as you notice in the room component.we will have price for the room and name for the room
as we hvor over the card we will have a option of clicking and then we will navigate to a single room page where we will have information of just about the specific room weather that will be family delux room or single delux

### `404 page`

Since we are using a react-router if we navigate to a page that doesnot exist we will create a custom 404 page where we have an option of ruturn to home from the link or from nav bar.

### `Rooms page`

If we head over to the rooms page we will have all the rooms that currently hotel provides as well as since we have multiple rooms the user will also have an option of filtering them.

lets say iam intrested in family rooms select family this will display all the family rooms that hotel provides as i previously said we still have the acess to single room page(featues)where we navigate to that specific room

we also have an option of filtering more lets say we jugge by price and if we go below the price that iam looking for
notice it says "unfortunately no rooms matched"
what that means --if we do have the no rooms to display that match the serch parameter that will be the error msg

we can filter our romms even more for family rooms that provide breakfast as well as the pets
how ever i can also check for both or either one of them (breakfast/pets)

then i would be also intrested to stay with 4 people lets e
see which rooms allow 4 people

### Data and Deployment

Initially i worked with local data and then moved the data to contentful
and at last hosted the app in netlify
