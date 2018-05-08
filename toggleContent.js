/**
 * Created by nihkileshkshirsagar on 5/23/17.
 */

function toggleContent(projectID, dataObj){
    $('#profile').html('');
    $('#title').html(dataObj[projectID].projectTitle);
    $('#description').html('description').text(dataObj[projectID].projectDescription);
}

window.onload = function(){
    // load the profile content on the page load
    $('#profile').load('profile.html');
    userProj = userPorjects();
    var num = 1;
    // bind the url to project titles
    jQuery.each(userProj, function(key, proj) {
        $('#sideBarHolder').append('<a href="#" class="list-group-item listProj" id="'
            + num + '">' + proj.projectTitle +  '</a>');
        num++;
    });

    $('#viewNProfile').click(function(){
        $('#viewNProfile').removeClass('animated pulse');
        $('#viewNProfile').addClass('animated pulse');
        $('#title').html('');
        $('#description').html('');
        $('#profile').load('profile.html');
    });

    $('a.list-group-item').click(function(){
        console.log(this.id);
        toggleContent(this.id, userProj);
    });
}

