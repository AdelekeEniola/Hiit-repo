document.addEventListener("DOMContentLoaded", () => {
    
    // Mapping pairs of: [Trigger Button ID, Target Modal ID]
    const modalMappings = [
        ["openModal1", "modal1"],
        ["openModal2", "modal2"],
        ["openModal3", "modal3"]
    ];

    modalMappings.forEach(([btnId, modalId]) => {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);

        if (btn && modal) {
            // Open Modal event
            btn.addEventListener("click", () => {
                modal.classList.add("active");
            });

            // Close when pressing the "X" button
            const closeBtn = modal.querySelector(".close-btn");
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    modal.classList.remove("active");
                });
            }

            // Close when clicking alternative internal cancellation selectors
            const inlineClose = modal.querySelector(".close-target");
            if (inlineClose) {
                inlineClose.addEventListener("click", () => {
                    modal.classList.remove("active");
                });
            }

            // Close when clicking anywhere outside on the blurred dark overlay backdrop
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.classList.remove("active");
                }
            });
        }
    });

    // Universal ESC keyboard key hook to safely exit any active modals
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal-overlay.active").forEach(activeModal => {
                activeModal.classList.remove("active");
            });
        }
    });
});