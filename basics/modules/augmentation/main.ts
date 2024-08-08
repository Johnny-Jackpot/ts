import { Observable } from "./observable";
import "./map";

const obs = new Observable<number>((v) => {});
const mappedObs = obs.map((x) => x * 2);
mappedObs.subscribe((value) => console.log(value));

obs.next(1);
obs.next(2);
obs.next(3);

const arr = [1, 2, 3, 4];
const obs2 = arr.toObservable();
obs2.subscribe((value) => console.log(value));
obs2.next(5);
