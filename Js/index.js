
document.addEventListener("DOMContentLoaded", function() {
  const pageTitleMap = {
    'erp_fms.html': 'Finance Management System',
    'erp_cms.html': 'Customer Management System',
    'erp_sc.html': 'Supply Chain',
    'erp_mes.html': 'Machine Execution System',
    // ... Add more mappings as needed for other pages
  };

  // Function to get the basename of the current page
  function getPageName(url) {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  // Load the header and footer, then set the page-specific titles
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      let pageName = getPageName(window.location.href);
      let pageTitle = pageTitleMap[pageName];
      document.getElementById('page-title').textContent = pageTitle;
      document.title = pageTitle + " - ProSys Elite ERP";
    });

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});

document.getElementById("submit").addEventListener("Search",searchCustomer)
function searchCustomer(){}

document.getElementById("submit").addEventListener("Update",updateAccountInfo)
function updateAccountInfo(){}

document.getElementById("submit").addEventListener("Delete",deleteTransaction)
function deleteTransaction(){}

document.getElementById("submit").addEventListener("Create",addTransaction)
function addTransaction(){}

document.getElementById("submit").addEventListener("Create Customer",customerRegistration)
function customerRegistration(){}