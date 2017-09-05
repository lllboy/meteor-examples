/**
 * Created by Liu on 2017/3/11.
 */
//路由配置
Router.configure({
    //默认模板
    layoutTemplate: 'nav',
    //载入等待的时候显示的模板
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    //等待载入订阅这个以后再展示

});

//路由分配
//首页
Router.route('/', function () {
    this.render('index');
});

//文章页
Router.route("/article", function () {
    this.layout("admin");
    this.render("article")
});
Router.route("/article/:_id",{
    name: 'post_page',
    data: function() { return Posts.findOne(this.params._id); }
});

//标签页
Router.route("/tags");
Router.route("/tags/:tag", {
    name:'tag' ,
    data:function () {
        var tag = this.params.tag;
        return Posts.find({tag:tag}).fetch();
    }
});
//关于页
Router.route("/about");

//时间线
Router.route("/timeline");

//后台管理页
Router.route("/admin",function () {
    this.layout("admin");
    this.render("admin_Index");
});
//文章删改
Router.route("/adminstrate",function () {
    this.layout("admin");
    this.render("adminstrate")
});

//登录页
Router.route("/login", function () {
    this.render("login")
});


//note page
Router.route("/note",function () {
    this.layout("admin");
    this.render("note");
});

//notebook page
Router.route("/notebook", function () {
    this.render("notebook");
});
Router.route("/notebook/:_id",{
    name:"noteId",
    data: function () {
        return Notes.findOne({_id:this.params._id});
    }
});

Router.route("/contact",function () {
    this.render("contact")
});