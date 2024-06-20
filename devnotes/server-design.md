# Server design
## Migrating away from CRA
I tried to create an Express server. It turns out Create React App, which I used to initialise this project, is no longer being maintained properly. The upgrade from Webpack 4 to 5 has broken CRA, and I can't run the server. I tried downgrading to Webpack 4 and the top fix on the bug's GitHub issue, but both methods broke other dependencies.

I don't want to delve into the configuration nightmare involved in ejecting from CRASince I'm new to this, I want to focus on the large-scale concepts at play in web development. I want to develop general skills like API development, database design, and frontend. I want to avoid getting bogged down in framework-specific tasks like configuration and package management.

Therefore, I've decided to migrate the app to the officially recommended framework - NextJS. The migration needs to be done over a weekend. I'll continue with my current server design/testing tasks in a new NextJS environment. When I have a couple of days free, I'll migrate the project completely.

## Frontend update
I updated the frontend to V2 after migrating from CRA. I included some more sophisticated features like dynamic page generation and page templating using React components to simplify the rest of the build and practice some more advanced features. It still doesn't look how I want it so I have been considering improvements. I think it would help to do some basic design courses on youtube but that is pretty low on the priority list for now. Once the backend is done I will have a final, informed crack at the UI design.

## Using MongoDB
I decided to learn to use the MongoDB framework because it's a flexible structure which will be generally useful in future projects. They also offer a free tier on their hosting service, Atlas, which is a plus.

## API design and Express routes
Our website queries a blogs and user database. For admin, we can manually query the user signups db collection with curl for now. I might build an admin panel to handle this when I have set up some basic request logging. Right now, there's not much to put on there.

I considered using Mongoose and specced out an update to the backend to integrate this system. After a night of prototyping, I decided it was too much debt for not much gain. I wrote some validator prototypes myself and finally decided to use express-validator for security and simplicity without the extra debt. Similarly, I experimented with automated testing of the backend, but it was too much extra learning and tech debt to justify for my limited use case. I will save Jest testing for an extension task and do it manually for the V2 of the site.

## Notes v2
* Push it as soon as it works
* Read the relevant docs earlier, espec for new frameworks. I forgot you needed to pass children to layouts and deleted the {children} prop, which broke something I'd just finished and not yet pushed. In my sleepy state I was baffled.
* 

## Want to learn (backend)
* Jest for testing
* NPM configurations (package, espec package.scripts; package-lock) for understanding
* Running a dedicated backend eg on Heroku rather than in the serverless scheme provided by Vercel
* Better ui design


## References
### Notes
* The Create React App issue I faced - https://github.com/facebook/create-react-app/issues/11756
* Top recommended framework is NextJS - https://react.dev/learn/start-a-new-react-project

### Building the API
* Connecting Node to MongoDB - https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/
* Caching server connections to improve performance - https://www.mongodb.com/docs/manual/administration/connection-pool-overview/
