import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House"
import Spread from "./Spread"
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithArrays/>
         <WorkingWithFunctions/>
         <TemplateLiterals/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}
export default JavaScript