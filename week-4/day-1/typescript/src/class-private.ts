class Base2 {
  private readonly x = 0
}
class Derived2 extends Base2 {
  getX (): number {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.x
  }
}
const d2 = new Derived2()
d2.getX()
