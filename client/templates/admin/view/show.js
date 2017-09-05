/**
 * Created by Liu on 2017/4/10.
 */
Template.admin.events({
    'click #publish': function (evt) {
        evt.preventDefault();
        console.log('hello');
        $("#add").toggle();
        $("#ed").hide();

    }
});
Template.admin.events({
    'click #manage': function (evt) {
        evt.preventDefault();
        console.log('hello');
        $("#ed").toggle();
        $("#add").hide();

    }
});