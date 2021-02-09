// const Potion = require("../lib/Potion");
const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory=[new Potion('health'),new Potion()]
}
Player.prototype.getStats=function(){
    return{
        health: this.health,
        agility:this.agility, 
        potions: this.inventory.length,
        strength: this.strength,
    }
};
Player.prototype.getInventory=function(){
    if(this.inventory.length){
        return this.inventory
    }else{
        return false
    }  
}
Player.prototype.getHealth=function(){
    return `${this.name} health is now ${this.health}`       
}
Player.prototype.isAlive=function(){
    if(this.health>0){
        return true
    }else{
        return false 
    }
}

Player.prototype.reduceHealth=function(value){
    this.health=Math.max(this.health-value,0)   
}

Player.prototype.getAttackValue=function(){
    const max=this.strength+5
    const min=this.strength-5
    return Math.floor(Math.random()*(max-min)+min)
}

Player.prototype.addPotion=function(potion){
    this.inventory.push(potion)
}

Player.prototype.usePotion=function(index){
    const potion=this.getInventory().splice(index,1)[0]
    
    switch(potion.name){
        case 'health':
            this.health+=potion.value
        break;
        case 'agility':
            this.agility+=potion.value
        break;
        case 'strength':
            this.strength+=potion.value
        break;
    }
}

module.exports = Player;
  
