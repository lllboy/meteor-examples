/**
 * Created by Liu on 2017/4/10.
 */
Template.notebook.helpers({
    notes: function () {
        return Notes.find({});
    }
});
Template.notebook.helpers({
    notecount: function () {
        return Notes.find({}).count();
    }
})