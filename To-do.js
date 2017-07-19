$(document).ready(function(){
    $("#add-new-todo-button").click(function(){
        var todoBlock = $(this).closest("#new-todo-block");
        var description = todoBlock.find("#new-todo-description");
        var pomodoroEstimate = todoBlock.find("#new-pomodoro-estimate");
        $("ul").append("<li><input type = 'checkbox'/>" + description.val() + "<span class = 'pomodoro-estimate'>"  +  pomodoroEstimate.val()  +  "pomodoros </span></li>");
        description.val("");
        pomodoroEstimate.val("");
    });
});