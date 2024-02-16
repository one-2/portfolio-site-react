# Backend design
## Tasks
### Specify the database requirements. Justify your choice.
I will design the database to the BASE model (basically available, soft state, and eventually consistent), rather than the ACID model, since
* Availability is a higher priority than consistency.
* The same data will not be accessed by several users at once in any foreseeable future of this application.
* Development velocity is a higher priority than data stability.

### Choose a technology. Justify your choice.
I will use MongoDB for the database. It uses a simple, flexible NoSQL data model. I chose MongoDB because
* It's simple.
* It's easily extendable, should I choose to expand my site's functionality.
* It's widely used in industry.
* Community support and integration documentation is strong. MongoDB is commonly used in concert with the other elements of my stack.

### Design a NoSQL database structure.
Projects            collection

Project
|- ObjectID         str
|- Title            str
|- From date        str
|- To date          str
|- Summary          str
|- Skills           str
|- Body             str

Blogs               collection

Blog                dict
|- ObjectID         str
|- Title            str
|- Publish date     str
|- Body             str

Users               collection

User                dict
|- ObjectID         str
|- Name             str
|- Email address    str
|- Signup date      str
|- Subscriptions    [str ObjectID]

## Enhancing the backend
Future options include
1. Caching.
2. Indexing with MongoDB.
3. Compression.
4. Lazy loading / file splitting.
5. Optimising assets.

## References
https://www.lifewire.com/the-acid-model-1019731
https://aws.amazon.com/compare/the-difference-between-acid-and-base-database/
https://www.linkedin.com/advice/0/how-can-you-optimize-mern-stack-application-performance-mzdhf
