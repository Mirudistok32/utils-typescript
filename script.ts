
//Partial
type Person1 = { name: string, age: number }
type Person2 = Partial<Person1> // makes everything fields required
// keyof - get the keys
// next
// we create a new keys "P"
type MyPartial<T> = { [P in keyof T]?: T[P] } // keyof Person1 // Person[P]
type Person3 = MyPartial<Person1>