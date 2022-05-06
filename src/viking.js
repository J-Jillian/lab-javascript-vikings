// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack () {
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength)
    this.name = name
    
  }
  battleCry(){
    return  'Odin Owns You All!'
  }
}

// const Jillian = new Soldier (100, 10);
// Jillian.receiveDamage(30);

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength)
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health > 0){
      return `A ${this.name} has received ${damage} points of damage`
    } else {
      return `A ${this.name} has died in combat` 
    }
      
    }
  }
    

//  
// }

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
