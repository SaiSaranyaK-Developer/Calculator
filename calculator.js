class calculator{
    constructor(prevOperandTextElement,currentOperandTextElement){
        this.prevOperandTextElement=prevOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();

    }

    clear(){
        this.currentOperand="";
        this.previousOperand="";
        this.operation=undefined;


    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1);

    }

    appendNumber(number){
        if(number==='.' && this.currentOperandTextElement.innerText.includes('.'))return;
        
        this.currentOperand=this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation){
        if(currentOperandTextElement.innerText==='')return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation=operation;
        this.previousOperand=this.currentOperand;
        this.currentOperand=''

    }

    compute(){

        let computation;
        let prev=parseFloat(this.previousOperand);
        let current=parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current))return;

        switch(this.operation){
            case '+':
                computation=prev+current;
                break;
            case '-':
                    computation=prev-current;
                    break;
            case '*':
                computation=prev*current;
                break;
            case '/':
                computation=prev/current;
                break;
            default:
                return;   
        }
        this.currentOperand=computation;
        this.previousOperand='';
        this.operation=undefined;

        



    }

    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand;
        if(this.operation!=null){
            this.prevOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`;

        }else{
            this.prevOperandTextElement.innerText='';
        }

        
        

    }
}





const numberButtons=document.querySelectorAll('[data-number]');
const operationButtons=document.querySelectorAll('[data-operation]');
const equalsButton=document.querySelector('[data-equals]');
const deleteButton=document.querySelector('[data-delete]');
const allClearButton=document.querySelector('[data-all-clear]');
const prevOperandTextElement=document.querySelector('[data-previous-operand]');
const currentOperandTextElement=document.querySelector('[data-current-operand]');

const calci=new calculator(prevOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calci.appendNumber(button.innerText);
        calci.updateDisplay();
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calci.chooseOperation(button.innerText);
        calci.updateDisplay();
    })
})

equalsButton.addEventListener('click',()=>{
    calci.compute();
    calci.updateDisplay();
})

allClearButton.addEventListener('click',()=>{
    calci.clear();
    calci.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
    calci.delete();
    calci.updateDisplay();
})