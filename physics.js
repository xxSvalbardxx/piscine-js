
const getAcceleration = (object) => {
    
    if (typeof object === 'object' && !Array.isArray(object) && object !== null){
        if ((object.f && object.m)&& (typeof object.f === 'number' && typeof object.m === 'number')){
            return object.f / object.m;
        } else if ((object.Δv && object.Δt)&& (typeof object.Δv === 'number' && typeof object.Δt === 'number')){
            return object.Δv / object.Δt;
        } else if ((object.t && object.d)&& (typeof object.t === 'number' && typeof object.d === 'number')){
            return (object.d * 2)/ (object.t * object.t);
        } else {
            return 'impossible';
        }
    }
}