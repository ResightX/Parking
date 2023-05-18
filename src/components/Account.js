

function Account (){
	return (
<div class="container">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#profile">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#messages">Messages</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#settings">Settings</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="profile" class="tab-pane fade show active">
      <h3>Profile content</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div id="messages" class="tab-pane fade">
      <h3>Messages content</h3>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="settings" class="tab-pane fade">
      <h3>Settings content</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>
	);
}

export default Account;
