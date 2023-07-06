<template>
    <div class="page-header d-flex align-items-center">
      <div class="container position-relative">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 text-center">
            <h2>Contact</h2>
          </div>
        </div>
      </div>
    </div><!-- End Page Header -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img :src="require('@/assets/img/profile-img.jpg')" class="img-fluid" alt="">
          </div>
          <div class="col-lg-5 content">
            <div class="form-group">
              <label class="labels">Name <small class="text-danger">*</small></label>
              <input type="text" name="name" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label class="labels">Subject <small class="text-danger">*</small></label>
              <input type="text" name="subject" class="form-control" id="subject">
            </div>
            <div class="form-group">
              <label class="labels">E-mail <small class="text-danger">*</small></label>
              <input type="text" name="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label class="labels">Message <small class="text-danger">*</small></label>
              <textarea name="message" id="message" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <router-link class="cta-btn-content mt-4" to="/contact">Send a Message</router-link>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
  </template>

<script>
export default {
    name : "Contact"
}
</script>