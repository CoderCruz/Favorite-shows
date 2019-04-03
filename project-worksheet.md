# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|January 15| Project Description | Complete
|January 15| Wireframes / Priority Matrix / Functional Components | Complete
|January 16| Fetching Api | Complete
|January 16| Pseudocode / actual code | Complete
|January 16| Initial Clickable Model  | Complete
|January 16| MVP | Complete
|January 17| Functional Favorites button that renders on a new page when clicked | Complete
|january 18| Present | Complete


## Project Description

In this project i worked on a react based application. Where you can look through a ton of Naruto Episodes. You can click on the anime, and favorite them and that will add the episode to your list.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

https://imgur.com/a/8Bowv6o

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP

- Find and use external api
- Render data on page in a list
- Render Episodes page, and your Favorites pages
- Add favorites button

#### PostMVP

- Add data to favorites section
- create description section in favorites
- Style and add transition
- Use local storage to have account always hold information

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

#### SAMPLE.....
| Component | Description |
| --- | :---: |  
| Nav | This will render the nav (stateless) |
| Anime List | This will dynamically render anime's from an API (state) |
| Favorite List | This will dynamically render your favorite anime's in a list (state) |
| Footer | This will render the footer (stateless)|


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Components | H | 6hrs| 3.5hrs |
| Working with API | H | 2hrs| 4.5hrs |
| Rendering objects into favorites component | H | 5hrs| 3.5hrs |
| Styling | L | 3hrs| 3hrs |
| Total | H | 16hrs| 14.5hrs |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description |
| --- | :---: |  
| addFavorite | This helps me pass methods through props. In other words lifting state |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

 #### SAMPLE.....
| Library | What it Does |
| --- | :---: |  
| Kitsu API | Used to get information on episodes to use |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
addFavorite = (obj) => {
  this.setState({
    favorites: [...this.state.favorites, obj]
  })

}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome |
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
