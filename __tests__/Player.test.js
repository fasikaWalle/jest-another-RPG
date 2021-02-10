
const Player=require('../lib/Player')
const Potion=require('../lib/Potion')
jest.mock('../lib/Potion')
// const player=new Player()
test('check the player object',()=>{
    const player=new Player('dave')
    expect(player.name).toBe('dave')
    expect(player.health).toEqual(expect.any(Number))   
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
})
test("gets player stat's as an object",()=>{
    const player=new Player('dave')
    expect(player.getStats()).toHaveProperty('potions')
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
})
test('gets inventory from player or returns false',()=>{
    const player=new Player('dave')
    expect(player.getInventory()).toEqual(expect.any(Array))
    player.inventory=[]
    expect(player.getInventory()).toEqual(false)
})

test('gets player health value',()=>{
    const player=new Player('James')
    expect(player.getHealth()).toEqual(expect.stringContaining(player.name))
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
})
test('checks if the player is alive',()=>{
    const player=new Player('Dave')
    expect(player.isAlive()).toBeTruthy()
    player.health=0
    expect(player.isAlive()).toBeFalsy()
})

test('subtract from player health',()=>{
    const player=new Player("Dave")
    const oldHealth=player.health 
    player.reduceHealth(20)
    expect(player.health).toBe(oldHealth-20)
    player.reduceHealth(5000000)
    expect(player.health).toEqual(0)
})

test('gets players attack value',()=>{
    const player=new Player('Dave')
    player.strength=10
    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5)
    expect(player.getAttackValue()).toBeLessThanOrEqual(15)
})

test('if inventory add potion',()=>{
    const player=new Player('Dave')
    const oldCount=player.inventory.length
    player.addPotion(new Potion())
    expect(player.inventory.length).toBeGreaterThan(oldCount)
})
test('if inventory use potion',()=>{
    const player=new Player('dave')
    player.inventory=[new Potion(),new Potion(),new Potion()]
    const countPotion=player.inventory.length
    player.usePotion(1)
    expect(countPotion).toBeGreaterThan(player.inventory.length)
    
})

