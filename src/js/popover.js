export default class Popover {
    constructor() {
        this.popover;
        this.button = document.querySelector('.widget-button');
        this.onBtnClick = this.onBtnClick.bind(this);
        this.positionPopover = this.positionPopover.bind(this);
        this.button.addEventListener('click', this.onBtnClick)
    }

    onBtnClick(e) {
        e.preventDefault();
        const popover = document.createElement('div');
        popover.classList.add('popover-widget');

        const title = document.createElement('h3');
        title.classList.add('popover-title');
        title.textContent = 'Popover title';

        const popbody = document.createElement('div');
        popbody.classList.add('popover-body');
        popbody.textContent = `And here's some amazing content. It's very engaging. Right?`;

        popover.appendChild(title);
        popover.appendChild(popbody);
        this.popover = popover;

        const container = document.querySelector('.container');
        container.appendChild(this.popover);
        this.positionPopover(this.button);
    }

    positionPopover(button) {
        const { top, left } = button.getBoundingClientRect();
        this.popover.style.top = `${window.scrollY + top - (this.popover.clientHeight + button.clientWidth / 16)}px`;
        this.popover.style.left = `${window.scrollX + left - (this.popover.clientWidth - button.clientWidth) / 2}px`;
        setTimeout(() => {
            this.popover.remove();
          }, 1500);
    }
}