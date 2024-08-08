import {Observable} from "./observable";
import './map'

const obs = new Observable<number>()
const mappedObs = obs.map(x => x * 2)
mappedObs.subscribe(value => console.log(value))

obs.next(1)
obs.next(2)
obs.next(3)
