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
        "@release-it/conventional-changelog": {
            "infile": "CHANGELOG.md",
            "preset": {
                "name": "conventionalcommits",
                "types": [
                    {
                        "type": "feat",
                        "section": "Features"
                    },
                    {
                        "type": "fix",
                        "section": "Bug Fixes"
                    },
                    {
                        "type": "chore",
                        "section": "Maintenance"
                    }
                ]
            }
        }
    }
}