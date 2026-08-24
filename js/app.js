document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const projectsContainer = document.getElementById('projectsContainer');
  const toggleProjectsBtn = document.getElementById('toggleProjectsBtn');
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalMacClose = document.getElementById('modalMacClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalSectionTitle = document.getElementById('modalSectionTitle');
  const modalSnippet = document.getElementById('modalSnippet');
  const modalDesc = document.getElementById('modalDesc');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalDemoLink = document.getElementById('modalDemoLink');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksList = document.querySelector('.nav-links');

  let isAllProjectsVisible = false;
  const INITIAL_PROJECT_COUNT = 4;

  function renderProjects(showAll = false) {
    if (!projectsContainer || !Array.isArray(projectsData)) return;

    projectsContainer.innerHTML = '';
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_PROJECT_COUNT);

    visibleProjects.forEach((proj) => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-id', proj.id);

      const previewCode = proj.previewSnippet ? proj.previewSnippet : `// ${proj.title}\n// Tech: ${proj.technologies.join(', ')}`;

      card.innerHTML = `
        <div class="project-thumbnail">
          <div class="code-preview-screen">
            <div class="code-dots">
              <span></span><span></span><span></span>
            </div>
            <pre><code>${escapeHtml(previewCode)}</code></pre>
          </div>
        </div>
        <div class="project-body">
          <div class="project-meta-top">
            <span class="project-tag">${proj.tag || proj.category}</span>
            <span class="project-year">${proj.year || '2026'}</span>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.shortDesc}</p>
          <div class="project-actions">
            <button class="btn-action btn-details" data-id="${proj.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              View Details
            </button>
            <a href="${proj.demoUrl || proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Code
            </a>
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });

    document.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openModal(id);
      });
    });

    if (window.observeNewProjects) {
      window.observeNewProjects();
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function openModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    modalTitle.textContent = `${project.title} - Overview`;
    modalSectionTitle.textContent = project.title;
    modalDesc.textContent = project.fullDesc || project.shortDesc;
    modalSnippet.textContent = project.previewSnippet || `// ${project.title}`;
    
    modalTechStack.innerHTML = '';
    project.technologies.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'modal-tech-tag';
      tag.textContent = tech;
      modalTechStack.appendChild(tag);
    });

    modalGithubLink.href = project.githubUrl;
    modalDemoLink.href = project.demoUrl || project.githubUrl;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalMacClose) modalMacClose.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (toggleProjectsBtn) {
    toggleProjectsBtn.addEventListener('click', () => {
      isAllProjectsVisible = !isAllProjectsVisible;
      renderProjects(isAllProjectsVisible);

      if (isAllProjectsVisible) {
        toggleProjectsBtn.innerHTML = `
          <span>Show Less</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
        `;
      } else {
        toggleProjectsBtn.innerHTML = `
          <span>View All (${projectsData.length}) Projects</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        `;
      }
    });
  }

  function onScroll() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}` || (current === '' && href === '#intro')) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);

  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      navLinksList.classList.toggle('show-mobile');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('show-mobile');
      });
    });
  }

  function initAnimations() {
    if (typeof Motion !== 'undefined') {
      const { animate, inView } = Motion;

      animate('.hero-title', { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, easing: [0.16, 1, 0.3, 1] });
      animate('.hero-bio', { opacity: [0, 1], y: [25, 0] }, { duration: 0.8, delay: 0.15, easing: [0.16, 1, 0.3, 1] });
      
      document.querySelectorAll('.hero-contacts .contact-card').forEach((card, idx) => {
        animate(card, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: 0.25 + (idx * 0.1), easing: [0.16, 1, 0.3, 1] });
      });

      animate('.hero-avatar-wrapper', { opacity: [0, 1], scale: [0.92, 1] }, { duration: 1, delay: 0.2, easing: [0.16, 1, 0.3, 1] });

      document.querySelectorAll('.timeline-col').forEach(col => {
        inView(col, () => {
          const items = col.querySelectorAll('.timeline-item');
          items.forEach((item, i) => {
            animate(item, { opacity: [0, 1], x: [-30, 0], y: [15, 0] }, { duration: 0.65, delay: i * 0.12, easing: [0.2, 0.9, 0.3, 1.2] });
          });
        }, { margin: "0px 0px -60px 0px" });
      });

      document.querySelectorAll('.stack-category').forEach(cat => {
        inView(cat, () => {
          const label = cat.querySelector('.category-label');
          if (label) {
            animate(label, { opacity: [0, 1], y: [15, 0] }, { duration: 0.5, easing: [0.16, 1, 0.3, 1] });
          }

          const badges = cat.querySelectorAll('.tech-badge');
          badges.forEach((badge, idx) => {
            animate(badge, 
              { opacity: [0, 1], y: [20, 0], scale: [0.94, 1] }, 
              { duration: 0.55, delay: idx * 0.05, easing: [0.2, 0.9, 0.3, 1.2] }
            );
          });
        }, { margin: "0px 0px -40px 0px" });
      });

      window.observeNewProjects = () => {
        document.querySelectorAll('.project-card').forEach((card, idx) => {
          inView(card, () => {
            animate(card, 
              { opacity: [0, 1], y: [35, 0], scale: [0.96, 1] }, 
              { duration: 0.7, delay: (idx % 2) * 0.15, easing: [0.16, 1, 0.3, 1] }
            );
          }, { margin: "0px 0px -50px 0px" });
        });
      };

      window.observeNewProjects();

      const aboutBox = document.querySelector('.about-box');
      if (aboutBox) {
        inView(aboutBox, () => {
          animate(aboutBox.querySelectorAll('.about-text-block p'), 
            { opacity: [0, 1], y: [20, 0] }, 
            { duration: 0.6, delay: 0.1, easing: [0.16, 1, 0.3, 1] }
          );

          aboutBox.querySelectorAll('.hobby-pill').forEach((pill, idx) => {
            animate(pill, 
              { opacity: [0, 1], y: [18, 0], scale: [0.9, 1] }, 
              { duration: 0.5, delay: 0.2 + (idx * 0.08), easing: [0.2, 0.9, 0.3, 1.2] }
            );
          });
        }, { margin: "0px 0px -60px 0px" });
      }

    } else {
      document.querySelectorAll('.reveal, .timeline-item, .contact-card, .project-card, .tech-badge, .hobby-pill').forEach(el => {
        el.classList.add('active-reveal');
      });
    }
  }

  renderProjects(false);
  initAnimations();
  onScroll();
});
