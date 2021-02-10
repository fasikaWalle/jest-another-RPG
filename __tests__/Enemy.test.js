
const Potion=require("../lib/Potion.js")
const Enemy=require("../lib/Enemy.js")
jest.mock("../lib/Potion")

test('create an enemy object',()=>{
    const enemy=new Enemy('Goblin','Sword')
    expect(enemy.name).toBe("Goblin")
    expect(enemy.weapon).toBe("Sword")
    expect(enemy.health).toEqual(expect.any(Number))
    expect(enemy.agility).toEqual(expect.any(Number))
    expect(enemy.strength).toEqual(expect.any(Number))
    expect(enemy.potion).toEqual(expect.any(Object))
})
test('check if the enemy is alive or not',()=>{
    const enemy=new Enemy('Goblin','sword')
    expect(enemy.isAlive()).toBeTruthy()
    enemy.health=0
    expect(enemy.isAlive()).toBeFalsy() 
})
test('get health value',()=>{
    const enemy=new Enemy('Goblin','Sword')
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.name))
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()))
})

test("gets enemy's attack value",()=>{
    const enemy=new Enemy('Goblin','Sword')
    enemy.strength=10
    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5)
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15)                                
})
test("subtracts from enemy's health",()=>{
    const enemy=new Enemy('Goblin','Sword')
    const oldHealth=enemy.health
    enemy.reduceHealth(10)
    expect(enemy.health).toBe(oldHealth-10)
    enemy.reduceHealth(9999999)
    expect(enemy.health).toBe(0)
})
test("get's description of the enemy",()=>{
    const enemy=new Enemy('Goblin','Sword')
    expect(enemy.getDesciption()).toEqual(expect.stringContaining('Goblin'))
    expect(enemy.getDesciption()).toEqual(expect.stringContaining('Sword'))
})