(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  navToggle.addEventListener("click", function () {
    var open = mobileNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Course rail + panel ---------- */
  var rail = document.getElementById("courseRail");
  var panel = document.getElementById("coursePanel");

  function renderRail(activeId) {
    rail.innerHTML = "";
    COURSES.forEach(function (course) {
      var btn = document.createElement("button");
      btn.className = "course-btn" + (course.id === activeId ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", course.id === activeId ? "true" : "false");
      btn.dataset.id = course.id;
      btn.innerHTML =
        '<span class="ring-num">' + course.ring + '</span>' +
        '<span class="btn-text">' +
          '<span class="btn-name">' + course.name + '</span>' +
          '<span class="btn-tagline">' + course.tagline + '</span>' +
        '</span>';
      btn.addEventListener("click", function () {
        selectCourse(course.id);
      });
      rail.appendChild(btn);
    });
  }

  function renderPanel(course) {
    var reflectionHtml = course.reflection.map(function (r) {
      return (
        '<div class="reflection-item">' +
          '<span class="reflection-tag">' + r.tag + '</span>' +
          '<p class="reflection-q">' + r.q + '</p>' +
          '<p class="reflection-a">' + r.a + '</p>' +
        '</div>'
      );
    }).join("");

    var artifactHtml =
      '<div class="artifact-list">' +
        '<details class="artifact-item" open>' +
          '<summary class="artifact-summary">Artefak yang dipilih <span class="plus">+</span></summary>' +
          '<p class="artifact-body">' + course.artifact.what + '</p>' +
        '</details>' +
        '<details class="artifact-item">' +
          '<summary class="artifact-summary">Alasan pemilihan <span class="plus">+</span></summary>' +
          '<p class="artifact-body">' + course.artifact.why + '</p>' +
        '</details>' +
        '<details class="artifact-item">' +
          '<summary class="artifact-summary">Bagian yang paling mendukung <span class="plus">+</span></summary>' +
          '<p class="artifact-body">' + course.artifact.part + '</p>' +
        '</details>' +
      '</div>';

    panel.innerHTML =
      '<div class="panel-head"><span class="panel-ring">' + course.ring + '</span><h3>' + course.name + '</h3></div>' +
      '<p class="panel-tagline">' + course.tagline + '</p>' +
      '<p class="panel-block-label">Refleksi 4C</p>' +
      '<div class="reflection-grid">' + reflectionHtml + '</div>' +
      '<p class="panel-block-label">Analisis Artefak Pembelajaran</p>' +
      artifactHtml;
  }

  function selectCourse(id) {
    var course = COURSES.filter(function (c) { return c.id === id; })[0];
    if (!course) return;
    renderRail(id);
    renderPanel(course);
  }

  if (COURSES && COURSES.length) {
    selectCourse(COURSES[0].id);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
