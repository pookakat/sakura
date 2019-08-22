const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes){
    const UserProfiles = sequelize.define('UserProfiles',{
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len:
            // }

        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            default: 'Gardener'

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            default: 'none'
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false

        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true
        },
        geocode: {
            type: DataTypes.STRING

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false

        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
            

        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'flower'


        },
        intro: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'an empty plot...'

        },
        hasGarden: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false

        },
        availableTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5

        },
        organic: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        flowers:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        tomatoes:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        cucumbers:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        sweetPeppers: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        beans:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        peas: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        carrots: {
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        squash:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        lettuce:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        watermelon:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        onion:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        sweetCorn:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        cabbage:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        potatoes:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        radishes:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        mint:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        basil:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        cilantro:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        beets:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        zucchini:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        broccoli:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        other:{
            type: DataTypes.BOOLEAN,
            defaultValue: true

        },
        theme:{
            //this detects whether we are going on the forest or the flower theme. The default is false as the assumption is that the flower is our default and changing that is 'picking a new theme'
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    },{
        freezeTableName: true
    });
    UserProfiles.sync().then(()=>{
        UserProfiles.create({
            userName: 'bobpaulson',
            firstName:'robert',
            lastName: 'paulson',
            gender: 'male',
            email: 'rpaulson@gmail.com',
            location: 'durham',
            geocode: '23-58-23-192',
            password: 'we need to hash this',
            image: 'yay images',
            avatar: 'potato',
            intro: 'I like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: false,
            flowers: false,
            tomatoes: false,
            cucumbers: false,
            sweetPeppers: false,
            beans: false,
            peas: false,
            carrots: false,
            squash: false,
            lettuce: false,
            watermelon: false,
            onion: false,
            sweetCorn: false,
            cabbage: false,
            potatoes: true,
            radishes: false,
            mint: false,
            basil: false,
            cilantro: false,
            beets: false,
            zucchini: false,
            broccoli: false,
            other: false,
            theme: true
        })
        UserProfiles.create({
            userName: 'whalegurl',
            firstName:'marge',
            lastName: 'beluga',
            gender: 'female',
            email: 'beluga@gmail.com',
            location: 'raleigh',
            geocode: '23-57-23-192',
            password: 'we need to hash this too',
            image: 'yay images',
            avatar: 'not a potato',
            intro: 'I dont  like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: true,
            flowers: true,
            tomatoes: true,
            cucumbers: true,
            sweetPeppers: true,
            beans: true,
            peas: true,
            carrots: true,
            squash: true,
            lettuce: true,
            watermelon: true,
            onion: true,
            sweetCorn: true,
            cabbage: true,
            potatoes: false,
            radishes: true,
            mint: true,
            basil: true,
            cilantro: true,
            beets: true,
            zucchini: true,
            broccoli: true,
            other: true,
            theme: false
        })
        UserProfiles.create({
            userName: 'strangerdanger',
            firstName:'random',
            lastName: 'stranger',
            gender: 'non-binary',
            email: 'ihadbugsforlunch@gmail.com',
            location: 'chapel hill',
            geocode: '23-57-23-192',
            password: 'we need to hash this too too',
            image: 'yay images',
            avatar: 'not a potato',
            intro: 'I dont  like to eat potatoes',
            hasGarden: true,
            availableTime: 5,
            organic: false,
            flowers: true,
            tomatoes: true,
            cucumbers: true,
            sweetPeppers: true,
            beans: true,
            peas: true,
            carrots: true,
            squash: true,
            lettuce: true,
            watermelon: true,
            onion: true,
            sweetCorn: true,
            cabbage: true,
            potatoes: false,
            radishes: true,
            mint: false,
            basil: true,
            cilantro: true,
            beets: true,
            zucchini: true,
            broccoli: true,
            other: true,
            theme: true
        })
    });
    
    
}
