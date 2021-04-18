// 接口的扩展，接口可以扩展接口

interface Animal {
  eat (): any;
}

interface Person extends Animal {
  work (): void;
}

class SuperMan implements Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  work () {
    console.log(this.name + '在工作')
  }

  eat () {
    console.log(this.name + '在吃饭');
  }
  run (): any {
  }
}
// var p = new SuperMan('小红')
// p.work()
// p.eat()


class Programmer extends SuperMan implements Person {
  constructor(name: string) {
    super(name)
  }
  work () {
    console.log(this.name + '在工作')
  }

  eat () {
    console.log(this.name + '在吃饭');
  }

  run () {
    return 'zao'
  }

}



