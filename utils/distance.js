exports.calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRads = val => (val * Math.PI) / 180;1
    const R = 6371;
    const dLat = toRads(lat2 - lat1);
    const dLon = toRads(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRads(lat1)) * Math.cos(toRads(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
