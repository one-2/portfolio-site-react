# Server design
I tried to create an Express server. It turns out Create React App, which I used to initialise this project, is no longer being maintained properly. The upgrade from Webpack 4 to 5 has broken CRA, and I can't run the server. I tried downgrading to Webpack 4, but this causes errors as well.

Since I'm new to this, I've decided to skip the configuration nightmare involved in ejecting from CRA, and instead migrate to the officially recommended framework - NextJS. 
https://react.dev/learn/start-a-new-react-project
