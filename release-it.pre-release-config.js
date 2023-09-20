module.exports = {
    "git": {
        "commitMessage": "chore: release v${version}"
    },
    "github": {
        "release": true
    },
    "npm": {
        "publish": true
    },

    "plugins": {
        // do not use changelogs in prereleases
    }
}