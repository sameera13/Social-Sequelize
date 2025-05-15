const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');  // import db, not sequelize

describe('Social Sequelize Test', () => {
    beforeAll(async () => {
        await db.sync({ force: true });  // use db, not sequelize
    });

    test("can create a User", async () => {
        const user = await User.create({ username: "john_doe", email: "john@example.com" });
        expect(user.username).toBe("john_doe");
    });

    test("can create a Profile associated with a User", async () => {
        const user = await User.create({ username: "jane_doe", email: "jane@example.com" });
        const profile = await Profile.create({ bio: "Hi there!", profilePicture: "pic.jpg", birthday: "1990-01-01" });
        await user.setProfile(profile);

        const result = await user.getProfile();
        expect(result.bio).toBe("Hi there!");
    });
});
