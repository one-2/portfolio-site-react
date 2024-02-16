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

### Design a NoSQL database structure for user services.
Projects            collection

Project
|- ObjectID         str
|- Title            str
|- DateFrom         int
|- DateTo           int
|- Summary          str
|- Skills           str
|- Body             str

Blogs               collection

Blog                dict
|- ObjectID         str
|- Title            str
|- DatePublished    int
|- Body             str

Users               collection

User                    dict
|- ObjectID             str
|- Name                 str
|- EmailAddress         str
|- DateTimeSubscribed   int
|- Subscriptions        [str ObjectID]

### Design a second NoSQL database structure for logging.
Common Log Format compliant (host ident authuser date request status bytes).

AdminLogs           collection

AdminLog            dict
|- host
|- ident
|- authuser
|- date
|- request
|- status
|- bytes
|- userAgent
|- referrer
|- ip
|- responseTime

UserLogs            collection

UserLog             dict
As for AdminLog.

ErrorLogs           collection

ErrorLog            dict
As for AdminLog, and also
|- message
|- stackTrace

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

https://www.linkedin.com/advice/0/how-can-you-ensure-secure-error-handling-logging
https://www.reddit.com/r/ExperiencedDevs/comments/17d876h/where_to_store_logs/
https://en.wikipedia.org/wiki/Common_Log_Format
Bing GPT.
