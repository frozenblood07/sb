const exec = require('child-process-promise').exec;

beforeEach(() => {
  expect.assertions(1);
});

/**
* action: No input
*/
test('Executing `shopback-calculator.js` should respond with `No input provided`', () => {

  return exec('node shopback-calculator.js')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('No input provided')
    }) 
})

/**
 * action: invalid action
 */
test('Executing `shopback-calculator.js invalid-action` should respond with `Invalid action`', () => {

  return exec('node shopback-calculator.js invalid-action')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Invalid action')
    }) 
})

/**
 * action: signup 
 */
test('Executing `shopback-calculator.js signup www.shopback.sg` should respond with `Award bonus: SGD 5`', () => {

  return exec('node shopback-calculator.js signup www.shopback.sg')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award bonus: SGD 5')
    }) 
})

test('Executing `shopback-calculator.js signup www.shopback.my` should respond with `Award bonus: MYR 10`', () => {

  return exec('node shopback-calculator.js signup www.shopback.my')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award bonus: MYR 10')
    }) 
})

test('Executing `shopback-calculator.js signup www.shopback.invalid` should respond with `Invalid domain.`', () => {

  return exec('node shopback-calculator.js signup www.shopback.invalid')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Invalid domain.')
    }) 
})


/**
 * action: spend 
 */
test('Executing `shopback-calculator.js spend 0` should respond with `No cashback`', () => {

  return exec('node shopback-calculator.js spend 0')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('No cashback')
    }) 
})

test('Executing `shopback-calculator.js spend 20` should respond with `Award cashback: 3.00`', () => {

  return exec('node shopback-calculator.js spend 20')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 3.00')
    }) 
})

test('Executing `shopback-calculator.js spend 100 5` should respond with `Award cashback: 5.00`', () => {

  return exec('node shopback-calculator.js spend 100 5')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 5.00')
    }) 
})

test('Executing `shopback-calculator.js spend 10 10 10` should respond with `Award cashback: 1.00`', () => {

  return exec('node shopback-calculator.js spend 10 10 10')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 1.00')
    }) 
})

test('Executing `shopback-calculator.js spend 20 10 15` should respond with `Award cashback: 2.00`', () => {

  return exec('node shopback-calculator.js spend 20 10 15')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Award cashback: 2.00')
    }) 
})

test('Executing `shopback-calculator.js spend 15 price` should respond with `Amount must be numeric.`', () => {

  return exec('node shopback-calculator.js spend 15 price')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Amount must be numeric.')
    }) 
})

test('Executing `shopback-calculator.js spend` should respond with `No arguments provided.`', () => {

  return exec('node shopback-calculator.js spend')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('No arguments provided.')
    }) 
})

/**
 * ACTION: redeem 
 */
test('Executing `shopback-calculator.js redeem www.shopback.sg` should respond with `Visit https://www.shopback.sg to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.sg')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.sg to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.my` should respond with `Visit https://www.shopback.my to start earning cashback!`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.my')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Visit https://www.shopback.my to start earning cashback!')
    })
})

test('Executing `shopback-calculator.js redeem www.shopback.invalid` should respond with `Invalid domain.`', () => {

  return exec('node shopback-calculator.js redeem www.shopback.invalid')
    .then((result) => {
      return expect(result.stdout.trim('\n')).toEqual('Invalid domain.')
    })
})