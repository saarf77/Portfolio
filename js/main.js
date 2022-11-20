'use strict'

$(onInit)

function onInit() {
  renderProjects()
  $('.btn-submit').click(addSubmit)
}

function addSubmit() {
  const subject = $('.subject').val()
  const mail = $('.mail').val()
  const text = $('.textarea').val()
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=saarf77@gmail.com&su=${subject}&body=${text}`
  )
}

function renderProjects() {
  var projs = getProjs()
  var strHTML = projs.map(renderProject)
  projs.map(console.log)
  $('.row1').html(strHTML)
  $('.portfolio-item').on('click', renderModal)
}

function renderProject(project) {
  return `
<div class="col-md-4 col-sm-6 portfolio-item" data-proj=${project.id} >
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="">
        <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
    </a>
    <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
    </div>
</div>
    `
}

function renderModal() {
  const id = $(this).data().proj
  const project = getProjById(id)
  const strHTML = `
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <a target="_blank" href="${project.url}"><img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}.png" alt=""></a>

                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${project.publishedAt}</li>
                  <li>Client: ${project.client}</li>
                  <li>Category: ${project.labels}</li>
                </ul>
                <a target="_blank" style="background-color:red;" class="btn btn-primary" href="${project.url}">Check it out!</a>

  `
  $('.modal-body').html(strHTML)
}

                // <video autoplay controls  width="100%"  > <source src="/img/portfolio/${project.id}.webm " type="video/webm"> </video>
