const mongoose = require('mongoose')

const worldcupschema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,

    },
    born: {
        type: String
    },
    ICC_ranking: {
        type: Number
    },
    carier: {
        T20: {
            type: Number,
            required: true,

        },
        ODI: {
            type: Number,
            required: true,
        },
        Test: {
            type: Number,
            required: true,
        }
    },
    mostrun: {
        fifties: {
            T20: {
                type: Number,
            },
            ODI: {
                type: Number,

            },
            Test: {
                type: Number,

            }
        },
        centuries: {
            T20: {
                type: Number,
            },
            ODI: {
                type: Number,

            },
            Test: {
                type: Number,

            }
        }
    }
})

const mongoosemodel = new mongoose.model('t20cup', worldcupschema);

module.exports = mongoosemodel