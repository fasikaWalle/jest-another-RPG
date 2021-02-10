const Potion=require('../lib/Potion')
function Enemy(name,weapon){
    this.name=name
    this.weapon=weapon
    this.potion=new Potion()
    this.health=Math.floor(Math.random()*10+85)
    this.agility=Math.floor(Math.random()*5+5)
    this.strength=Math.floor(Math.random()*5+5)
  
}
// Enemy.prototype.getAttackValue=function(value){
//     const min=this.strength-5
//     const max=this.strength+5
//     return Math.floor(Math.random()*(max-min)+min)
// }
Enemy.prototype.getHealth=function(){
    return `${this.name} health is now ${this.health}`
}

Enemy.prototype.isAlive=function(){
    if(this.health){
        return true
    }else{
        return false
    }
}
Enemy.prototype.getAttackValue=function(){
    const max=this.strength+5
    const min=this.strength-5
    return Math.floor(Math.random()*(max-min)+min)
}
Enemy.prototype.reduceHealth=function(health){
    this.health=Math.max(this.health-health,0) 
}
Enemy.prototype.getDesciption=function(){
    return `this ${this.name} have ${this.weapon}`
}

module.exports=Enemy