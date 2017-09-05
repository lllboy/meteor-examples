import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//create a collectiion "posts"
Posts = new Meteor.Collection("posts");
Template.article.events({
  'click #submit': function (evt) {
      evt.preventDefault();
      //时间格式
      var date = new Date();
      var time = {
          date: date,
          year: date.getFullYear(),
          month: date.getFullYear() + "-" + (date.getMonth()+1),
          day: date.getFullYear() + "-" + (date.getMonth()+1) +"-" + date.getDate(),
          minute: date.getFullYear() +"-"+ (date.getMonth()+1) +"-"+ date.getDate() +" " +date.getHours() + ":"+(date.getMinutes()<10 ? "0" + date.getMinutes():date.getMinutes())
      };
      var $title = $("#title").val(),
          tags= $("#tag").val(),
          description = $("#description").val(),
          $content = $("#content").val();
          Posts.insert({title:$title, tag:tags, content:$content, description:description ,time:time},function (err) {
              if(err){
                  console.log(err);
              }
              $("#title").val("");
              $("#tag").val("");
              descraption = $("#description").val("");
              $("#content").val("");
          });
          Router.go("/");

  }
});

Template.index.posts = function () {
    return Posts.find({},{sort:{time:-1}});
};
Template.index.helpers({
    postcount: function () {
        return Posts.find({}).count();
    }
})
Template.tags.helpers({
    tags:function () {
        return Posts.find({})
    },

});

Template.timeline.timelines = function () {
  return
};
Template.adminstrate.helpers({
    posts:function () {
       return Posts.find({}) ;
    }
});


