class Player 
{

  constructor(id, name, year, imagen, password)
  {
    this.id = id;
    this.year = year;
    this.name = name;
    this.image = imagen;
    this.password = password;
    this.rankings = [];
    this.bestRank = 0;
  }

  getYear()
  {
    return this.year;
  }

  getPassword()
  {
    return this.password;
  }

  getImage()
  {
    return this.image;
  }

  getId()
  {
    return this.id;
  }
  
  getName(){
    return this.name;
  }

  getRankings()
  {
    return this.rankings;
  }

  getBestRank()
  {
    return this.bestRank;
  }

  hasPass(playerPass)
  {
    return this.password === playerPass;
  }

  hasName(playerName)
  {
    return this.name === playerName;   
  }

  hasId(playerId){
    return this.id === playerId;    
  }

  addRank(newRank)
  {
    this.rankings.push(newRank);
    if (newRank > this.bestRank)
    {
      this.bestRank = newRank;
    }
  }

  editProfile(newName, newYear, newPassword)
  {
    this.name = newName;
    this.year = newYear;
    this.password = newPassword;
  }
}

module.exports = Player;

