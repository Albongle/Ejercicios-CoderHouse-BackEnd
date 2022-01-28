import moment from 'moment';
export function ejecutar(){
    let fechaNac = new moment([1987,5,30]);
    let hoy = new moment();
    let duracion = moment.duration(hoy.diff(fechaNac));

    return `Desde mi nacimiento han pasado ${duracion.years()} años\nDesde mi nacimiento han pasado ${duracion.asDays().toFixed(0)} dias`   
}
