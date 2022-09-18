(() => {
    let count = 0;

    const counter_display_number = document.getElementById('count-number');
    const count_up_button = document.getElementById('count-up');

    const update_display = () => {
        counter_display_number.textContent = String(count).padStart(5, '0');
    };

    const count_up = () => {
        count++;
        update_display();
    }

    count_up_button.addEventListener('click', count_up)
})();