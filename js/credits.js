function pop(){
    let timerInterval
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButtonColor: 'btn btn-success',
        cancelButtonColor:'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Credits',
      text: "Updates & credits & designs",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'iCraze',
      cancelButtonText: 'Jailed Creations',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
            title: '<strong> iCraze credits</strong>',
            icon: 'info',
            html:
              '<b></b> Designed old layout<br> <br>' +
              '<a href="https://mobile.twitter.com/iCrazeiOS"> <i class="fab fa-twitter"></i> Twitter</a>',
            showCloseButton: true, 
            focusConfirm: false,
            confirmButtonText:
              'oh ok',
            confirmButtonAriaLabel: 'Ok',
            
            })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: '<strong> Jailed Creations credits</strong>',
          icon: 'info',
          html:
            '<b> updated everything with the help of roarijo89</b><br> <br>' +
            '<a href="https://mobile.twitter.com/JailedCreations"> <i class="fab fa-twitter"></i> Twitter</a>',
          showCloseButton: true, 
          focusConfirm: false,
          confirmButtonText:
            'Thank u',
          confirmButtonAriaLabel: 'Thank you',
          
          })
      }
    });
  }
// in type possible value are success/error/wa/rning /info.