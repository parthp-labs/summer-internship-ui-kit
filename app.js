/* -------------------------------------------------------------
 * TOAST SYSTEM
 * ------------------------------------------------------------- */

function showToast(title, message, type = "success") {
  let container = document.getElementById("toastContainer");

  // Create container dynamically if missing
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-msg";

  let accent = "var(--color-primary)";

  if (type === "success") {
    accent = "var(--color-success)";
  }

  if (type === "error") {
    accent = "var(--color-error)";
  }

  if (type === "warning") {
    accent = "var(--color-warning)";
  }

  if (type === "info") {
    accent = "var(--color-info)";
  }

  toast.innerHTML = `
    <div
      style="
        width: 4px;
        height: 100%;
        background: ${accent};
        position: absolute;
        left: 0;
        top: 0;
        border-radius: var(--radius-xs) 0 0 var(--radius-xs);
      "
    ></div>

    <div style="padding-left: var(--space-sm)">
      <div
        style="
          font-weight: var(--fw-bold);
          margin-bottom: 2px;
        "
      >
        ${title}
      </div>

      <div
        style="
          font-size: var(--fs-xs);
          color: #94A3B8;
        "
      >
        ${message}
      </div>
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

/* -------------------------------------------------------------
 * COPY COLOR VALUE
 * ------------------------------------------------------------- */

function copyValue(variableName, value) {
  const text = `${variableName}: ${value}`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("Copied!", `${variableName} copied successfully.`, "success");
    })
    .catch(() => {
      fallbackCopy(text);

      showToast("Copied!", `${variableName} copied successfully.`, "success");
    });
}

/* -------------------------------------------------------------
 * COPY SNIPPET
 * ------------------------------------------------------------- */

function copySnippet(snippetId) {
  const snippet = document.getElementById(snippetId);

  if (!snippet) {
    showToast("Snippet Missing", "Unable to locate snippet.", "error");

    return;
  }

  const code = snippet.innerText;

  navigator.clipboard
    .writeText(code)
    .then(() => {
      showToast("Snippet Copied!", "Code copied to clipboard.", "success");
    })
    .catch(() => {
      fallbackCopy(code);

      showToast("Snippet Copied!", "Code copied to clipboard.", "success");
    });
}

/* -------------------------------------------------------------
 * FALLBACK COPY
 * ------------------------------------------------------------- */

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");

  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();

  document.execCommand("copy");

  document.body.removeChild(textarea);
}

/* -------------------------------------------------------------
 * MODAL CONTROLS
 * ------------------------------------------------------------- */

function openDemoModal() {
  const modal = document.getElementById("demoModal");

  if (!modal) return;

  modal.classList.add("active");
}

function closeDemoModal() {
  const modal = document.getElementById("demoModal");

  if (!modal) return;

  modal.classList.remove("active");
}

function closeDemoModalOutside(event) {
  const modal = document.getElementById("demoModal");

  if (!modal) return;

  if (event.target === modal) {
    closeDemoModal();
  }
}

/* -------------------------------------------------------------
 * SEGMENTED CONTROL
 * ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const segmentedControls = document.querySelectorAll(".segmented-control");

  segmentedControls.forEach((control) => {
    const buttons = control.querySelectorAll(".segmented-item");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });

        button.classList.add("active");
      });
    });
  });
});
