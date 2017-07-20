$(document).ready(function(){
    $("#add-new-to-do-button").click(function(){
        var todoBlock = $(this).closest("#new-to-do-block");
        var description = todoBlock.find("#new-to-do-description");
        var PomodoroEstimate = todoBlock.find("#new-Pomodoro-estimate");
        $("ul").append("<li><input type = 'checkbox'/>" + description.val() + "<span class = 'Pomodoro-estimate'>"  +  PomodoroEstimate.val()  +  "Pomodoros </span></li>");
        description.val("");
        PomodoroEstimate.val("");
    });
});