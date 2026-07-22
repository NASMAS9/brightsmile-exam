console.log("BrightSmile JavaScript loaded");

const appointmentForm = document.getElementById("appointment-form");
const formMessage = document.getElementById("form-message");
const scrollToTopButton = document.getElementById("scroll-to-top");

if (appointmentForm && formMessage) {
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email) {
            formMessage.textContent =
                "Please enter your name and email address.";

            return;
        }

        formMessage.textContent =
            `Thank you, ${name}. Your message has been sent successfully.`;

        appointmentForm.reset();
    });
}

function updateScrollButton() {
    if (!scrollToTopButton) {
        return;
    }

    if (window.scrollY > 300) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
}

window.addEventListener("scroll", updateScrollButton);
updateScrollButton();

if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}