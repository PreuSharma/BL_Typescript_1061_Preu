"use strict";
//Union vs Intersection Types
/*
| Feature         | Union (|)                                         | Intersection (&) |
 |----------------|---------------------------------------------------|----------------------------------------------------|
 | Definition     | Allows a value to be one of multiple types.       | Combines multiple types; value must satisfy all.   |
 | Use Case       | When a value can have different types or shapes.  | When a value must have properties from all types.  |
 | Example        | string | number (either a string or a number).    | {name: string} & {age: number} (both required).    |

 */
