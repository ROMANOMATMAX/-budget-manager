//como vamos a exportar mas de una funcion lo hacemos asi 

export const revisarPresupuesto = (presupuesto, restante) => {
 let clase;

 if((presupuesto/4)>restante) {//Me queda menos del 25% restante
    clase='alert alert-danger';
 } else if ((presupuesto/2)>restante){
    clase='alert alert-warning';
 }else {
    clase='alert alert-success';
 }

 return clase;

}