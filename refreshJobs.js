function refreshJobList(intervalInMilliseconds) {
  setInterval(() => {
    const button = document.querySelector("#wfAllJobsBoard > div.row-fluid.WFToolbar > div.span7.WFButtonContainer.btn-group > a > i");
    if(button) {
      button.click();
    }
  }, intervalInMilliseconds)
}

refreshJobList();