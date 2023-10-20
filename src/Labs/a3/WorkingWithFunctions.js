import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions"
import ImpliedReturn from "./ImpliedReturn"
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters"
import React from 'react';

function WorkingWithFunctions() {
   return(
      <div>
        <ES5Functions/>
        <ArrowFunctions/>
        <ImpliedReturn/>
        <FunctionParenthesisAndParameters/>
      </div>
   );
}
export default WorkingWithFunctions