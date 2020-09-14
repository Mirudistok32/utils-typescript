
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

// // Record
// type Dimensions1 = {width: number, height: number, length: number}
// type Dimensions2 = Record<'width' | 'height' | 'length', number>
// type MyRecord<K extends keyof any,T> = {[P in K]: T}
// type Dimensions3 = MyRecord<'width' | 'height' | 'length', string>

// Readonly
type Articlel = { title: string, page: number }
type Article2 = Readonly<Articlel>
type MyReadonly<T> = {readonly [P in keyof T]: T[P]}
type Article3 = MyReadonly<Articlel> 

const article1: Articlel = { title: "Статья 1", page: 12 }
const article2: Article2 = { title: "Статья 1", page: 12 }
const article3: Article3 = { title: "Статья 1", page: 12 }
