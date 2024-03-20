class Greeter2 {
  public greet (): void {
    const name = this.getName()
    console.log(`Hello ${name}`)
  }

  protected getName (): string {
    return "Hi"
  }
}
class SpecialGreeter extends Greeter2 {
  public howdy (): void {
    console.log(this.getName())
  }
}
const b = new SpecialGreeter()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
b.getName()
