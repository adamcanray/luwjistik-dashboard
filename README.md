## Prerequisite:

- NodeJS 12+

## Run app:

- `npm install`
- `npm start`

## Features, Helpers, etc:

- Fully responsive layout
- Model/Type declaration for all request and response (login, order)
- Extendable infrastructure to integrate with any protocol/data communication such as REST, gRPC, SOAP, GraphQL, etc.
- Login email and password form validation
- Handling auto-generate valid md5 string, handled by auth core utils and login worker
- Show message error when login failure (rare, but prepared)
- Store session in cookie that expires in 60 minutes (customizedable)
- Login flow for better UX (flow: request | success | failure)
- Beautifull dashboard overview
- Expand row table for detail information
- Order List and Create flow for better UX (flow: request | success | failure)
- Show message error when get order list or create order failure (rare, but prepared. list and create are separate flow, btw.)
- Anti-boring color variant feature (stored data in cookie)

## Preview:

- Login
  ![Login Page](docs/images/1.png)
- Login with color variant
  ![Login with Color variant](docs/images/2.png)
- Dashboard overview
  ![Dashboard Overview](docs/images/3.png)
- Dashboard overview after change color variant
  ![Dashboard Overview after change color variant](docs/images/4.png)
- Table orders empty data
  ![Table orders empty data](docs/images/5.png)
- Table orders with data and row expanded
  ![Table orders with data and row expanded](docs/images/6.png)
- Create new order form
  ![Create new order form](docs/images/7.png)
- Create new order success
  ![Create new order success](docs/images/8.png)
- Dashboard overview resopnsive
  ![Dashboard overview resopnsive](docs/images/9.png)
- Table orders resopnsive
  ![Table orders resopnsive](docs/images/10.png)
- Sidebar responsive
  ![Sidebar responsive](docs/images/11.png)
