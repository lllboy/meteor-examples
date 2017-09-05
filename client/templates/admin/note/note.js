/**
 * Created by Liu on 2017/4/10.
 */
Notes = new Meteor.Collection("notes");
Template.note.events({
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
        var noteTitle = $("#noteTitle").val(),
            note = $("#note").val();
        Notes.insert({title:noteTitle,noteContent:note, time:time},function (err) {
            if(err){
                console.log(err);
            }
            $("#noteTitle").val("");
            $("#note").val("");
        });
        Router.go("/");


    }
});