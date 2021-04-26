module.exports = {
    "extension": ["ts"],
    "recursive": true,
    "require": [
        "ts-node/register",
        "tsconfig-paths/register",
        "source-map-support/register"
    ],
    "spec": "test/**/*.ts",
};