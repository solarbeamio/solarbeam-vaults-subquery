##Solarbeam vaults subquery 

Install SubQuery CLI globally on your terminal by using NPM:

```
npm install -g @subql/cli
```

```
yarn install
```

Start docker on local machine

Then run

```
yarn all
```

GraphQL URL

```
http://localhost:3000/
```

Query all
```
query{
  actions{
    nodes{
      id
      pid
      type
      user
      amount
      time
      blockNumber
    }
  }
}
```