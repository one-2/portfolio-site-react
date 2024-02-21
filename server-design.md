# Server design
## Notes
I tried to create an Express server. It turns out Create React App, which I used to initialise this project, is no longer being maintained properly. The upgrade from Webpack 4 to 5 has broken CRA, and I can't run the server. I tried downgrading to Webpack 4 and the top fix on the bug's GitHub issue, but both methods broke other dependencies.

I don't want to delve into the configuration nightmare involved in ejecting from CRASince I'm new to this, I want to focus on the large-scale concepts at play in web development. I want to develop general skills like API development, database design, and frontend. I want to avoid getting bogged down in framework-specific tasks like configuration and package management.

Therefore, I've decided to migrate the app to the officially recommended framework - NextJS. The migration needs to be done over a weekend. I'll continue with my current server design/testing tasks in a new NextJS environment. When I have a couple of days free, I'll migrate the project completely.


## API
We need methods to serve database queries from our website. Our website queries
1. Projects db.
    - Retrieve Project information for render.

2. Blogs db.
    - Retrieve Blog information for render.

3. BugReports db.
    - Add a new BugReport.

4. Subscriber db.
    - Add a subscriber.
    - Retrieve a list of subscribers.

5. AdminLog db.
    - Add a log.

6. SubscriberLog db.
    - Add a log.

7. ErrorLog db.
    - Add a log.



## References
The issue I faced - https://github.com/facebook/create-react-app/issues/11756
Top recommended framework is NextJS - https://react.dev/learn/start-a-new-react-project
