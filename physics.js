const object = {}
object.f = 0;
object.m = 0;
object.Δv = 0;
object.Δt = 0;
object.t = 0;
object.d = 0;

const getAcceleration = (object) => {
    if (typeof object === 'object' && !Array.isArray(object) && object !== null){
        if (object.f && object.m){
            return object.f / object.m;
        } else if (object.Δv && object.Δt){
            return object.Δv / object.Δt;
        } else if (object.t && object.d){
            return (object.d * 2)/ (object.t^2);
        } else {
            return 'impossible';
        }
    }
}