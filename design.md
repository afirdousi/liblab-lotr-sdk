# Liblab LOTR SDK System Design
The design consists of several key classes, including the Client, Entity services, Filter, and Query.

## Classes

### Client

The Client class is a simple fetch wrapper that contains private fields for the API URL and version. 
It has only one exposed method, `get(url: string)`. 

### Entity services

Each of the supported entities has its service:

* movie
* quote

### BaseService

This abstract class serves as a base for all services hosting commong methods like getting resources by id or by queries.
It has one abstract method `getResourceUrl(): string`.


### Filter

This class is an API for filtering the entities and supports the following operations:

* `matches(value: string, negate?: boolean)` - field is an exact match
* `includes(values: string[], negate?: boolean)` - field includes at least one value
* `regex(value: string, negate?: boolean)` - matches Regular Expression
* `exists(negate?: boolean)` - field exists

### Query
Decision for query to extend `Partial<Pagination>` instead of composition is intentional because of the client
usage. 

Preferred:
```
client.movies({ page: 1, offset: 1 });
```

over
```
client.movies({
    pagination: { page: 1, offset: 1 }
});
```

#### Discussion
I am going to attempt to evaluate the basic design on SOLID principles at a v high level keeping the time in view

1. Single Responsibility: Each of the class is responsible for managing its own functionality, no overlap or inappropriate aggregation of functionality
2. Open/Closed: Don't have to modify existing code to extend behavior if they don't want to. TBH, this is debatable as to what level of extension are we looking for. For example, if there is a new array type prop on the entity, we will have to add a method to drive changes (add/remove) to it instead of updating the array directly.
3. Substitution Principle: Abstracted out common service level functionality into BaseService getById() and getList() . Both Movie and Quote extend and are substitutable objects for base functionality
4. Interface Segregation: Doesn't apply strictly to vanilla JS except for when setting options. In our case, I have tried applying this to Query object. First, there is a query interface with optional fields, then this Query interface type is passed in to methods like getList() in base service. Response is based on availability of the object.
5. Dependency Inversion: At high level, this is where we would generally hand over control from the function itself to the caller of the function. In case of the Client class, we could have given control to the caller to set an alternate URl instead of depending on hard coded URL and the functionality get top. The ClientConfig interface can technically have an optional baseURL and API version key. These things are debatable and in my experience depends on the situation.

### Request
Kindly check a few TODOs I have added in the project across files

### Next steps / Known Issues

1. The configuration of the client, including caching, was intended to be exposed, but it was not implemented.
2. The Quotes service can expose referential methods to get characters attached to each quote. Since we did not implement Character entity, I left it intentionally. TODO comments in Quote Service





