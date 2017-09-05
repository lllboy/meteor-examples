/**
 * Created by Liu on 2017/3/26.
 */
Template.adminstrate.events({
    'click #delete': function (evt) {
        evt.preventDefault();
        var post_title = $("#post_title");
        console.log(post_title)
        Posts.remove({_id:post_title}, function (err) {
            if(err){
                return err;
            }
            return null;
        });




    }
})