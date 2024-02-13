export default class Widget {
    constructor() {
        this.button;
    }

    buildToDOM() {
        const container = document.querySelector('.container');
        const widget = document.createElement('div');
        widget.classList.add('widget');
        container.appendChild(widget);
        const button = document.createElement('button');
        button.classList.add('widget-button');
        button.textContent = 'Click to toggle popOver';
        widget.appendChild(button);
        this.button = button;
    }
}