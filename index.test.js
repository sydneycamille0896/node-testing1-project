const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
   test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
     utils.trimProperties(input)
    expect(input).toEqual(expected)
   })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
   test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
   })
   test('[4] the object returned is the exact same one we passed in', () => {})
  const a = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = a
  const actual = utils.trimPropertiesMutation(a)
  expect(actual).toBe(expected)
})

describe('[Exercise 3] findLargestInteger', () => {
   test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const expected = 3
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
   })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
   test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    counter.countDown()
    expect(counter.currNumber).toBe(3)    
   })
   test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    counter.countDown()
    //console.log(counter.currNumber)
    expect(counter.currNumber).toBe(2) 
   })
   test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.currNumber).toBe(0) 
   })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
   test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
   })
   test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toBe("summer")
    expect(seasons.next()).toBe("fall")
    
   })
   test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toBe("summer")
    expect(seasons.next()).toBe("fall")
    expect(seasons.next()).toBe("winter")
   })
   test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toBe("summer")
    expect(seasons.next()).toBe("fall")
    expect(seasons.next()).toBe("winter")
    expect(seasons.next()).toBe("spring")
   })
   test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toBe("summer")
    expect(seasons.next()).toBe("fall")
    expect(seasons.next()).toBe("winter")
    expect(seasons.next()).toBe("spring")
    expect(seasons.next()).toBe("summer")
  })
   test('[14] the 40th call of seasons.next returns "spring"', () => {
    let result;
    for (let i = 0; i < 40; i++){
      result = seasons.next()
    }
    expect(result).toBe("spring")
   })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
   test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(5)).toBe(5)
   })
  test('[16] driving the car uses gas', () => {
    focus.drive(60)
    expect(focus.tank).toBe(18)
  })
   test('[17] refueling allows to keep driving', () => {
    focus.drive(700)
    expect(focus.tank).toBe(0)
    expect(focus.refuel(10)).toBe(300)
   })
   test('[18] adding fuel to a full tank has no effect', () => {
    console.log(focus.refuel(90))
    expect(focus.refuel(90)).toBe(600)
   })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
   test('[19] resolves true if passed an even number', async () => {
    let result = await utils.isEvenNumberAsync(10)
    expect(result).toBe(true)
   })
   test('[20] resolves false if passed an odd number', async () => {
    let result = await utils.isEvenNumberAsync(9)
    expect(result).toBe(false)
   })
})
