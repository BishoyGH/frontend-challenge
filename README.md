# Frontend Challenge

## Exercise Description:

Your goal is to create an application thatretrieves the customer and transaction data from a providedAPI endpoint and displays it in a user-friendly format.

## The App should have the following features:

- A table that displays the list of customers along with their transaction data.
- The ability to filter the table by customer name or transaction amount.
- A graph that displays the total transaction amount per day for the selected customer.

## Requirements:

- Use a modern javascript Framework or library such as React, Angular, or Vue.js.
- Use any charting library to display the graph.
- Setup a local server to host the JSON data.
- Use the below data as an API. Please fill free to add data in the transaction dataset JSON for demonstration purposes.
- Create a new repo on your GitHub for your project , add your code to the repo and enable GitHub pages for your repo to host the application.

```JSON
{
  "customers": [
    {
      "id": 1,
      "name": "Ahmed Ali"
    },
    {
      "id": 2,
      "name": "Aya Elsayed"
    },
    {
      "id": 3,
      "name": "Mina Adel"
    },
    {
      "id": 4,
      "name": "Sarah Reda"
    },
    {
      "id": 5,
      "name": "Mohamed Sayed"
    }
  ],
  "transactions": [
    {
      "id": 1,
      "customer_id": 1,
      "date": "2022-01-01",
      "amount": 1000
    },
    {
      "id": 2,
      "customer_id": 1,
      "date": "2022-01-02",
      "amount": 2000
    },
    {
      "id": 3,
      "customer_id": 2,
      "date": "2022-01-01",
      "amount": 550
    },
    {
      "id": 4,
      "customer_id": 3,
      "date": "2022-01-01",
      "amount": 500
    },
    {
      "id": 5,
      "customer_id": 2,
      "date": "2022-01-02",
      "amount": 1300
    },
    {
      "id": 6,
      "customer_id": 4,
      "date": "2022-01-01",
      "amount": 750
    },
    {
      "id": 7,
      "customer_id": 3,
      "date": "2022-01-02",
      "amount": 1250
    },
    {
      "id": 8,
      "customer_id": 5,
      "date": "2022-01-01",
      "amount": 2500
    },
    {
      "id": 9,
      "customer_id": 5,
      "date": "2022-01-02",
      "amount": 875
    }
  ]
}
```
