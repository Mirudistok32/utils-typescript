"use strict";
// //Partial
// type Person1 = { name: string, age: number }
// type Person2 = Partial<Person1> // makes everything fields required
// // keyof - get the keys
// // next
// // we create a new keys "P"
// type MyPartial<T> = { [P in keyof T]?: T[P] } // keyof Person1 // Person[P]
// type Person3 = MyPartial<Person1>
// // Required
// type Animal1 = {name?:string, weight?: number}
// type Animal2 = Required<Animal1>
// // keyof -get the keys
// // next
// // makes everythins fields not required
// // -?
// type MyRequired<T> = {[P in keyof T]-?: T[P]}
// type Animal3 = MyRequired<Animal1> 
// // NonNullable
// // clear in type all "undefined" and "null"
// type Color1 = string | undefined | null
// type Color2 = NonNullable<Color1>
// type MyNonNullable<T> = T extends null | undefined ? never : T
// type Color3 = MyNonNullable<Color1>
//# sourceMappingURL=script.js.map