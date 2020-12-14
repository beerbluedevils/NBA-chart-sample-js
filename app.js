const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]
//create function
const createChart = (games, targetTeam) => {
const parentUl = document.createElement("ul"); //create a parent element
for(let game of games){ //iterate each element in object
       const gameList = document.createElement("li"); //create list of game
       gameList.innerHTML = getScoreLine(game);
       gameList.classList.add(isWinner(game, targetTeam)? "win" : "loss");
       parentUl.append(gameList); //add li to the ul parent
    }
    return parentUl;
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team:hTeam, points:hPoints} = homeTeam; 
    const {team:aTeam, points:aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if( aPoints > hPoints){
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }
    else{
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
}

const gsSection = document.querySelector("#gs");
const hrSection = document.querySelector("#hr");
const hrChart = createChart(warriorsGames ,"Houston"); //reusable function
const gsChart = createChart(warriorsGames ,"Golden State"); //reusable function
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);