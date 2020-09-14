
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


// // Pick только какие параметры внести
// type Vector3 = { x: number, y: number, z: number }
// type Vector2 = Pick<Vector3, 'x' | "y">
// type MyPick<T, K extends keyof T> = {[P in K]: T[P]}
// type Vector1 = MyPick<Vector3, 'z'>


// // Extract то что общее
// type A = string | number | boolean
// type B = string | number
// type C = Extract<A,B>
// type MyExtract<T1,T2> = T1 extends T2 ? T1 : never
// type D = MyExtract<A,B>

// //Exclude то что необщее
// type E = Exclude<A,B>
// type MyExclude<T1,T2> = T1 extends T2 ? never : T1
// type F = MyExclude<A,B>


// // Omit только какие параметры не вносить
// type Person1 = { name: string, age: number, weight: number, height: number }
// type Person2 = Omit<Person1, 'weight' | 'height'>
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// type Person3 = MyOmit<Person1, 'age' | 'name'>


// //
// function foo1(a: string, b: number): boolean {
//     return a.length > b.toString().length
// }
// class Class1 {
//     a: boolean
//     b: string

//     constructor(a: boolean, b: string) {
//         this.a = a
//         this.b = b
//     }
// }

// type A = typeof foo1
// type B = typeof Class1

// // Parameters возв. кортеж типов входных параметров
// type C = Parameters<A>
// type MyParameters<T extends (...args: any) => any> =
//     T extends (...args: infer P) => any ? P : never
// type D = MyParameters<A>

// // ConstructorParameters
// type E = ConstructorParameters<B>
// type MyConstructorParameters<T extends new (...args: any) => any> =
//     T extends new (...args: infer P) => any ? P : never
// type F = MyConstructorParameters<B>

// // ReturnType
// type G = ReturnType<A>
// type MyReturnType<T extends (...args: any) => any> =
//     T extends (...args: any) => infer P ? P : any
// type H = MyReturnType<A>

// type L = InstanceType<B>
// type MyInstanceType<T extends new (...args: any) => any> =
//     T extends new (...args: any) => infer P ? P : any
// type O = MyInstanceType<B>