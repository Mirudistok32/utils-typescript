"use strict";
// //Partial
// type Person1 = { name: string, age: number }
// type Person2 = Partial<Person1> // makes everything fields not required
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
// // makes everythins fields required
// // -?
// type MyRequired<T> = {[P in keyof T]-?: T[P]}
// type Animal3 = MyRequired<Animal1> 
// // NonNullable
// // clear in type all "undefined" and "null"
// type Color1 = string | undefined | null
// type Color2 = NonNullable<Color1>
// type MyNonNullable<T> = T extends null | undefined ? never : T
// type Color3 = MyNonNullable<Color1>
// // Record
// type Dimensions1 = {width: number, height: number, length: number}
// type Dimensions2 = Record<'width' | 'height' | 'length', number>
// type MyRecord<K extends keyof any,T> = {[P in K]: T}
// type Dimensions3 = MyRecord<'width' | 'height' | 'length', string>
// // Readonly
// type Articlel = { title: string, page: number }
// type Article2 = Readonly<Articlel>
// type MyReadonly<T> = {readonly [P in keyof T]: T[P]}
// type Article3 = MyReadonly<Articlel> 
// const article1: Articlel = { title: "Статья 1", page: 12 }
// const article2: Article2 = { title: "Статья 1", page: 12 }
// const article3: Article3 = { title: "Статья 1", page: 12 }
// // ReadonlyArray
// type Article1 = { title: string, page: number }
// type Articles1 = Array<Article1>
// type Articles2 = ReadonlyArray<Article1>
// const arr1: Articles1 = [
//     { title: "Look", page: 117 }
// ]
// arr1.push({ title: "See", page: 32 })
// const arr2: Articles2 = [
//     { title: "Look", page: 117 }
// ]
// const arr3 = [
//     { title: "Look", page: 117 }
// ] as const
// // Pick
// type Vector3 = { x: number, y: number, z: number }
// type Vector2 = Pick<Vector3, 'x' | "y">
// type MyPick<T, K extends keyof T> = {[P in K]: T[P]}
// type Vector1 = MyPick<Vector3, 'z'>
// // Extract
// type A = string | number | boolean
// type B = string | number
// type C = Extract<A,B>
// type MyExtract<T1,T2> = T1 extends T2 ? T1 : never
// type D = MyExtract<A,B>
//# sourceMappingURL=script.js.map