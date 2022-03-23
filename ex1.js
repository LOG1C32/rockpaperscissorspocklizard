const computerChoiceDisp = document.createElement('h1');
const userchoiceDisp = document.createElement('h1');
const resultDisp = document.createElement('h1');
const gamegrid = document.getElementById('game');
gamegrid.append(userchoiceDisp, computerChoiceDisp, resultDisp);
const rock = '👊';
const paper ='✋';
const scissor='✌️';
const lizard='🤏';
const spock ='🖖';
//const choices = ['👊','✋','✌️','🤏','🖖'];
const choices = [rock,paper,scissor,lizard,spock];
let userchoice;
let computerchoice;

const handleClick = (e) => {
    userchoice= e.target.id
    userchoiceDisp.innerHTML = 'You: '+ userchoice
    generateComputerchoice()
    getResult()
}

const generateComputerchoice = () => {
    const randomNumber = choices[Math.floor(Math.random() * choices.length)]
    computerchoice = randomNumber
    computerChoiceDisp.innerHTML = 'Computer: '+ computerchoice     
}

for (let i=0; i< choices.length; i++){
    const button = document.createElement('button')
    button.id=choices[i]
    button.className="btn";
    button.innerHTML = choices[i]
    button.addEventListener('click',handleClick)
    gamegrid.appendChild(button)
}
const getResult = () => {
    switch(userchoice + computerchoice) {
        case '✌️✋':
        case '👊✌️':
        case '✋👊':
        case '✌️🤏':
        case '🖖👊':
        case '👊🤏':
        case '✋🖖':
        case '🖖✌️':
        case '🤏✋':
        case '🤏🖖':
            resultDisp.innerHTML = " YOU WIN! "
            resultDisp.style.color='green';
            break;
        case '✋✌️':
        case '✌️👊':
        case '👊✋':
        case '🤏✌️':
        case '👊🖖':
        case '🤏👊':
        case '🖖✋':
        case '✌️🖖':
        case '✋🤏':
        case '🖖🤏':   
            resultDisp.innerHTML = "YOU LOSE! "
            resultDisp.style.color='red';
            break;
        case '🤏🤏':
        case '🖖🖖':
        case '✋✋':
        case '✌️✌️':
        case '👊👊':
            resultDisp.innerHTML = " DRAW! "
            resultDisp.style.color='orange';
            break;
     }

}