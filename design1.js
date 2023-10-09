let score=JSON.parse(localStorage.getItem('score'))||{
Wins:0,
Loses:0,
Tie:0
  };
  
  updateScore();


function pickComputerMove()
{
  const RandomNumber=Math.random(); 
  let computermove=''; 
  if(RandomNumber>=0 && RandomNumber<1/3)
  {
     computermove='ROCK';
  }
  else if(RandomNumber>=1/3 && RandomNumber<2/3)
  {
     computermove='PAPER';
  }
  else{
     computermove='SCISOORS';
  }
  return computermove;
}
function playGame(playerMove)
{
  const computermove=pickComputerMove();

  let result='';
  if(playerMove=='SCISOORS')
  {
    if(computermove==='ROCK')
    {
         result='YOU LOSE';
    }
    else if(computermove=='PAPER')
    {
      result='YOU WIN';
    }
    else
    {
      result='TIE';
    }  
  }
  
  else if(playerMove=='PAPER')
  {
  if(computermove==='ROCK')
  {
       result='YOU WIN';
  }
  else if(computermove=='PAPER')
  {
    result='TIE';
  }
  else{
    result='YOU LOSE';
  }
  }

  else if(playerMove='ROCK')
  {
  if(computermove==='ROCK')
  {
       result='TIE';
  }
  else if(computermove=='PAPER')
  {
    result='YOU LOSE';
  }
  else{
    result='YOU WIN';
  }
  }
   if(result==='YOU WIN')
   {
    score.Wins+=1;
   }
   else if(result=='YOU LOSE')
   {
    score.Loses+=1;
   }
   else if(result==='TIE')
   {
    score.Tie+=1;
   }

  localStorage.setItem('score',JSON.stringify(score));
   updateScore();
  document.querySelector('#js_result').innerHTML=result;

  document.querySelector('#js_click').innerHTML= 'You '+playerMove+' - '+computermove+' Computer';

  
}

function updateScore()
{
  document.querySelector('#js_score').innerHTML='WINS: '+score.Wins+' LOSES: '+score.Loses+' TIES: '+score.Tie;
};


let isAutoplay= false;

let intervalId;
function autoplay()
{
  if(!isAutoplay)
  {
  intervalId= setInterval(function()
  {
       const playerMove=pickComputerMove();
       playGame(playerMove); 
  },1000)
  isAutoplay=true;
}
else{
    clearInterval(intervalId);
    isAutoplay=false;
}
};
