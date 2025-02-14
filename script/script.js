let lenis;
$(function ($) {
  const portfolio = {
    init() {
      this.smoothScroll();
      this.cursor();
      this.pageNav();
      this.header();
      this.intro();
      this.about();
      this.skill();
      this.portfolio();
    },
    smoothScroll() {
      lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    },
    cursor() {
      $(window).on("mousemove", function (e) {
        const $cursor = $(".cursor");
        $cursor.attr(
          "style",
          "top : " + (e.clientY - 15) + "px; left: " + (e.clientX - 15) + "px;"
        );
      });
    },
    pageNav() {
      // Page Navigation Function
      function pageNavigation(anchor) {
        const $sectionLocation = $(anchor).attr("href");

        $("html, body").animate(
          { scrollTop: $($sectionLocation).offset().top },
          500
        );
      }
      $(".page-nav a, .mo-page-nav a").click(function (e) {
        e.preventDefault();
        pageNavigation(this);

        // Mobile Navigation
        if ($(this).closest(".mo-page-nav").length) {
          $(".mo-page-nav").removeClass("active");
          $(".mo-hamburger").removeClass("active");
        }
      });
    },
    header() {
      // Mobile Hamburger Button Click
      $(".mo-hamburger").click(function () {
        $(this).toggleClass("active");
        $(".mo-page-nav").toggleClass("active");
      });
    },
    intro() {
      const $introText = $(".intro-text b");
      const $introTitle = $(".intro-text h1");
      const $introImage = $(".intro-image");
      const $rollingBannerWrap = $(".intro-rolling-banner");
      const $rollingBanner = $(".rolling-banner");

      // Intro Text Animation
      let introTextAnimation = gsap.timeline();
      introTextAnimation
        .from($introText, {
          opacity: 0,
          ease: "expo",
          y: 100,
          duration: 1,
        })
        .from($introTitle, {
          opacity: 0,
          y: 100,
          ease: "expo",
          duration: 1,
        })
        .from($introImage, {
          scale: 0,
          x: 200,
          ease: "expo",
          duration: 1,
        })
        .from($rollingBannerWrap, {
          opacity: 0,
        });

      // Intro Rolling Banner Script
      $cloneBanner = $rollingBanner.clone(true);
      $rollingBannerWrap.append($cloneBanner);
      $rollingBanner.addClass("original");
      $cloneBanner.addClass("clone");
    },
    about() {
      const $introSection = $(".intro-section");
      const $aboutMe = $(".about-me");
      const $profileImg = $(".profile-img");
      const $profileIntro = $(".profile-intro");
      const $education = $(".education");
      const $profileDetails = $(".profile-details");
      const aboutMeAnimation = gsap.timeline();

      let responsive = gsap.matchMedia();
      responsive.add("(min-width: 1025px)", () => {
        aboutMeAnimation
          .from($aboutMe, {
            scale: 0,
            opacity: 0,
          })
          .from($profileImg, {
            opacity: 0,
          })
          .from($profileIntro, {
            opacity: 0,
          })
          .from($education, {
            opacity: 0,
          })
          .from($profileDetails, {
            opacity: 0,
          });
        ScrollTrigger.create({
          animation: aboutMeAnimation,
          trigger: $introSection,
          start: "top  top",
          end: "bottom top",
          scrub: 4,
        });
      });
    },
    skill() {
      // Skill & Tooll Card Fade Animation
      const $aboutSection = $(".about-section");
      const $sntCard = gsap.utils.toArray(".snt-list li");

      let responsive = gsap.matchMedia();
      responsive.add("(min-width: 1025px)", () => {
        $sntCard.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            duration: 2,
            scrollTrigger: {
              trigger: $aboutSection,
              start: "top+=500 top",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      });
    },
    portfolio() {
      $.featherlight.defaults.iframeAllowFullscreen = true;
      $.featherlight.defaults.iframeAllow = "fullscreen; autoplay";

      // Website Portfolio Horizontal Scroll
      const $websitePortfolio = $(".website-portfolio");
      const $website = gsap.utils.toArray(".website");

      let responsive = gsap.matchMedia();
      responsive.add("(max-width: 767px)", () => {
        // Widget Portfolio List Show
        $(".widget").slice(0, 3).show();
        $(".show-widget-btn").click(function () {
          $(".widget:hidden")
            .slice(0, 1)
            .fadeIn(function () {
              lenis.resize();
            });
          if ($(".widget:hidden").length === 0) {
            $(this).hide();
          }
        });
      });
      responsive.add("(min-width: 1025px)", () => {
        gsap.to($website, {
          xPercent: -100 * ($website.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: $websitePortfolio[0],
            start: "top top",
            end: () => "+=" + ($websitePortfolio[0].offsetWidth - innerWidth),
            pin: true,
            scrub: 1,
          },
        });
        // Widget Portfolio List Show
        $(".widget").slice(0, 3).show();
        $(".show-widget-btn").click(function () {
          $(".widget:hidden")
            .slice(0, 3)
            .fadeIn(function () {
              lenis.resize();
            });
          if ($(".widget:hidden").length === 0) {
            $(this).hide();
          }
        });
      });
      // Widget Portfolio List Show : Tablet
      responsive.add("(min-width: 768px) and (max-width: 1024px)", () => {
        $(".widget").slice(0, 2).show();
        $(".show-widget-btn").click(function () {
          $(".widget:hidden")
            .slice(0, 2)
            .fadeIn(function () {
              lenis.resize();
            });
          if ($(".widget:hidden").length === 0) {
            $(this).hide();
          }
        });
      });

      // Widget Close Scroll Position Setting
      let scrollPosition = 0;

      $('a[data-featherlight="iframe"]').on("click", function () {
        scrollPosition = lenis.scroll;
        console.log(scrollPosition);
      });

      $(document).on("click", ".featherlight-close", function () {
        lenis.scrollTo(scrollPosition, { duration: 0 });
      });
    },
  };
  portfolio.init();
}, jQuery);
