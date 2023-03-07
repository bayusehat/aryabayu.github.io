<template>
  
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>PhotoFolio Bootstrap Template - Index</title>
  <meta content="" name="description">
  <meta content="" name="keywords">


  <!-- =======================================================
  * Template Name: PhotoFolio - v1.2.0
  * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <i class="bi bi-camera"></i>
        <h1>PhotoFolio</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link v-on:click="myNav('home')" v-class="{active : isActive == 'home'}" to="/">Home</router-link></li>
          <li><router-link v-on:click="myNav('about')" v-class="{active : isActive == 'about'}" to="/about">About</router-link></li>
          <li><router-link v-on:click="myNav('work')" v-class="{active : isActive == 'work'}" to="/work">Work</router-link></li>
        </ul>
      </nav><!-- .navbar -->

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
<!-- <main id="main" data-aos="fade" data-aos-delay="1500"> -->
  <router-view />
<!-- </main> -->
<!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>PhotoFolio</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/ -->
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer><!-- End Footer -->

<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- <div id="preloader">
  <div class="line"></div>
</div> -->

<!-- Vendor JS Files -->

</body>

</html>
</template>
<script>
// import Favicon from "../src/assets/img/favicon.png";
// import AppletouchIcon from "../src/assets/img/apple-touch-icon.png";
  export default {
    data(){
      return {
        isActive : 'home'
      }
    },
    methods: {
      myNav(men){
        this.isActive = this.isActive === men ? 'home' : men
      }
    },
    async mounted(){
      let bsBundle = document.createElement('script')
      bsBundle.setAttribute('src', '../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
      let swBundle = document.createElement('script')
      swBundle.setAttribute('src', '../src/assets/vendor/swiper/swiper-bundle.min.js')
      let glightbox = document.createElement('script')
      glightbox.setAttribute('src', '../src/assets/vendor/glightbox/js/glightbox.min.js')
      let aos = document.createElement('script')
      aos.setAttribute('src', '../src/assets/vendor/aos/aos.js')
      let main = document.createElement('script')
      main.setAttribute('src', '../src/assets/js/main.js')
      document.html.appendChild(bsBundle)
      document.html.appendChild(swBundle)
      document.html.appendChild(glightbox)
      document.html.appendChild(aos)
      document.html.appendChild(main)
    }
  }
</script>
<style>
@import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap");
@import url("../src/assets/vendor/bootstrap/css/bootstrap.min.css");
@import url("../src/assets/vendor/bootstrap-icons/bootstrap-icons.css");
@import url("../src/assets/vendor/swiper/swiper-bundle.min.css");
@import url("../src/assets/vendor/glightbox/css/glightbox.min.css");
@import url("../src/assets/vendor/aos/aos.css");
@import url("../src/assets/css/main.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
