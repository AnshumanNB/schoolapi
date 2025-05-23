const School = require('../models/schoolModel');
const { calculateDistance } = require('../utils/distance');

exports.addSchool = async (req, res) => {
    try {
        const data = await School.create(req.body)
        return res.json({ message: 'School added', school: data });
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};

exports.listSchools = async (req, res) => {
    try {
        const data = await School.find({});
        const userLat = parseFloat(req.body.latitude);
        const userLon = parseFloat(req.body.longitude);

        const sorted = data.map(s => ({
            ...s.toObject(),
            distance: calculateDistance(userLat, userLon, s.latitude, s.longitude),
        })).sort((a, b) => a.distance - b.distance);

        return res.json(sorted);
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message });
    }
};
