//1. Import area
import { useReducer } from "react";
import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBSTRACTION } from "./reducer/actions/actions";


let oldState={
  result:0,
  leftValue:'',
  operator:'',
  rightValue:''
}

let reducerFunction = (oldState,action)=>{
    let newState = oldState;
    console.log('oldState --->',oldState);
    console.log('action --->',action);
    switch(action.type){
        case CLEAR:
          //alert('CLEAR');
          return {
            result:0,
            leftValue:'',
            operator:'',
            rightValue:''
          }
          break;
        case DIVISION:
          alert('DIVISION');
          break;
        case MULTIPLICATION:
          alert('MULTIPLICATION');
          break;
        case SUBSTRACTION:
          alert('SUBSTRACTION');
          break;
        case ADDITION:
          //alert('ADDITION');
          return {
            ...newState,
            operator:"+"
          }

          break;
        case RESULT:
          switch(newState.operator){
            case "+":
              return {
                ...newState,
                result: parseFloat(newState.leftValue) + parseFloat(newState.rightValue)
              }
              break;
            default:

          }
          alert('RESULT');

          break;
        case NUMBER:
          if(newState.operator === ''){

            return {
              ...newState,
              leftValue: newState.leftValue + action.payload,
              //view:newState.view +" "+ newState.leftValue
            }
          }else{
            return {
              ...newState,
              rightValue: newState.rightValue + action.payload,
              //view:newState.view +" "+ newState.leftValue
            }
          }
          break;
        default:

    }
    return newState;
}
//2. Defination area
function App() {
  //2.1 Hooks area
  const [newState,dispatch] = useReducer(reducerFunction,oldState)



  //2.2 Function defination area


  //2.3 Return statement
  return (
    <>
      {console.log('newState',newState)}
       <div className="container">
          <form action="true" name="calc" className="calculator">
            <input type="text" className="value" value={ newState.result === 0? newState.leftValue+newState.operator+newState.rightValue : newState.result } readOnly name="txt" />
            <span className="num clear" onClick={()=>{ dispatch({type:CLEAR})  }}><i>C</i></span>
            <span className="num" onClick={()=>{ dispatch({type:DIVISION})  }}><i>/</i></span>
            <span className="num" onClick={()=>{ dispatch({type:MULTIPLICATION})  }}><i>*</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:7})  }}><i>7</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:8})  }}><i>8</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:9})  }}><i>9</i></span>
            <span className="num" onClick={()=>{ dispatch({type:SUBSTRACTION})  }}><i>-</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:4})  }}><i>4</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:5})  }}><i>5</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:6})  }}><i>6</i></span>
            <span className="num plus" onClick={()=>{ dispatch({type:ADDITION})  }}><i>+</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:1})  }}><i>1</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:2})  }}><i>2</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:3})  }}><i>3</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:0})  }}><i>0</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'00'})  }}><i>00</i></span>
            <span className="num" onClick={()=>{ dispatch({type:NUMBER,payload:'.'})  }}><i>.</i></span>
            <span className="num equal" onClick={()=>{ dispatch({type:RESULT})  }}><i>=</i></span>
          </form>
        </div>

    </>
  );
}


//3. Export Area
export default App;