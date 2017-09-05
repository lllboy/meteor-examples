import { Meteor } from 'meteor/meteor';
if(Meteor.isServer)
    Meteor.methods({
        tags: function() {
            return Posts.distinct('tag');
        }
    });

if(Meteor.isClient)
    Meteor.call('tags', function(err,res) {
        if(err) {
            console.error(err);
        } else{
            console.log(res);
        }
    });
Meteor.startup(() => {
    Posts = new Meteor.Collection("posts");
    Notes = new Meteor.Collection("notes");
    Posts.allow({
        insert: function () {
            return true;
        },
        update: function () {
            return true;
        },
        remove: function () {
            return true;
        }
    });

    // code to run on server at startup
});
