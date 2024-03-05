//still need to create dateFormat file in Utils folder

const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
    projectLink: {
        type: String,
        required: 'Must be a valid link to webpage or source code',
        minlength: 1,
        maxlength: 500,
    },
    githubLink: {
        type: String,
        required: 'Must be a valid link to GitHub repository',
        minlength: 1,
        maxlength: 500,
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 500,
        trim: true,
    },
    projectAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments',
        },
    ],
});

const Project = model('Project', projectSchema);

module.exports = Project;