/**
 * Created by Liu on 2017/3/18.
 */
Template.login.events({
    'click #login': function (evt) {
        evt.preventDefault();
        var adminstrator = $("#adminstrator").val(),
            passWord = $("#passWord").val();
            if(adminstrator=="wuxing" && passWord =="123456"){
                Router.go("/admin");
            }else{
                console.log(adminstrator);
                Router.go("/login");
            }



    }
})