///closure  is an inner functio that has access to the scope of an enclosing funciton 
//a clsrue has access to 3 separates scopes
/*
  vars in own scopes
  access to outer function 
  vars in global scope
*/
// closure has access to 
// 1, outer param
// 2 param to ourter function 
/*
  the closre has access to 
    its params
    params of outer function
*/


const globalVariable = ' global var';

function outterFunc(param1) {
  const variable1 = 'var one';

  function innerFunc(param2){
    const variable2 = 'var two'
  

  console.log('GLOBAL VAR' + globalVariable);
    console.log('variable 1' + variable1)
      console.log('variable 2' + variable2)
        console.log('param1' + param1)
          console.log('param2' + param2)
}
innerFunc('param one');

}
outterFunc('param two')
