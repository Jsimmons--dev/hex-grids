export function hex_corner({center = [0,0], size = 1, i = 0, orient = 'pointy'} = {}){
    let angle_deg = 60 * i + 30;
    let angle_rad = Math.PI / 180 * angle_deg;
    let point1, point2;
    if(orient === 'pointy'){
        point1 = center[0]
        point2 = center[1]
    } else if (orient === 'flat') {
        point1 = center[1]
        point2 = center[0]
    }
    return [point1 + size * Math.cos(angle_rad),
            point2 + size * Math.sin(angle_rad)]
}
