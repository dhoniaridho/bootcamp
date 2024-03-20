interface UserInterface {
  getName: () => string
}
class User implements UserInterface {
  private readonly fullName: string = ""

  constructor (name: string) {
    this.fullName = name
  }

  getName (): string {
    return `Hello ${this.fullName}`
  }
}
const user = new User("ABC")
console.log(user.getName())
