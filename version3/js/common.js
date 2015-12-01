//Validations for login module
function validateForm(){
  var reqObj  = document.getElementsByClassName("required");
  var valid = 0;
  for(var i=0; i<reqObj.length; i++){
    var val = reqObj[i].value;
    var thisID  = reqObj[i].id;
    var errMsg  = reqObj[i].getAttribute("data-valid");
    if(val === ''){
      document.getElementById('error_'+thisID).innerHTML = errMsg;
      document.getElementById('error_'+thisID).style.display = "block";
      valid++;
    }else{
      document.getElementById('error_'+thisID).innerHTML = '';
      document.getElementById('error_'+thisID).style.display = "none";
    }
  }
  if(valid > 0){
    return false;
  }
}

//Dashboard - To Change POST option
function changePostOption(opt){
  switch(opt){
    case 'S':{
      document.getElementById("post_div").style.display = "block";
      document.getElementById("post_pic").style.display = "none";
      document.getElementById("post_vdo").style.display = "none";
      break;
    }
    case 'P':{
      document.getElementById("post_div").style.display = "none";
      document.getElementById("post_pic").style.display = "block";
      document.getElementById("post_vdo").style.display = "none";
      break;
    }
    case 'V':{
      document.getElementById("post_div").style.display = "none";
      document.getElementById("post_pic").style.display = "none";
      document.getElementById("post_vdo").style.display = "block";
      break;
    }
  }
}

//Dashboard - Mobile Notification bar
function showNotificationBar(thisElem){
  if(thisElem.id === 'O'){
    thisElem.id = 'C';
    document.getElementById("notification_bar").style.display = "block";
    document.getElementsByClassName("content")[0].style.display = "none";
  }else if(thisElem.id === 'C'){
    thisElem.id = 'O';
    document.getElementById("notification_bar").style.display = "none";
    document.getElementsByClassName("content")[0].style.display = "block";
  } 
}

//Dashboard - Edit Post
function editPost(me,id){
  document.getElementById("post_text_"+id).style.display = "none";
  document.getElementById("post_"+id).style.display = "block";
  document.getElementById("update_"+id).style.display = "inline-block";
  me.style.display = "none";
}

//Dashboard - Update Post
function updatePost(me,id){
  document.getElementById("post_text_"+id).style.display = "block";
  document.getElementById("post_"+id).style.display = "none";
  document.getElementById("edit_"+id).style.display = "inline-block";
  me.style.display = "none";
}

//Dashboard - Edit Image
function editImage(me,id){
  document.getElementById("image_desc_"+id).style.display = "none";
  document.getElementById("image_text_"+id).style.display = "block";
  document.getElementById("edit_image_"+id).style.display = "inline-block";
  document.getElementById("edit_image_div_"+id).style.display = "block";
  document.getElementById("update_image_"+id).style.display = "inline-block";
  me.style.display = "none";
}

//Dashboard - Update Image
function updateImage(me,id){
  document.getElementById("image_desc_"+id).style.display = "block";
  document.getElementById("image_text_"+id).style.display = "none";
  document.getElementById("edit_image_"+id).style.display = "none";
  document.getElementById("edit_image_div_"+id).style.display = "none";
  document.getElementById("edit_image_"+id).style.display = "inline-block";
  me.style.display = "none";
}

//Dashboard - Edit Video
function editVideo(me,id){
  document.getElementById("edit_video_div_"+id).style.display = "block";
  document.getElementById("video_desc_"+id).style.display = "none";
  document.getElementById("update_video_"+id).style.display = "inline-block";
  document.getElementById("video_text_"+id).style.display = "block";
  me.style.display = "none";
}

//Dashboard - Update Video
function updateVideo(me,id){
  document.getElementById("edit_video_div_"+id).style.display = "none";
  document.getElementById("video_desc_"+id).style.display = "block";
  document.getElementById("edit_video_"+id).style.display = "inline-block";
  document.getElementById("video_text_"+id).style.display = "none";
  me.style.display = "none";
}

//Dashboard - Delete Post
function deletePost(id){
  if(confirm("Are you sure want to remove this post?")){
    document.getElementById("post_data_"+id).remove();
    document.getElementsByClassName("failure")[0].innerHTML = "Post has been deleted successfully.";
    document.getElementsByClassName("failure")[0].style.display = "block";
  }
}

//Gallery - Delete Image
function deleteImage(id){
  if(confirm("Are you sure want to remove this Image?")){
    document.getElementById("image_"+id).remove();
    document.getElementsByClassName("failure")[0].innerHTML = "Image has been deleted successfully.";
    document.getElementsByClassName("failure")[0].style.display = "block";
  }
}

//Gallery - Delete Video
function deleteVideo(id){
  if(confirm("Are you sure want to remove this Video?")){
    document.getElementById("video_"+id).remove();
    document.getElementsByClassName("failure")[0].innerHTML = "Video has been deleted successfully.";
    document.getElementsByClassName("failure")[0].style.display = "block";
  }
}

//Gallery - Delete Audio
function deleteAudio(id){
  if(confirm("Are you sure want to remove this Audio?")){
    document.getElementById("audio_"+id).remove();
    document.getElementsByClassName("failure")[0].innerHTML = "Audio has been deleted successfully.";
    document.getElementsByClassName("failure")[0].style.display = "block";
  }
}

//Gallery - Change Type
function changeGalleryType(type){
  switch(type){
    case 'I':
      document.getElementById("image_grid").style.display = "block";
      document.getElementById("video_grid").style.display = "none";
      document.getElementById("audio_grid").style.display = "none";
      break;
    
    case 'V':
      document.getElementById("image_grid").style.display = "none";
      document.getElementById("video_grid").style.display = "block";
      document.getElementById("audio_grid").style.display = "none";
      break;
    
    case 'A':
      document.getElementById("image_grid").style.display = "none";
      document.getElementById("video_grid").style.display = "none";
      document.getElementById("audio_grid").style.display = "block";
      break;
    
    
  }
}

//Gallery - Media popup open
function openMediaPopup(mediaType){
  document.getElementById("fade").style.display = "block";
  switch(mediaType){
    case 'I':      
      document.getElementById("image_popup").style.display = "block";
    break;
    case 'V':      
      document.getElementById("video_popup").style.display = "block";
    break;
  }
}

//Gallery - Media popup close
function closeMediaPopup(mediaType){
  document.getElementById("fade").style.display = "none";
  switch(mediaType){
    case 'I':      
      document.getElementById("image_popup").style.display = "none";
    break;
    case 'V':      
      document.getElementById("video_popup").style.display = "none";
    break;
  }
}