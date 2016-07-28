if (document.getElementById('new-branch')) {  
  var el = document.getElementById('new-branch').getElementsByTagName('a')[0];
  var url = el.href;
  var branchStart = url.search('branch_name') + 12;
  var branchEnd = url.search('issue_iid') - 1;
  var issueId = url.substring(branchEnd + 11);
  var branchName = 'feature/' + issueId;
  var newUrl = url.substring(0, branchStart) + escape(branchName) + url.substring(branchEnd);
  el.href = newUrl;
  el.setAttribute('title', branchName);
}
