class Controls {
    constructor() {
        this.fordward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }


    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.fordward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.fordward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }

    }


}