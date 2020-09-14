"use strict";
// //Partial
// type Person1 = { name: string, age: number }
// type Person2 = Partial<Person1> // makes everything fields required
// // keyof - get the keys
// // next
// // we create a new keys "P"
// type MyPartial<T> = { [P in keyof T]?: T[P] } // keyof Person1 // Person[P]
// type Person3 = MyPartial<Person1>
var article1 = { title: "Статья 1", page: 12 };
var article2 = { title: "Статья 1", page: 12 };
var article3 = { title: "Статья 1", page: 12 };
//# sourceMappingURL=script.js.map