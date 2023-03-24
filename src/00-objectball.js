function gameObject(){
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players:{
         "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
         },
         "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
         },
         "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
         },
         "Mason Plumlee": {
          number: 1, 
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6, 
          steals: 3,
          blocks: 8,
          slamDunks: 5
         },
         "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2, 
          assists: 2,
          steals: 4, 
          blocks: 11,
          slamDunks: 1
         }
      }
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
         "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1, 
          assists: 1,
          steals: 2, 
          blocks: 7,
          slamDunks: 2
         },
         "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4, 
          assists: 7,
          steals: 7, 
          blocks: 15,
          slamDunks: 10
         },
         "Desagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12, 
          assists: 12,
          steals: 4, 
          blocks: 5,
          slamDunks: 5
         },
         "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3, 
          assists: 2,
          steals: 1, 
          blocks: 1,
          slamDunks: 0
         },
         "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12, 
          assists: 12,
          steals: 22, 
          blocks: 5,
          slamDunks: 12
         }
      }

    }
  }
}


//Returns the name of the home team.
function homeTeamName(){
  return gameObject()["home"]["teamName"];
}


//Returns the name of the away team.
function awayTeamName(){
  return gameObject()["away"]["teamName"];
}


//Takes a player name and returns the number of points scored by that player.
function numPointsScored(playerName){
  const game = gameObject();
  for (const gameKey in game){
    const player = game[gameKey]["players"];
    for (const playerKey in player){
      if (playerKey === playerName){
        return player[playerKey]["points"];
      }
    }
  }

  //if not found
  return null;
}


//Takes a player name and returns the shoe size of that player
function shoeSize(playerName){
  const game = gameObject();
  for (const gameKey in game){
    const player = game[gameKey]["players"];
    for (const playerKey in player){
      if (playerKey === playerName){
        return player[playerKey]["shoe"];
      }
    }
  }

  //if not found
  return null;
}


//Takes a team name and returns an array of the team colors.
function teamColours(teamName){
  const game = gameObject();
  for (const gameKey in game){
    if (game[gameKey]["teamName"] === teamName)
      return game[gameKey]["colors"];
  }

  return null;
}


//Returns an array of the team names.
function teamNames(){
  const game = gameObject();
  let teamNames = [];

  for (const gameKey in game){
    teamNames.push(game[gameKey]["teamName"]);
  }

  return teamNames;
}


//Takes a team name and returns an array of the jersey numbers for the team.
function playerNumbers(teamName){
  const game = gameObject();
  let teamNumbers = [];

  debugger;

  for (const gameKey in game){
    if (game[gameKey]["teamName"] === teamName){
      const playerObject = game[gameKey]["players"];
      debugger;
      for (const playerKey in playerObject){
         teamNumbers.push(playerObject[playerKey]["number"]);
         debugger;
      }
    }
  }
  return teamNumbers;
}


//Takes the player name and returns an array of the player stats.
function playerStats(playerName){
  const game = gameObject();
  let playerStats = [];
  debugger

  for (const gameKey in game){
    debugger
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if (playerKey === playerName){
        playerStats.push(playerObject[playerKey])
      }
      debugger
    }
  }

  return playerStats;
}


//Takes the player name and returns an object of the player stats.
function playerStats(playerName){
  const game = gameObject();
  let playerStats = {};
  debugger

  for (const gameKey in game){
    debugger
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if (playerKey === playerName){
        playerStats = {[playerKey]: playerObject[playerKey]}
        // playerStats.push(playerObject[playerKey])
      }
      debugger
    }
  }

  return Object.values(playerStats)[0];
}

//Returns the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds(){
  const game = gameObject();
  let bigShoe = 0;
  let rebounds = null;               //method 1
  // let playerWithBiggestShoe = {}; //method 2

  for (const gameKey in game){
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if(playerObject[playerKey]["shoe"] > bigShoe){
          bigShoe = playerObject[playerKey]["shoe"];
          rebounds = playerObject[playerKey]["rebounds"];       //method 1
          // playerWithBiggestShoe   = playerObject[playerKey]; //method 2
      }
    }
  }

  return rebounds; //method 1
  // return playerWithBiggestShoe["rebounds"];    //method 2
}

/*******************************************BONUS QUESTIONS*************************************************/

//Returns the name of the player with the most points.
function mostPointsScored(){
  const game = gameObject();
  let mostPointsScored = 0;
  let playerName = "";

  for (const gameKey in game){
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if (playerObject[playerKey]["points"] > mostPointsScored){
        mostPointsScored = playerObject[playerKey]["points"];
        playerName = playerKey;
      }
    }
  }


  return playerName;
}


//Returns the team name of the team with the most points.
function winningTeam(){
  const game = gameObject();
  let mostPoints = 0;
  let winningTeamName = "";

  for (const gameKey in game){
    let accumulator = 0;
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      accumulator += playerObject[playerKey]["points"];
    }
    
    if (accumulator > mostPoints){
      mostPoints = accumulator;
      winningTeamName = game[gameKey]["teamName"];
    }
  }

  return winningTeamName;
}


//Returns the name of the player with the longest name.
function playerWithLongestName(){
  const game = gameObject();
  let longestName = "";

  for(const gameKey in game){
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if (playerKey.length > longestName.length){
         longestName = playerKey;
      }
    }
  }

  return longestName;
}


//Returns true if the player with the longest name had the most steals.
function doesLongNameStealATon(){
  const game = gameObject();
  let playerStatsLongName = {};
  let longestName = "";
  let mostSteals = 0;

  for (const gameKey in game){
    const playerObject = game[gameKey]["players"];
    for (const playerKey in playerObject){
      if (playerKey.length > longestName.length){
        longestName = playerKey;
        playerStatsLongName = playerObject[playerKey];
      }
      if (playerObject[playerKey]["steals"] > mostSteals){
        mostSteals = playerObject[playerKey]["steals"];
      }
    }
  }

  return playerStatsLongName["steals"] === mostSteals ? true : false;
}

// console.log(homeTeamName());
// console.log(awayTeamName());
// console.log(numPointsScored("Desagna Diop"));
// console.log(playerNumbers("Brooklyn Nets"));
// console.log(playerStats("Ben Gordon"));
// console.log(bigShoeRebounds());
// console.log(mostPointsScored());
// console.log(winningTeam());
// console.log(doesLongNameStealATon());