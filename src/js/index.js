const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

const rotation = 0;
const xPos = 0;
const yPos = 0;

const turnClockWise = () => {
    rotation += 90;
    bug.style.transform = `rotate${rotation}deg`;
};

const turnAntiClockWise = () => {
    rotation -= 90;
    bug.style.transform = `rotate${rotation}deg`;
};

const setTransform = () => {
    bug.style.left = `${xPos}px`;
    bug.style.top = `${yPos}px`; 
};
const stepLeft = () => {
   xPos > 0 && (xPos += -10);
   setTransform();
};

const stepRight = () => {
   xPos < 450 && ( xPos += 10);
   setTransform();
};

const stepUp = () => {
    yPos > 0 &&  (xPos += -10 );
    setTransform();
};

const stepDown = () => {
    yPos > 450 &&  (xPos += 10 );
    setTransform();
};

const home = () => {
    xPos = 0;
    yPos = 0;
    setTransform();
}; 

upBtn.addEventListener('click', stepUp);
downBtn.addEventListener('click', stepDown);
leftBtn.addEventListener('click', stepLeft);
rightBtn.addEventListener('click', stepRight);
homeBtn.addEventListener('click', home );
turnClockwiseBtn.addEventListener('click', turnClockWise);
turnAntiClockwiseBtn.addEventListener('click', turnAntiClockWise);



 

    
    

