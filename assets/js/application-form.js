(function () {
  'use strict';

  const STORAGE_KEY = 'aiacStudentApplications';

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-application-form');
    const status = document.getElementById('application-status');
    if (!form || !status) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const application = Object.fromEntries(new FormData(form).entries());
      application.usn = String(application.usn).trim().toUpperCase();
      application.collegeEmail = String(application.collegeEmail).trim().toLowerCase();
      application.submittedAt = new Date().toISOString();
      application.applicationId = `AIAC-${Date.now()}`;

      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        const applications = saved === null ? [] : JSON.parse(saved);
        if (!Array.isArray(applications)) {
          throw new Error('Saved application data is not in the expected format.');
        }

        applications.push(application);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
        status.className = 'mb-4 rounded-md border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-300';
        status.textContent = `Application saved in this browser. Reference: ${application.applicationId}. This has not been sent to AIAC.`;
        form.reset();
      } catch (error) {
        status.className = 'mb-4 rounded-md border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-sm text-red-800 dark:text-red-300';
        status.textContent = `Application could not be saved in this browser. ${error instanceof Error ? error.message : 'Browser storage is unavailable.'}`;
      }
    });
  });
})();
