<nav>
  <ul class="navbar">
    <li class="dektop_nav"><a href="<?php echo FOLDER_PATH_HTTP.'dashboard.php'?>"><i class="icon-edit"></i>Status</a></li>
    <li class="dektop_nav"><a href="<?php echo FOLDER_PATH_HTTP.'gallery.php'?>"><i class="icon-gallery"></i> Gallery</a></li>
    <li class="dektop_nav"><a href="<?php echo FOLDER_PATH_HTTP.'friends.php'?>"><i class="icon-friend"></i> Friends</a></li>
    <li class="dektop_nav">
      <a href="<?php echo FOLDER_PATH_HTTP.'messages.php'?>" class="parent">
        <span class="message_count">500</span>
        <i class="icon-message"></i> Messages
      </a>
    </li>
    <li class="dektop_nav"><a href="<?php echo FOLDER_PATH_HTTP.'settings.php'?>"><i class="icon-setting"></i> Settings</a></li>
    <li class="mobile_nav"><a href="<?php echo FOLDER_PATH_HTTP.'dashboard.php'?>"><i class="icon-edit"></i></a></li>
    <li class="mobile_nav"><a href="<?php echo FOLDER_PATH_HTTP.'gallery.php'?>"><i class="icon-gallery"></i></a></li>
    <li class="mobile_nav"><a href="<?php echo FOLDER_PATH_HTTP.'friends.php'?>"><i class="icon-friend"></i></a></li>
    <li class="mobile_nav">
      <a href="<?php echo FOLDER_PATH_HTTP.'messages.php'?>" class="parent">
        <span class="message_count">500</span>
        <i class="icon-message"></i>
      </a>
    </li>
    <li class="mobile_nav"><a href="javascript:void(0)" id="O" onclick="return showNotificationBar(this)"><i class="icon-notification"></i></a></li>
    <li class="mobile_nav"><a href="<?php echo FOLDER_PATH_HTTP.'settings.php'?>"><i class="icon-setting"></i></a></li>
  </ul>
</nav>